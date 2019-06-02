package com.outsystems.plugins.oslogger.engines.puree;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;
import com.cookpad.puree.PureeLogger;
import com.cookpad.puree.async.AsyncResult;
import com.cookpad.puree.outputs.OutputConfiguration;
import com.cookpad.puree.outputs.PureeBufferedOutput;
import com.google.gson.JsonArray;
import com.outsystems.plugins.broadcaster.constants.Constants;
import com.outsystems.plugins.broadcaster.interfaces.Event;
import com.outsystems.plugins.oslogger.helpers.OSDeviceInfo;
import java.io.IOException;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request.Builder;
import okhttp3.RequestBody;
import okhttp3.Response;

public class OSPureeServerOutput extends PureeBufferedOutput {
    private static final int DEFAULT_BATCH_SIZE = 10;
    private static final int DEFAULT_FLUSH_INTERVAL = 5000;
    private static final int DEFAULT_NUMBER_OF_RETRIES = -1;
    private static final String HEADER_DEVICE_UUID = "outsystems-device-uuid";
    private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
    private static final int MAX_LOG_CAPACITY = 1000;
    private String applicationName;
    private int batchSize = 10;
    private final BroadcastReceiver broadcastReceiver = new C00551();
    private OkHttpClient client;
    private boolean connected;
    private final Context context;
    private int flushInterval = DEFAULT_FLUSH_INTERVAL;
    private String hostname;
    private int numberOfRetries = -1;
    private String type;

    /* renamed from: com.outsystems.plugins.oslogger.engines.puree.OSPureeServerOutput$1 */
    class C00551 extends BroadcastReceiver {
        C00551() {
        }

        public void onReceive(Context context, Intent intent) {
            Bundle extras = intent.getExtras();
            if (extras != null) {
                Event networkEvent = (Event) extras.getParcelable(Constants.NETWORK_EVENT);
                if (networkEvent != null) {
                    OSPureeServerOutput.this.setConnected(((String) networkEvent.getData().get(Constants.NETWORK_STATUS)).equals(Constants.NETWORK_ONLINE));
                    if (OSPureeServerOutput.this.isConnected()) {
                        OSPureeServerOutput.this.truncateLogs();
                        OSPureeServerOutput.this.flush();
                    }
                }
            }
        }
    }

    public OSPureeServerOutput(@NonNull OkHttpClient client, @NonNull Context context, @NonNull String hostname, @NonNull String applicationName) {
        this.client = client;
        this.context = context.getApplicationContext();
        setCurrentApplication(hostname, applicationName);
        LocalBroadcastManager.getInstance(this.context).registerReceiver(this.broadcastReceiver, new IntentFilter(Constants.NETWORK_EVENT));
    }

    public void initialize(PureeLogger logger) {
        super.initialize(logger);
        truncateLogs();
    }

    @NonNull
    public String type() {
        return this.type;
    }

    public void emit(@NonNull JsonArray jsonArray, @NonNull final AsyncResult result) {
        this.client.newCall(new Builder().url(buildUrl()).header(HEADER_DEVICE_UUID, OSDeviceInfo.getInstance().getDeviceUuid()).post(RequestBody.create(JSON, jsonArray.toString())).build()).enqueue(new Callback() {
            public void onFailure(Call call, IOException e) {
                Log.e(getClass().getName(), "Unexpected I/O exception", e);
                if (OSPureeServerOutput.this.isConnected()) {
                    result.fail();
                } else {
                    OSPureeServerOutput.this.storage.unlock();
                }
            }

            public void onResponse(Call call, Response response) throws IOException {
                try {
                    if (response.isSuccessful()) {
                        result.success();
                    } else {
                        String name = getClass().getName();
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("Unexpected code ");
                        stringBuilder.append(response);
                        Log.e(name, stringBuilder.toString());
                        if (OSPureeServerOutput.this.isConnected()) {
                            result.fail();
                        } else {
                            OSPureeServerOutput.this.storage.unlock();
                        }
                    }
                    response.close();
                } catch (Throwable th) {
                    response.close();
                }
            }
        });
    }

    @NonNull
    public OutputConfiguration configure(@NonNull OutputConfiguration conf) {
        conf.setFlushIntervalMillis(this.flushInterval);
        conf.setLogsPerRequest(this.batchSize);
        conf.setMaxRetryCount(this.numberOfRetries);
        return conf;
    }

    private String buildUrl() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("https://");
        stringBuilder.append(this.hostname);
        stringBuilder.append("/");
        stringBuilder.append(this.applicationName);
        stringBuilder.append("/moduleservices/log?clientTimeInMillis=");
        stringBuilder.append(System.currentTimeMillis());
        return stringBuilder.toString();
    }

    private void truncateLogs() {
        if (this.storage.lock()) {
            if (this.storage.count() > 1000) {
                this.storage.truncateBufferedLogs(1000);
            }
            this.storage.unlock();
        }
    }

    private synchronized boolean isConnected() {
        return this.connected;
    }

    private synchronized void setConnected(boolean connected) {
        this.connected = connected;
    }

    public void setClient(OkHttpClient client) {
        this.client = client;
    }

    public void setCurrentApplication(@NonNull String hostname, @NonNull String applicationName) {
        this.hostname = hostname;
        this.applicationName = applicationName;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(this.hostname);
        stringBuilder.append("/");
        stringBuilder.append(this.applicationName);
        this.type = String.valueOf(stringBuilder.toString().hashCode());
    }

    public String getHostname() {
        return this.hostname;
    }

    public String getApplicationName() {
        return this.applicationName;
    }

    public int getFlushInterval() {
        return this.flushInterval;
    }

    public int getBatchSize() {
        return this.batchSize;
    }

    public int getNumberOfRetries() {
        return this.numberOfRetries;
    }

    public void stopListening() {
        LocalBroadcastManager.getInstance(this.context).unregisterReceiver(this.broadcastReceiver);
    }
}
