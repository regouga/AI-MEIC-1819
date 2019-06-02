package com.outsystems.plugins.filechooser;

import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import android.os.Parcelable;
import android.util.Base64OutputStream;
import android.util.Log;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.StringTokenizer;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONException;
import org.json.JSONObject;

public class FileChooser extends CordovaPlugin {
    private static final String ACTION_OPEN = "open";
    private static final String ACTION_SELECT = "select";
    private static final String MIME_TYPE_AUDIO = "audio/*";
    private static final String MIME_TYPE_IMAGE = "image/*";
    private static final String MIME_TYPE_VIDEO = "video/*";
    private static final int OPENFILE_REQUESTCODE = 2001;
    private static final String PARAM_ACCEPT = "accept";
    private static final String PARAM_CAPTURE = "capture";
    private static final int SELECTFILE_REQUESTCODE = 2002;
    private static final String TAG = "FileChooser";
    CallbackContext callback;
    private Uri fileUri;

    public boolean execute(String action, final CordovaArgs args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals(ACTION_OPEN)) {
            this.cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    FileChooser.this.chooseFile(args, callbackContext, FileChooser.OPENFILE_REQUESTCODE);
                }
            });
            return true;
        } else if (!action.equals(ACTION_SELECT)) {
            return false;
        } else {
            this.cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    FileChooser.this.chooseFile(args, callbackContext, FileChooser.SELECTFILE_REQUESTCODE);
                }
            });
            return true;
        }
    }

    public void chooseFile(CordovaArgs args, CallbackContext callbackContext, int requestCode) {
        String acceptType = null;
        boolean capture = false;
        boolean z = false;
        try {
            JSONObject obj = args.getJSONObject(0);
            acceptType = obj.getString(PARAM_ACCEPT);
            String captureString = obj.getString(PARAM_CAPTURE);
            if (captureString != null) {
                try {
                    if (!captureString.isEmpty()) {
                        if (!Boolean.valueOf(captureString).booleanValue()) {
                            capture = z;
                        }
                    }
                    z = true;
                    capture = z;
                } catch (Exception e) {
                    capture = true;
                }
            }
        } catch (JSONException e2) {
            Log.w(TAG, e2.getMessage());
        }
        if (!launchSingleIntent(acceptType, capture, requestCode)) {
            Intent intent = new Intent("android.intent.action.GET_CONTENT");
            intent.addCategory("android.intent.category.OPENABLE");
            intent.setType("*/*");
            ArrayList<Intent> otherIntents = new ArrayList();
            otherIntents.add(getImageIntent());
            otherIntents.add(getVideoIntent());
            otherIntents.add(getSoundIntent());
            otherIntents.add(getMyFilesIntent());
            Parcelable[] parcelables = new Parcelable[otherIntents.size()];
            for (int i = 0; i < parcelables.length; i++) {
                parcelables[i] = (Parcelable) otherIntents.get(i);
            }
            Intent chooserIntent = Intent.createChooser(intent, "Choose an action");
            chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", parcelables);
            this.cordova.startActivityForResult(this, chooserIntent, requestCode);
        }
        PluginResult pluginResult = new PluginResult(Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        this.callback = callbackContext;
        callbackContext.sendPluginResult(pluginResult);
    }

    private boolean launchSingleIntent(String acceptType, boolean capture, int requestCode) {
        boolean single = false;
        if (acceptType != null && acceptType.length() > 1) {
            single = new StringTokenizer(acceptType, ",").countTokens() == 1;
        }
        if (single) {
            Intent intent = getIntentForType(acceptType);
            if (intent == null) {
                intent = new Intent("android.intent.action.GET_CONTENT");
                intent.addCategory("android.intent.category.OPENABLE");
                intent.setType("*/*");
            }
            if (capture) {
                this.cordova.startActivityForResult(this, intent, requestCode);
            } else {
                Intent fileIntent = new Intent("android.intent.action.GET_CONTENT");
                fileIntent.addCategory("android.intent.category.OPENABLE");
                fileIntent.setType("*/*");
                Intent chooserIntent = Intent.createChooser(fileIntent, "Choose an action");
                chooserIntent.putExtra("android.intent.extra.INITIAL_INTENTS", new Parcelable[]{intent});
                this.cordova.startActivityForResult(this, chooserIntent, requestCode);
            }
        }
        return single;
    }

    private final Intent getIntentForType(String type) {
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

    public Uri getOutputMediaFile(String type) {
        if (Environment.getExternalStorageState() == null) {
            return null;
        }
        File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "");
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        if (!type.equalsIgnoreCase("image/*")) {
            return null;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(mediaStorageDir.getPath());
        stringBuilder.append(File.separator);
        stringBuilder.append("IMG_");
        stringBuilder.append(timeStamp);
        stringBuilder.append(".jpeg");
        return Uri.fromFile(new File(stringBuilder.toString()));
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

    private JSONObject getResponseObject(String filename, String content) {
        JSONObject result = new JSONObject();
        try {
            result.put("FileName", filename);
            result.put("FileContent", content);
        } catch (JSONException e) {
            String str = TAG;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Unable to upload file: ");
            stringBuilder.append(e.getMessage());
            Log.e(str, stringBuilder.toString());
        }
        return result;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OPENFILE_REQUESTCODE || requestCode == SELECTFILE_REQUESTCODE) {
            CallbackContext callbackContext = this.callback;
            if (callbackContext != null) {
                if (resultCode == -1) {
                    if (data != null) {
                        Uri uri = data.getData();
                        if (uri != null) {
                            String base64 = getFileContent(uri);
                            if (requestCode == OPENFILE_REQUESTCODE) {
                                this.callback.success(base64);
                            } else {
                                this.callback.success(getResponseObject(FileUtils.getFile(this.cordova.getActivity().getApplicationContext(), uri).getName(), base64));
                            }
                        } else {
                            this.callback.error("File uri was null");
                        }
                        return;
                    }
                    Uri uri2 = this.fileUri;
                    if (uri2 != null) {
                        String base642 = getFileContent(uri2);
                        if (requestCode == OPENFILE_REQUESTCODE) {
                            this.callback.success(base642);
                        } else {
                            this.callback.success(getResponseObject(this.fileUri.getLastPathSegment(), base642));
                        }
                        this.fileUri = null;
                        return;
                    }
                    callbackContext.error("File uri was null");
                } else if (resultCode == 0) {
                    this.callback.sendPluginResult(new PluginResult(Status.NO_RESULT));
                } else {
                    callbackContext.error(resultCode);
                }
            }
        }
    }

    private String getFileContent(Uri uri) {
        byte[] buffer = new byte[8192];
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        Base64OutputStream output64 = new Base64OutputStream(output, 0);
        try {
            InputStream inputStream = new FileInputStream(new File(FileUtils.getPath(this.cordova.getActivity().getApplicationContext(), uri)));
            while (true) {
                try {
                    int read = inputStream.read(buffer);
                    int bytesRead = read;
                    if (read == -1) {
                        break;
                    }
                    output64.write(buffer, 0, bytesRead);
                } catch (IOException e) {
                    Log.e(TAG, "Failed to read file");
                }
            }
            output64.close();
            return output.toString();
        } catch (Exception e2) {
            Log.e(TAG, "Failed to get file contents");
            return null;
        }
    }
}
