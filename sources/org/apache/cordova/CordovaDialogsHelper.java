package org.apache.cordova;

import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.widget.EditText;

public class CordovaDialogsHelper {
    private final Context context;
    private AlertDialog lastHandledDialog;

    public CordovaDialogsHelper(Context context) {
        this.context = context;
    }

    public void showAlert(String message, CordovaDialogsHelper$Result result) {
        Builder dlg = new Builder(this.context);
        dlg.setMessage(message);
        dlg.setTitle("Alert");
        dlg.setCancelable(true);
        dlg.setPositiveButton(17039370, new CordovaDialogsHelper$1(this, result));
        dlg.setOnCancelListener(new CordovaDialogsHelper$2(this, result));
        dlg.setOnKeyListener(new CordovaDialogsHelper$3(this, result));
        this.lastHandledDialog = dlg.show();
    }

    public void showConfirm(String message, final CordovaDialogsHelper$Result result) {
        Builder dlg = new Builder(this.context);
        dlg.setMessage(message);
        dlg.setTitle("Confirm");
        dlg.setCancelable(true);
        dlg.setPositiveButton(17039370, new OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                result.gotResult(true, null);
            }
        });
        dlg.setNegativeButton(17039360, new CordovaDialogsHelper$5(this, result));
        dlg.setOnCancelListener(new CordovaDialogsHelper$6(this, result));
        dlg.setOnKeyListener(new CordovaDialogsHelper$7(this, result));
        this.lastHandledDialog = dlg.show();
    }

    public void showPrompt(String message, String defaultValue, final CordovaDialogsHelper$Result result) {
        Builder dlg = new Builder(this.context);
        dlg.setMessage(message);
        final EditText input = new EditText(this.context);
        if (defaultValue != null) {
            input.setText(defaultValue);
        }
        dlg.setView(input);
        dlg.setCancelable(false);
        dlg.setPositiveButton(17039370, new OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                result.gotResult(true, input.getText().toString());
            }
        });
        dlg.setNegativeButton(17039360, new CordovaDialogsHelper$9(this, result));
        this.lastHandledDialog = dlg.show();
    }

    public void destroyLastDialog() {
        AlertDialog alertDialog = this.lastHandledDialog;
        if (alertDialog != null) {
            alertDialog.cancel();
        }
    }
}
