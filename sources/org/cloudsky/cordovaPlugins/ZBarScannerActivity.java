package org.cloudsky.cordovaPlugins;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.hardware.Camera;
import android.hardware.Camera.AutoFocusCallback;
import android.hardware.Camera.CameraInfo;
import android.hardware.Camera.Parameters;
import android.hardware.Camera.PreviewCallback;
import android.hardware.Camera.Size;
import android.os.Build.VERSION;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.SurfaceHolder;
import android.view.SurfaceHolder.Callback;
import android.view.SurfaceView;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.FrameLayout.LayoutParams;
import android.widget.TextView;
import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;
import net.sourceforge.zbar.Image;
import net.sourceforge.zbar.ImageScanner;
import net.sourceforge.zbar.Symbol;
import org.json.JSONException;
import org.json.JSONObject;

public class ZBarScannerActivity extends Activity implements Callback {
    private static final int CAMERA_PERMISSION_REQUEST = 1;
    public static final String EXTRA_PARAMS = "params";
    public static final String EXTRA_QRVALUE = "qrValue";
    public static final int RESULT_ERROR = 2;
    private static int autoFocusInterval = 2000;
    private AutoFocusCallback autoFocusCb = new C00842();
    private Handler autoFocusHandler;
    private Camera camera;
    private Runnable doAutoFocus = new C00853();
    String flashMode;
    private SurfaceHolder holder;
    private Collection<ZBarcodeFormat> mFormats = null;
    private String package_name;
    private PreviewCallback previewCb = new C00864();
    private Resources resources;
    private ImageScanner scanner;
    private SurfaceView scannerSurface;
    private int surfH;
    private int surfW;
    String whichCamera;

    /* renamed from: org.cloudsky.cordovaPlugins.ZBarScannerActivity$2 */
    class C00842 implements AutoFocusCallback {
        C00842() {
        }

        public void onAutoFocus(boolean success, Camera camera) {
            try {
                camera.cancelAutoFocus();
                ZBarScannerActivity.this.autoFocusHandler.postDelayed(ZBarScannerActivity.this.doAutoFocus, (long) ZBarScannerActivity.autoFocusInterval);
            } catch (Exception e) {
            }
        }
    }

    /* renamed from: org.cloudsky.cordovaPlugins.ZBarScannerActivity$3 */
    class C00853 implements Runnable {
        C00853() {
        }

        public void run() {
            if (ZBarScannerActivity.this.camera != null) {
                ZBarScannerActivity.this.camera.autoFocus(ZBarScannerActivity.this.autoFocusCb);
            }
        }
    }

    /* renamed from: org.cloudsky.cordovaPlugins.ZBarScannerActivity$4 */
    class C00864 implements PreviewCallback {
        C00864() {
        }

        public void onPreviewFrame(byte[] data, Camera camera) {
            Size size = camera.getParameters().getPreviewSize();
            Image barcode = new Image(size.width, size.height, "Y800");
            barcode.setData(data);
            if (ZBarScannerActivity.this.scanner.scanImage(barcode) != 0) {
                Symbol symbol = null;
                Iterator it = ZBarScannerActivity.this.scanner.getResults().iterator();
                while (it.hasNext()) {
                    Symbol sym = (Symbol) it.next();
                    if (sym.getType() > 1) {
                        symbol = sym;
                        break;
                    }
                }
                if (symbol != null) {
                    Intent result = new Intent();
                    result.putExtra(ZBarScannerActivity.EXTRA_QRVALUE, symbol.getData());
                    ZBarScannerActivity.this.setResult(-1, result);
                    ZBarScannerActivity.this.finish();
                }
            }
        }
    }

    static {
        System.loadLibrary("iconv");
    }

    public void onCreate(Bundle savedInstanceState) {
        if (ContextCompat.checkSelfPermission(getBaseContext(), "android.permission.CAMERA") == 0) {
            setUpCamera();
        } else {
            ActivityCompat.requestPermissions(this, new String[]{"android.permission.CAMERA"}, 1);
        }
        super.onCreate(savedInstanceState);
    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == 1) {
            if (grantResults.length <= 0 || grantResults[0] != 0) {
                onBackPressed();
            } else {
                setUpCamera();
            }
        }
    }

    private void setUpCamera() {
        JSONObject params;
        try {
            params = new JSONObject(getIntent().getStringExtra(EXTRA_PARAMS));
        } catch (JSONException e) {
            params = new JSONObject();
        }
        String textTitle = params.optString("text_title");
        String textInstructions = params.optString("text_instructions");
        Boolean drawSight = Boolean.valueOf(params.optBoolean("drawSight", true));
        this.whichCamera = params.optString("camera");
        this.flashMode = params.optString("flash");
        this.autoFocusHandler = new Handler();
        this.scanner = new ImageScanner();
        this.scanner.setConfig(0, 256, 3);
        this.scanner.setConfig(0, 257, 3);
        for (ZBarcodeFormat format : getFormats()) {
            this.scanner.setConfig(format.getId(), 0, 1);
        }
        setContentView(getResourceId("layout/cszbarscanner"));
        TextView view_textInstructions = (TextView) findViewById(getResourceId("id/csZbarScannerInstructions"));
        ((TextView) findViewById(getResourceId("id/csZbarScannerTitle"))).setText(textTitle);
        view_textInstructions.setText(textInstructions);
        if (!drawSight.booleanValue()) {
            findViewById(getResourceId("id/csZbarScannerSight")).setVisibility(4);
        }
        this.scannerSurface = new SurfaceView(this) {
            public void onSizeChanged(int w, int h, int oldW, int oldH) {
                ZBarScannerActivity.this.surfW = w;
                ZBarScannerActivity.this.surfH = h;
                ZBarScannerActivity.this.matchSurfaceToPreviewRatio();
            }
        };
        this.scannerSurface.setLayoutParams(new LayoutParams(-1, -1, 17));
        this.scannerSurface.getHolder().addCallback(this);
        FrameLayout scannerView = (FrameLayout) findViewById(getResourceId("id/csZbarScannerView"));
        scannerView.addView(this.scannerSurface);
        findViewById(getResourceId("id/csZbarScannerTitle")).bringToFront();
        findViewById(getResourceId("id/csZbarScannerInstructions")).bringToFront();
        findViewById(getResourceId("id/csZbarScannerSightContainer")).bringToFront();
        findViewById(getResourceId("id/csZbarScannerSight")).bringToFront();
        scannerView.requestLayout();
        scannerView.invalidate();
    }

    public void onResume() {
        super.onResume();
        try {
            if (this.whichCamera.equals("front")) {
                int numCams = Camera.getNumberOfCameras();
                CameraInfo cameraInfo = new CameraInfo();
                for (int i = 0; i < numCams; i++) {
                    Camera.getCameraInfo(i, cameraInfo);
                    if (cameraInfo.facing == 1) {
                        this.camera = Camera.open(i);
                    }
                }
            } else {
                this.camera = Camera.open();
            }
            if (this.camera == null) {
                throw new Exception("Error: No suitable camera found.");
            }
        } catch (RuntimeException e) {
        } catch (Exception e2) {
        }
    }

    private void setCameraDisplayOrientation(Activity activity, int cameraId) {
        int result;
        CameraInfo info = new CameraInfo();
        Camera.getCameraInfo(cameraId, info);
        int degrees = 0;
        switch (activity.getWindowManager().getDefaultDisplay().getRotation()) {
            case 0:
                degrees = 0;
                break;
            case 1:
                degrees = 90;
                break;
            case 2:
                degrees = 180;
                break;
            case 3:
                degrees = 270;
                break;
            default:
                break;
        }
        if (info.facing == 1) {
            result = (360 - ((info.orientation + degrees) % 360)) % 360;
        } else {
            result = ((info.orientation - degrees) + 360) % 360;
        }
        this.camera.setDisplayOrientation(result);
    }

    public void onPause() {
        releaseCamera();
        super.onPause();
    }

    public void onDestroy() {
        ImageScanner imageScanner = this.scanner;
        if (imageScanner != null) {
            imageScanner.destroy();
        }
        super.onDestroy();
    }

    public void onBackPressed() {
        setResult(0);
        super.onBackPressed();
    }

    public void surfaceCreated(SurfaceHolder hld) {
        tryStopPreview();
        this.holder = hld;
        tryStartPreview();
    }

    public void surfaceDestroyed(SurfaceHolder holder) {
        die("The camera surface was destroyed");
    }

    public void surfaceChanged(SurfaceHolder hld, int fmt, int w, int h) {
        if (hld.getSurface() == null) {
            die("There is no camera surface");
        }
        this.surfW = w;
        this.surfH = h;
        matchSurfaceToPreviewRatio();
        tryStopPreview();
        this.holder = hld;
        tryStartPreview();
    }

    public void onConfigurationChanged(Configuration newConfig) {
        if (this.camera != null) {
            int rotation;
            super.onConfigurationChanged(newConfig);
            switch (getWindowManager().getDefaultDisplay().getRotation()) {
                case 0:
                    rotation = 90;
                    break;
                case 1:
                    rotation = 0;
                    break;
                case 2:
                    rotation = 270;
                    break;
                case 3:
                    rotation = 180;
                    break;
                default:
                    rotation = 90;
                    break;
            }
            this.camera.setDisplayOrientation(rotation);
            Parameters params = this.camera.getParameters();
            tryStopPreview();
            tryStartPreview();
        }
    }

    public void toggleFlash(View view) {
        StringBuilder stringBuilder;
        Camera camera = this.camera;
        if (camera != null) {
            camera.startPreview();
            Parameters camParams = this.camera.getParameters();
            try {
                if (!camParams.getFlashMode().equals("off") || camParams.getFlashMode().equals("torch") || camParams.getFlashMode().equals("on")) {
                    camParams.setFlashMode("off");
                } else {
                    camParams.setFlashMode("torch");
                }
            } catch (RuntimeException e) {
            }
            try {
                this.camera.setPreviewDisplay(this.holder);
                this.camera.setPreviewCallback(this.previewCb);
                this.camera.startPreview();
                if (VERSION.SDK_INT >= 14) {
                    this.camera.autoFocus(this.autoFocusCb);
                    camParams.setFocusMode("continuous-picture");
                }
                this.camera.setParameters(camParams);
            } catch (RuntimeException e2) {
                stringBuilder = new StringBuilder("Unsupported camera parameter reported for flash mode: ");
                stringBuilder.append(this.flashMode);
                Log.d("csZBar", stringBuilder.toString());
            } catch (IOException e3) {
                stringBuilder = new StringBuilder("Wrong holder data");
                stringBuilder.append(this.flashMode);
                Log.d("csZBar", stringBuilder.toString());
            }
        }
    }

    private void die(String msg) {
        setResult(2);
        finish();
    }

    private int getResourceId(String typeAndName) {
        if (this.package_name == null) {
            this.package_name = getApplication().getPackageName();
        }
        if (this.resources == null) {
            this.resources = getApplication().getResources();
        }
        return this.resources.getIdentifier(typeAndName, null, this.package_name);
    }

    private void releaseCamera() {
        if (this.camera != null) {
            this.autoFocusHandler.removeCallbacks(this.doAutoFocus);
            this.camera.setPreviewCallback(null);
            this.camera.release();
            this.camera = null;
        }
    }

    private void matchSurfaceToPreviewRatio() {
        Parameters params = this.camera;
        if (params != null) {
            if (this.surfW != 0) {
                if (this.surfH != 0) {
                    Size size = params.getParameters().getPreviewSize();
                    float previewRatio = ((float) size.height) / ((float) size.width);
                    int i = this.surfW;
                    float surfaceRatio = (float) i;
                    int i2 = this.surfH;
                    surfaceRatio /= (float) i2;
                    if (previewRatio > surfaceRatio) {
                        this.scannerSurface.setLayoutParams(new LayoutParams(i, Math.round(((float) i) / previewRatio), 17));
                    } else if (previewRatio < surfaceRatio) {
                        this.scannerSurface.setLayoutParams(new LayoutParams(Math.round(((float) i2) * previewRatio), this.surfH, 17));
                    }
                }
            }
        }
    }

    private void tryStopPreview() {
        try {
            this.camera.stopPreview();
        } catch (Exception e) {
        }
    }

    public Collection<ZBarcodeFormat> getFormats() {
        Collection<ZBarcodeFormat> collection = this.mFormats;
        if (collection == null) {
            return ZBarcodeFormat.ALL_FORMATS;
        }
        return collection;
    }

    private void tryStartPreview() {
        if (this.holder != null) {
            try {
                switch (getWindowManager().getDefaultDisplay().getRotation()) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    default:
                        break;
                }
                setCameraDisplayOrientation(this, 0);
                Parameters camParams = this.camera.getParameters();
                try {
                    camParams.setFocusMode("continuous-picture");
                    this.camera.setParameters(camParams);
                } catch (Exception e) {
                }
                this.camera.setPreviewDisplay(this.holder);
                this.camera.setPreviewCallback(this.previewCb);
                this.camera.startPreview();
                if (VERSION.SDK_INT >= 14) {
                    this.camera.autoFocus(this.autoFocusCb);
                }
            } catch (IOException e2) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Could not start camera preview: ");
                stringBuilder.append(e2.getMessage());
                die(stringBuilder.toString());
            }
        }
    }
}
