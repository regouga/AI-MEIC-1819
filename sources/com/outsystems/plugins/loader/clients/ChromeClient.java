package com.outsystems.plugins.loader.clients;

import android.annotation.TargetApi;
import android.content.Intent;
import android.net.Uri;
import android.os.Build.VERSION;
import android.os.Environment;
import android.os.Parcelable;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient.FileChooserParams;
import android.webkit.WebView;
import com.outsystems.plugins.loader.OSCordovaLoader;
import com.outsystems.plugins.oslogger.OSLogger;
import com.outsystems.plugins.oslogger.interfaces.Logger;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.StringTokenizer;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.engine.SystemWebChromeClient;
import org.apache.cordova.engine.SystemWebViewEngine;
import org.json.JSONException;

public class ChromeClient extends SystemWebChromeClient {
    private static final int FILECHOOSER_RESULTCODE = 5173;
    private static final String LOG_TAG = "CDVLoaderChromeClient";
    public static final String MIME_TYPE_AUDIO = "audio/*";
    public static final String MIME_TYPE_IMAGE = "image/*";
    public static final String MIME_TYPE_VIDEO = "video/*";
    private static final int REQUEST_PERMISSION = 100;
    private CordovaInterface cordovaInterface;
    private Uri fileUri;
    private Logger logger = OSLogger.getInstance();

    public ChromeClient(SystemWebViewEngine parentEngine, CordovaInterface cordovaInterface) {
        super(parentEngine);
        this.cordovaInterface = cordovaInterface;
    }

    public void openFileChooser(final ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
        if (!launchSingleIntent(uploadMsg, acceptType, capture)) {
            Intent intent = new Intent("android.intent.action.GET_CONTENT");
            intent.addCategory("android.intent.category.OPENABLE");
            intent.setType("*/*");
            Intent chooserIntent = Intent.createChooser(intent, "Choose an action");
            ArrayList<Intent> otherIntents = new ArrayList();
            otherIntents.add(getImageIntent());
            otherIntents.add(getVideoIntent());
            otherIntents.add(getSoundIntent());
            otherIntents.add(getMyFilesIntent());
            Parcelable[] parcelables = new Parcelable[otherIntents.size()];
            for (int i = 0; i < parcelables.length; i++) {
                parcelables[i] = (Parcelable) otherIntents.get(i);
            }
            chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", parcelables);
            try {
                this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                        Uri result;
                        Logger access$000;
                        StringBuilder stringBuilder;
                        if (intent != null) {
                            if (resultCode == -1) {
                                result = intent.getData();
                                access$000 = ChromeClient.this.logger;
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("Receive file chooser URL: ");
                                stringBuilder.append(result);
                                access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                                uploadMsg.onReceiveValue(result);
                            }
                        }
                        result = null;
                        access$000 = ChromeClient.this.logger;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Receive file chooser URL: ");
                        stringBuilder.append(result);
                        access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                        uploadMsg.onReceiveValue(result);
                    }
                }, chooserIntent, FILECHOOSER_RESULTCODE);
            } catch (Throwable e) {
                Logger logger = this.logger;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("No activity found to handle file chooser intent: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME, e);
                uploadMsg.onReceiveValue(null);
            }
        }
    }

    @TargetApi(21)
    public boolean onShowFileChooser(WebView webView, final ValueCallback<Uri[]> filePathsCallback, final FileChooserParams fileChooserParams) {
        if (VERSION.SDK_INT >= 23) {
            if (!this.cordovaInterface.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) {
                this.cordovaInterface.requestPermissions(new CordovaPlugin() {
                    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
                        super.onRequestPermissionResult(requestCode, permissions, grantResults);
                        if (grantResults[0] == 0) {
                            ChromeClient.this.openFileChooserAfterPermissions(filePathsCallback, fileChooserParams);
                            return;
                        }
                        filePathsCallback.onReceiveValue(new Uri[0]);
                        ChromeClient.this.logger.logDebug("Permission request was denied while opening file chooser", OSCordovaLoader.CORDOVA_SERVICE_NAME);
                    }
                }, 100, new String[]{"android.permission.READ_EXTERNAL_STORAGE", "android.permission.CAMERA"});
                return true;
            }
        }
        return openFileChooserAfterPermissions(filePathsCallback, fileChooserParams);
    }

    private boolean openFileChooserAfterPermissions(final ValueCallback<Uri[]> filePathsCallback, FileChooserParams fileChooserParams) {
        if (launchSingleIntent(filePathsCallback, fileChooserParams)) {
            this.logger.logDebug("Single intent was detected while opening file chooser", OSCordovaLoader.CORDOVA_SERVICE_NAME);
        } else {
            Intent chooserIntent = Intent.createChooser(fileChooserParams.createIntent(), "Choose an action");
            ArrayList<Intent> otherIntents = new ArrayList();
            otherIntents.add(getImageIntent());
            otherIntents.add(getVideoIntent());
            otherIntents.add(getSoundIntent());
            otherIntents.add(getMyFilesIntent());
            Parcelable[] parcelables = new Parcelable[otherIntents.size()];
            for (int i = 0; i < parcelables.length; i++) {
                parcelables[i] = (Parcelable) otherIntents.get(i);
            }
            chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", parcelables);
            try {
                this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                        Uri[] result = FileChooserParams.parseResult(resultCode, intent);
                        if (result == null) {
                            if (resultCode == -1) {
                                result = new Uri[]{ChromeClient.this.fileUri};
                            }
                        }
                        Logger access$000 = ChromeClient.this.logger;
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("Receive file chooser URL: ");
                        stringBuilder.append(result);
                        access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                        filePathsCallback.onReceiveValue(result);
                    }
                }, chooserIntent, FILECHOOSER_RESULTCODE);
            } catch (Throwable e) {
                Logger logger = this.logger;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("No activity found to handle file chooser intent: ");
                stringBuilder.append(e.getMessage());
                logger.logError(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME, e);
                filePathsCallback.onReceiveValue(null);
            }
        }
        return true;
    }

    private boolean launchSingleIntent(final ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
        boolean single = false;
        if (acceptType != null && !acceptType.isEmpty()) {
            single = new StringTokenizer(acceptType, ",").countTokens() == 1;
        }
        if (single) {
            Intent intent = getIntentForType(acceptType);
            if (intent == null) {
                intent = new Intent("android.intent.action.GET_CONTENT");
                intent.addCategory("android.intent.category.OPENABLE");
                intent.setType("*/*");
            }
            if (capture == null || capture.isEmpty()) {
                try {
                    Intent fileIntent = new Intent("android.intent.action.GET_CONTENT");
                    fileIntent.addCategory("android.intent.category.OPENABLE");
                    fileIntent.setType("*/*");
                    Intent chooserIntent = Intent.createChooser(fileIntent, "Choose an action");
                    chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", new Parcelable[]{intent});
                    this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                        public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                            Uri result;
                            Logger access$000;
                            StringBuilder stringBuilder;
                            if (intent != null) {
                                if (resultCode == -1) {
                                    result = intent.getData();
                                    if (result == null) {
                                        if (resultCode == -1) {
                                            result = ChromeClient.this.fileUri;
                                        }
                                    }
                                    access$000 = ChromeClient.this.logger;
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Receive file chooser URL: ");
                                    stringBuilder.append(result);
                                    access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                                    uploadMsg.onReceiveValue(result);
                                }
                            }
                            result = null;
                            if (result == null) {
                                if (resultCode == -1) {
                                    result = ChromeClient.this.fileUri;
                                }
                            }
                            access$000 = ChromeClient.this.logger;
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Receive file chooser URL: ");
                            stringBuilder.append(result);
                            access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                            uploadMsg.onReceiveValue(result);
                        }
                    }, chooserIntent, FILECHOOSER_RESULTCODE);
                } catch (Throwable e) {
                    Logger logger = this.logger;
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("No activity found to handle file chooser intent: ");
                    stringBuilder.append(e.getMessage());
                    logger.logError(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME, e);
                }
            } else {
                this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                        Uri result;
                        Logger access$000;
                        StringBuilder stringBuilder;
                        if (intent != null) {
                            if (resultCode == -1) {
                                result = intent.getData();
                                access$000 = ChromeClient.this.logger;
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("Receive file chooser URL: ");
                                stringBuilder.append(result);
                                access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                                uploadMsg.onReceiveValue(result);
                            }
                        }
                        result = null;
                        access$000 = ChromeClient.this.logger;
                        stringBuilder = new StringBuilder();
                        stringBuilder.append("Receive file chooser URL: ");
                        stringBuilder.append(result);
                        access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                        uploadMsg.onReceiveValue(result);
                    }
                }, intent, FILECHOOSER_RESULTCODE);
            }
        } else {
            this.logger.logDebug("Single intent was detected while opening file chooser", OSCordovaLoader.CORDOVA_SERVICE_NAME);
        }
        return single;
    }

    private boolean launchSingleIntent(final ValueCallback<Uri[]> filePathsCallback, FileChooserParams fileChooserParams) {
        Logger logger;
        String[] types = fileChooserParams.getAcceptTypes();
        boolean single = false;
        String contentType = null;
        if (types != null && types.length == 1) {
            contentType = types[0];
            single = new StringTokenizer(contentType, ",").countTokens() == 1;
        }
        if (single) {
            Intent intent = getIntentForType(contentType);
            if (intent == null) {
                intent = fileChooserParams.createIntent();
            }
            if (fileChooserParams.isCaptureEnabled()) {
                try {
                    this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                        public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                            Uri[] result = FileChooserParams.parseResult(resultCode, intent);
                            if (result == null) {
                                if (resultCode == -1) {
                                    result = new Uri[]{ChromeClient.this.fileUri};
                                }
                            }
                            Logger access$000 = ChromeClient.this.logger;
                            StringBuilder stringBuilder = new StringBuilder();
                            stringBuilder.append("Receive file chooser URL: ");
                            stringBuilder.append(result);
                            access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                            filePathsCallback.onReceiveValue(result);
                        }
                    }, intent, FILECHOOSER_RESULTCODE);
                } catch (Throwable e) {
                    logger = this.logger;
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("No activity found to handle file chooser intent: ");
                    stringBuilder.append(e.getMessage());
                    logger.logError(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME, e);
                    filePathsCallback.onReceiveValue(null);
                }
            } else {
                Intent chooserIntent = Intent.createChooser(fileChooserParams.createIntent(), "Choose an action");
                chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", new Parcelable[]{intent});
                try {
                    this.cordovaInterface.startActivityForResult(new CordovaPlugin() {
                        public void onActivityResult(int requestCode, int resultCode, Intent intent) {
                            Uri[] result = FileChooserParams.parseResult(resultCode, intent);
                            if (result == null) {
                                if (resultCode == -1) {
                                    result = new Uri[]{ChromeClient.this.fileUri};
                                }
                            }
                            Logger access$000 = ChromeClient.this.logger;
                            StringBuilder stringBuilder = new StringBuilder();
                            stringBuilder.append("Receive file chooser URL: ");
                            stringBuilder.append(result);
                            access$000.logDebug(stringBuilder.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME);
                            filePathsCallback.onReceiveValue(result);
                        }
                    }, chooserIntent, FILECHOOSER_RESULTCODE);
                } catch (Throwable e2) {
                    logger = this.logger;
                    StringBuilder stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("No activity found to handle file chooser intent: ");
                    stringBuilder2.append(e2.getMessage());
                    logger.logError(stringBuilder2.toString(), OSCordovaLoader.CORDOVA_SERVICE_NAME, e2);
                    filePathsCallback.onReceiveValue(null);
                }
            }
        } else {
            this.logger.logDebug("Single intent was detected while opening file chooser", OSCordovaLoader.CORDOVA_SERVICE_NAME);
        }
        return single;
    }

    public Uri getOutputMediaFile(String type) {
        if (Environment.getExternalStorageState() != null) {
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            File mediaStorageDir;
            StringBuilder stringBuilder;
            if (type.equalsIgnoreCase("image/*")) {
                mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "");
                stringBuilder = new StringBuilder();
                stringBuilder.append(mediaStorageDir.getPath());
                stringBuilder.append(File.separator);
                stringBuilder.append("IMG_");
                stringBuilder.append(timeStamp);
                stringBuilder.append(".jpeg");
                return Uri.fromFile(new File(stringBuilder.toString()));
            } else if (type.equalsIgnoreCase("audio/*")) {
                mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_MUSIC), "");
                stringBuilder = new StringBuilder();
                stringBuilder.append(mediaStorageDir.getPath());
                stringBuilder.append(File.separator);
                stringBuilder.append("AUD_");
                stringBuilder.append(timeStamp);
                stringBuilder.append(".3gp");
                return Uri.fromFile(new File(stringBuilder.toString()));
            } else if (type.equalsIgnoreCase("video/*")) {
                mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_MOVIES), "");
                stringBuilder = new StringBuilder();
                stringBuilder.append(mediaStorageDir.getPath());
                stringBuilder.append(File.separator);
                stringBuilder.append("VID_");
                stringBuilder.append(timeStamp);
                stringBuilder.append(".mp4");
                return Uri.fromFile(new File(stringBuilder.toString()));
            }
        } else {
            this.logger.logDebug("Unable to reach external storage", OSCordovaLoader.CORDOVA_SERVICE_NAME);
        }
        return null;
    }

    Intent getIntentForType(String type) {
        if (type.equalsIgnoreCase("image/*")) {
            return getImageIntent();
        }
        if (type.equalsIgnoreCase("video/*")) {
            return getVideoIntent();
        }
        if (type.equalsIgnoreCase("audio/*")) {
            return getSoundIntent();
        }
        return null;
    }

    private final Intent getImageIntent() {
        Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
        this.fileUri = getOutputMediaFile("image/*");
        intent.putExtra("output", this.fileUri);
        return intent;
    }

    private final Intent getVideoIntent() {
        return new Intent("android.media.action.VIDEO_CAPTURE");
    }

    private final Intent getSoundIntent() {
        return new Intent("android.provider.MediaStore.RECORD_SOUND");
    }

    private final Intent getMyFilesIntent() {
        Intent intent = new Intent("com.sec.android.app.myfiles.PICK_DATA");
        intent.putExtra("CONTENT_TYPE", "*/*");
        intent.addCategory("android.intent.category.DEFAULT");
        return intent;
    }
}
