package org.cloudsky.cordovaPlugins;

import android.content.Intent;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ZBar extends CordovaPlugin {
    private static int SCAN_CODE = 1;
    private boolean isInProgress = false;
    private CallbackContext scanCallbackContext;

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (!action.equals("scan")) {
            return false;
        }
        if (this.isInProgress) {
            callbackContext.error("A scan is already in progress!");
        } else {
            this.isInProgress = true;
            this.scanCallbackContext = callbackContext;
            JSONObject params = args.optJSONObject(0);
            Intent scanIntent = new Intent(this.cordova.getActivity().getApplicationContext(), ZBarScannerActivity.class);
            scanIntent.putExtra(ZBarScannerActivity.EXTRA_PARAMS, params.toString());
            this.cordova.startActivityForResult(this, scanIntent, SCAN_CODE);
        }
        return true;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent result) {
        if (requestCode == SCAN_CODE) {
            if (resultCode != 2) {
                switch (resultCode) {
                    case -1:
                        this.scanCallbackContext.success(result.getStringExtra(ZBarScannerActivity.EXTRA_QRVALUE));
                        break;
                    case 0:
                        this.scanCallbackContext.error("cancelled");
                        break;
                    default:
                        this.scanCallbackContext.error("Unknown error");
                        break;
                }
            }
            this.scanCallbackContext.error("Scan failed due to an error");
            this.isInProgress = false;
            this.scanCallbackContext = null;
        }
    }
}
