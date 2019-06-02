package org.apache.cordova;

import org.apache.cordova.NativeToJsMessageQueue.BridgeMode;

public class NativeToJsMessageQueue$LoadUrlBridgeMode extends BridgeMode {
    private final CordovaInterface cordova;
    private final CordovaWebViewEngine engine;

    public NativeToJsMessageQueue$LoadUrlBridgeMode(CordovaWebViewEngine engine, CordovaInterface cordova) {
        this.engine = engine;
        this.cordova = cordova;
    }

    public void onNativeToJsMessageAvailable(NativeToJsMessageQueue queue) {
        this.cordova.getActivity().runOnUiThread(new NativeToJsMessageQueue$LoadUrlBridgeMode$1(this, queue));
    }
}
