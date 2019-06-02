package org.apache.cordova.networkinformation;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import java.util.Locale;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class NetworkManager extends CordovaPlugin {
    public static final String CDMA = "cdma";
    public static final String CELLULAR = "cellular";
    public static final String EDGE = "edge";
    public static final String EHRPD = "ehrpd";
    public static final String FOUR_G = "4g";
    public static final String GPRS = "gprs";
    public static final String GSM = "gsm";
    public static final String HSDPA = "hsdpa";
    public static final String HSPA = "hspa";
    public static final String HSPA_PLUS = "hspa+";
    public static final String HSUPA = "hsupa";
    private static final String LOG_TAG = "NetworkManager";
    public static final String LTE = "lte";
    public static final String MOBILE = "mobile";
    public static int NOT_REACHABLE = 0;
    public static final String ONEXRTT = "1xrtt";
    public static int REACHABLE_VIA_CARRIER_DATA_NETWORK = 1;
    public static int REACHABLE_VIA_WIFI_NETWORK = 2;
    public static final String THREE_G = "3g";
    public static final String TWO_G = "2g";
    public static final String TYPE_2G = "2g";
    public static final String TYPE_3G = "3g";
    public static final String TYPE_4G = "4g";
    public static final String TYPE_ETHERNET = "ethernet";
    public static final String TYPE_ETHERNET_SHORT = "eth";
    public static final String TYPE_NONE = "none";
    public static final String TYPE_UNKNOWN = "unknown";
    public static final String TYPE_WIFI = "wifi";
    public static final String UMB = "umb";
    public static final String UMTS = "umts";
    public static final String WIFI = "wifi";
    public static final String WIMAX = "wimax";
    private CallbackContext connectionCallbackContext;
    private JSONObject lastInfo = null;
    BroadcastReceiver receiver;
    ConnectivityManager sockMan;

    /* renamed from: org.apache.cordova.networkinformation.NetworkManager$1 */
    class C00601 extends BroadcastReceiver {
        C00601() {
        }

        public void onReceive(Context context, Intent intent) {
            if (NetworkManager.this.webView != null) {
                NetworkManager networkManager = NetworkManager.this;
                networkManager.updateConnectionInfo(networkManager.sockMan.getActiveNetworkInfo());
            }
        }
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        this.sockMan = (ConnectivityManager) cordova.getActivity().getSystemService("connectivity");
        this.connectionCallbackContext = null;
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        if (this.receiver == null) {
            this.receiver = new C00601();
            webView.getContext().registerReceiver(this.receiver, intentFilter);
        }
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        if (!action.equals("getConnectionInfo")) {
            return false;
        }
        this.connectionCallbackContext = callbackContext;
        String connectionType = "";
        try {
            connectionType = getConnectionInfo(this.sockMan.getActiveNetworkInfo()).get("type").toString();
        } catch (JSONException e) {
            LOG.d(LOG_TAG, e.getLocalizedMessage());
        }
        PluginResult pluginResult = new PluginResult(Status.OK, connectionType);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
        return true;
    }

    public void onDestroy() {
        if (this.receiver != null) {
            try {
                this.webView.getContext().unregisterReceiver(this.receiver);
            } catch (Exception e) {
                String str = LOG_TAG;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Error unregistering network receiver: ");
                stringBuilder.append(e.getMessage());
                LOG.e(str, stringBuilder.toString(), e);
            } catch (Throwable th) {
                this.receiver = null;
            }
            this.receiver = null;
        }
    }

    private void updateConnectionInfo(NetworkInfo info) {
        JSONObject thisInfo = getConnectionInfo(info);
        if (!thisInfo.equals(this.lastInfo)) {
            String connectionType = "";
            try {
                connectionType = thisInfo.get("type").toString();
            } catch (JSONException e) {
                LOG.d(LOG_TAG, e.getLocalizedMessage());
            }
            sendUpdate(connectionType);
            this.lastInfo = thisInfo;
        }
    }

    private JSONObject getConnectionInfo(NetworkInfo info) {
        String type = TYPE_NONE;
        String extraInfo = "";
        if (info != null) {
            if (info.isConnected()) {
                type = getType(info);
            } else {
                type = TYPE_NONE;
            }
            extraInfo = info.getExtraInfo();
        }
        String str = LOG_TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Connection Type: ");
        stringBuilder.append(type);
        LOG.d(str, stringBuilder.toString());
        str = LOG_TAG;
        stringBuilder = new StringBuilder();
        stringBuilder.append("Connection Extra Info: ");
        stringBuilder.append(extraInfo);
        LOG.d(str, stringBuilder.toString());
        JSONObject connectionInfo = new JSONObject();
        try {
            connectionInfo.put("type", type);
            connectionInfo.put("extraInfo", extraInfo);
        } catch (JSONException e) {
            LOG.d(LOG_TAG, e.getLocalizedMessage());
        }
        return connectionInfo;
    }

    private void sendUpdate(String type) {
        if (this.connectionCallbackContext != null) {
            PluginResult result = new PluginResult(Status.OK, type);
            result.setKeepCallback(true);
            this.connectionCallbackContext.sendPluginResult(result);
        }
        this.webView.postMessage("networkconnection", type);
    }

    private String getType(NetworkInfo info) {
        if (info == null) {
            return TYPE_NONE;
        }
        String type = info.getTypeName().toLowerCase(Locale.US);
        String str = LOG_TAG;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("toLower : ");
        stringBuilder.append(type.toLowerCase());
        LOG.d(str, stringBuilder.toString());
        LOG.d(LOG_TAG, "wifi : wifi");
        if (type.equals("wifi")) {
            return "wifi";
        }
        if (!type.toLowerCase().equals(TYPE_ETHERNET)) {
            if (!type.toLowerCase().startsWith(TYPE_ETHERNET_SHORT)) {
                if (!type.equals(MOBILE)) {
                    if (!type.equals(CELLULAR)) {
                        return "unknown";
                    }
                }
                type = info.getSubtypeName().toLowerCase(Locale.US);
                if (!type.equals(GSM)) {
                    if (!type.equals(GPRS)) {
                        if (!type.equals(EDGE)) {
                            if (!type.equals("2g")) {
                                if (!type.startsWith(CDMA)) {
                                    if (!type.equals(UMTS)) {
                                        if (!type.equals(ONEXRTT)) {
                                            if (!type.equals(EHRPD)) {
                                                if (!type.equals(HSUPA)) {
                                                    if (!type.equals(HSDPA)) {
                                                        if (!type.equals(HSPA)) {
                                                            if (!type.equals("3g")) {
                                                                if (!type.equals(LTE)) {
                                                                    if (!type.equals(UMB)) {
                                                                        if (!type.equals(HSPA_PLUS)) {
                                                                            if (type.equals("4g")) {
                                                                            }
                                                                            return "unknown";
                                                                        }
                                                                    }
                                                                }
                                                                return "4g";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                return "3g";
                            }
                        }
                    }
                }
                return "2g";
            }
        }
        return TYPE_ETHERNET;
    }
}
