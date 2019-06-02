package org.apache.cordova;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import org.apache.cordova.PluginResult.Status;

public class NativeToJsMessageQueue {
    static final boolean DISABLE_EXEC_CHAINING = false;
    private static final boolean FORCE_ENCODE_USING_EVAL = false;
    private static final String LOG_TAG = "JsMessageQueue";
    private static int MAX_PAYLOAD_SIZE = 524288000;
    private BridgeMode activeBridgeMode;
    private ArrayList<BridgeMode> bridgeModes = new ArrayList();
    private boolean paused;
    private final LinkedList<NativeToJsMessageQueue$JsMessage> queue = new LinkedList();

    public static abstract class BridgeMode {
        public abstract void onNativeToJsMessageAvailable(NativeToJsMessageQueue nativeToJsMessageQueue);

        public void notifyOfFlush(NativeToJsMessageQueue queue, boolean fromOnlineEvent) {
        }

        public void reset() {
        }
    }

    public static class EvalBridgeMode extends BridgeMode {
        private final CordovaInterface cordova;
        private final CordovaWebViewEngine engine;

        public EvalBridgeMode(CordovaWebViewEngine engine, CordovaInterface cordova) {
            this.engine = engine;
            this.cordova = cordova;
        }

        public void onNativeToJsMessageAvailable(NativeToJsMessageQueue queue) {
            this.cordova.getActivity().runOnUiThread(new NativeToJsMessageQueue$EvalBridgeMode$1(this, queue));
        }
    }

    public static class OnlineEventsBridgeMode extends BridgeMode {
        private final C0006xfd61a34a delegate;
        private boolean ignoreNextFlush;
        private boolean online;

        public OnlineEventsBridgeMode(C0006xfd61a34a delegate) {
            this.delegate = delegate;
        }

        public void reset() {
            this.delegate.runOnUiThread(new NativeToJsMessageQueue$OnlineEventsBridgeMode$1(this));
        }

        public void onNativeToJsMessageAvailable(NativeToJsMessageQueue queue) {
            this.delegate.runOnUiThread(new NativeToJsMessageQueue$OnlineEventsBridgeMode$2(this, queue));
        }

        public void notifyOfFlush(NativeToJsMessageQueue queue, boolean fromOnlineEvent) {
            if (fromOnlineEvent && !this.ignoreNextFlush) {
                this.online ^= 1;
            }
        }
    }

    public void addBridgeMode(BridgeMode bridgeMode) {
        this.bridgeModes.add(bridgeMode);
    }

    public boolean isBridgeEnabled() {
        return this.activeBridgeMode != null;
    }

    public boolean isEmpty() {
        return this.queue.isEmpty();
    }

    public void setBridgeMode(int value) {
        if (value >= -1) {
            if (value < this.bridgeModes.size()) {
                BridgeMode newMode = value < 0 ? null : (BridgeMode) this.bridgeModes.get(value);
                if (newMode != this.activeBridgeMode) {
                    String str = LOG_TAG;
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("Set native->JS mode to ");
                    stringBuilder.append(newMode == null ? "null" : newMode.getClass().getSimpleName());
                    LOG.d(str, stringBuilder.toString());
                    synchronized (this) {
                        this.activeBridgeMode = newMode;
                        if (newMode != null) {
                            newMode.reset();
                            if (!this.paused && !this.queue.isEmpty()) {
                                newMode.onNativeToJsMessageAvailable(this);
                            }
                        }
                    }
                    return;
                }
                return;
            }
        }
        String str2 = LOG_TAG;
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("Invalid NativeToJsBridgeMode: ");
        stringBuilder2.append(value);
        LOG.d(str2, stringBuilder2.toString());
    }

    public void reset() {
        synchronized (this) {
            this.queue.clear();
            setBridgeMode(-1);
        }
    }

    private int calculatePackedMessageLength(NativeToJsMessageQueue$JsMessage message) {
        int messageLen = message.calculateEncodedLength();
        return (String.valueOf(messageLen).length() + messageLen) + 1;
    }

    private void packMessage(NativeToJsMessageQueue$JsMessage message, StringBuilder sb) {
        sb.append(message.calculateEncodedLength());
        sb.append(' ');
        message.encodeAsMessage(sb);
    }

    public String popAndEncode(boolean fromOnlineEvent) {
        synchronized (this) {
            if (this.activeBridgeMode == null) {
                return null;
            }
            this.activeBridgeMode.notifyOfFlush(this, fromOnlineEvent);
            if (this.queue.isEmpty()) {
                return null;
            }
            int totalPayloadLen = 0;
            int numMessagesToSend = 0;
            Iterator it = this.queue.iterator();
            while (it.hasNext()) {
                int messageSize = calculatePackedMessageLength((NativeToJsMessageQueue$JsMessage) it.next());
                if (numMessagesToSend > 0 && totalPayloadLen + messageSize > MAX_PAYLOAD_SIZE && MAX_PAYLOAD_SIZE > 0) {
                    break;
                }
                totalPayloadLen += messageSize;
                numMessagesToSend++;
            }
            StringBuilder sb = new StringBuilder(totalPayloadLen);
            for (int i = 0; i < numMessagesToSend; i++) {
                packMessage((NativeToJsMessageQueue$JsMessage) this.queue.removeFirst(), sb);
            }
            if (!this.queue.isEmpty()) {
                sb.append('*');
            }
            String ret = sb.toString();
            return ret;
        }
    }

    public String popAndEncodeAsJs() {
        synchronized (this) {
            if (this.queue.size() == 0) {
                return null;
            }
            int totalPayloadLen = 0;
            int numMessagesToSend = 0;
            Iterator it = this.queue.iterator();
            while (it.hasNext()) {
                int messageSize = ((NativeToJsMessageQueue$JsMessage) it.next()).calculateEncodedLength() + 50;
                if (numMessagesToSend > 0 && totalPayloadLen + messageSize > MAX_PAYLOAD_SIZE && MAX_PAYLOAD_SIZE > 0) {
                    break;
                }
                totalPayloadLen += messageSize;
                numMessagesToSend++;
            }
            int i = 0;
            boolean willSendAllMessages = numMessagesToSend == this.queue.size();
            StringBuilder sb = new StringBuilder((willSendAllMessages ? 0 : 100) + totalPayloadLen);
            int i2 = 0;
            while (i2 < numMessagesToSend) {
                NativeToJsMessageQueue$JsMessage message = (NativeToJsMessageQueue$JsMessage) this.queue.removeFirst();
                if (willSendAllMessages && i2 + 1 == numMessagesToSend) {
                    message.encodeAsJsMessage(sb);
                } else {
                    sb.append("try{");
                    message.encodeAsJsMessage(sb);
                    sb.append("}finally{");
                }
                i2++;
            }
            if (!willSendAllMessages) {
                sb.append("window.setTimeout(function(){cordova.require('cordova/plugin/android/polling').pollOnce();},0);");
            }
            if (willSendAllMessages) {
                i = 1;
            }
            while (i < numMessagesToSend) {
                sb.append('}');
                i++;
            }
            String ret = sb.toString();
            return ret;
        }
    }

    public void addJavaScript(String statement) {
        enqueueMessage(new NativeToJsMessageQueue$JsMessage(statement));
    }

    public void addPluginResult(PluginResult result, String callbackId) {
        if (callbackId == null) {
            LOG.e(LOG_TAG, "Got plugin result with no callbackId", new Throwable());
            return;
        }
        boolean noResult = result.getStatus() == Status.NO_RESULT.ordinal();
        boolean keepCallback = result.getKeepCallback();
        if (!noResult || !keepCallback) {
            enqueueMessage(new NativeToJsMessageQueue$JsMessage(result, callbackId));
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private void enqueueMessage(org.apache.cordova.NativeToJsMessageQueue$JsMessage r3) {
        /*
        r2 = this;
        monitor-enter(r2);
        r0 = r2.activeBridgeMode;	 Catch:{ all -> 0x0020 }
        if (r0 != 0) goto L_0x000e;
    L_0x0005:
        r0 = "JsMessageQueue";
        r1 = "Dropping Native->JS message due to disabled bridge";
        org.apache.cordova.LOG.d(r0, r1);	 Catch:{ all -> 0x0020 }
        monitor-exit(r2);	 Catch:{ all -> 0x0020 }
        return;
    L_0x000e:
        r0 = r2.queue;	 Catch:{ all -> 0x0020 }
        r0.add(r3);	 Catch:{ all -> 0x0020 }
        r0 = r2.paused;	 Catch:{ all -> 0x0020 }
        if (r0 != 0) goto L_0x001d;
    L_0x0017:
        r0 = r2.activeBridgeMode;	 Catch:{ all -> 0x0020 }
        r0.onNativeToJsMessageAvailable(r2);	 Catch:{ all -> 0x0020 }
        goto L_0x001e;
    L_0x001e:
        monitor-exit(r2);	 Catch:{ all -> 0x0020 }
        return;
    L_0x0020:
        r0 = move-exception;
        monitor-exit(r2);	 Catch:{ all -> 0x0020 }
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.NativeToJsMessageQueue.enqueueMessage(org.apache.cordova.NativeToJsMessageQueue$JsMessage):void");
    }

    public void setPaused(boolean value) {
        if (this.paused && value) {
            LOG.e(LOG_TAG, "nested call to setPaused detected.", new Throwable());
        }
        this.paused = value;
        if (!value) {
            synchronized (this) {
                if (!this.queue.isEmpty() && this.activeBridgeMode != null) {
                    this.activeBridgeMode.onNativeToJsMessageAvailable(this);
                }
            }
        }
    }
}
