package org.apache.cordova;

public class ResumeCallback extends CallbackContext {
    private final String TAG = "CordovaResumeCallback";
    private PluginManager pluginManager;
    private String serviceName;

    public ResumeCallback(String serviceName, PluginManager pluginManager) {
        super("resumecallback", null);
        this.serviceName = serviceName;
        this.pluginManager = pluginManager;
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public void sendPluginResult(org.apache.cordova.PluginResult r8) {
        /*
        r7 = this;
        monitor-enter(r7);
        r0 = r7.finished;	 Catch:{ all -> 0x0084 }
        if (r0 == 0) goto L_0x0026;
    L_0x0005:
        r0 = "CordovaResumeCallback";
        r1 = new java.lang.StringBuilder;	 Catch:{ all -> 0x0084 }
        r1.<init>();	 Catch:{ all -> 0x0084 }
        r2 = r7.serviceName;	 Catch:{ all -> 0x0084 }
        r1.append(r2);	 Catch:{ all -> 0x0084 }
        r2 = " attempted to send a second callback to ResumeCallback\nResult was: ";
        r1.append(r2);	 Catch:{ all -> 0x0084 }
        r2 = r8.getMessage();	 Catch:{ all -> 0x0084 }
        r1.append(r2);	 Catch:{ all -> 0x0084 }
        r1 = r1.toString();	 Catch:{ all -> 0x0084 }
        org.apache.cordova.LOG.w(r0, r1);	 Catch:{ all -> 0x0084 }
        monitor-exit(r7);	 Catch:{ all -> 0x0084 }
        return;
    L_0x0026:
        r0 = 1;
        r7.finished = r0;	 Catch:{ all -> 0x0084 }
        monitor-exit(r7);	 Catch:{ all -> 0x0084 }
        r0 = new org.json.JSONObject;
        r0.<init>();
        r1 = new org.json.JSONObject;
        r1.<init>();
        r2 = "pluginServiceName";
        r3 = r7.serviceName;	 Catch:{ JSONException -> 0x0055 }
        r1.put(r2, r3);	 Catch:{ JSONException -> 0x0055 }
        r2 = "pluginStatus";
        r3 = org.apache.cordova.PluginResult.StatusMessages;	 Catch:{ JSONException -> 0x0055 }
        r4 = r8.getStatus();	 Catch:{ JSONException -> 0x0055 }
        r3 = r3[r4];	 Catch:{ JSONException -> 0x0055 }
        r1.put(r2, r3);	 Catch:{ JSONException -> 0x0055 }
        r2 = "action";
        r3 = "resume";
        r0.put(r2, r3);	 Catch:{ JSONException -> 0x0055 }
        r2 = "pendingResult";
        r0.put(r2, r1);	 Catch:{ JSONException -> 0x0055 }
        goto L_0x005d;
    L_0x0055:
        r2 = move-exception;
        r3 = "CordovaResumeCallback";
        r4 = "Unable to create resume object for Activity Result";
        org.apache.cordova.LOG.e(r3, r4);
    L_0x005d:
        r2 = new org.apache.cordova.PluginResult;
        r3 = org.apache.cordova.PluginResult.Status.OK;
        r2.<init>(r3, r0);
        r3 = new java.util.ArrayList;
        r3.<init>();
        r3.add(r2);
        r3.add(r8);
        r4 = r7.pluginManager;
        r5 = "CoreAndroid";
        r4 = r4.getPlugin(r5);
        r4 = (org.apache.cordova.CoreAndroid) r4;
        r5 = new org.apache.cordova.PluginResult;
        r6 = org.apache.cordova.PluginResult.Status.OK;
        r5.<init>(r6, r3);
        r4.sendResumeEvent(r5);
        return;
    L_0x0084:
        r0 = move-exception;
        monitor-exit(r7);	 Catch:{ all -> 0x0084 }
        throw r0;
        */
        throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.ResumeCallback.sendPluginResult(org.apache.cordova.PluginResult):void");
    }
}
