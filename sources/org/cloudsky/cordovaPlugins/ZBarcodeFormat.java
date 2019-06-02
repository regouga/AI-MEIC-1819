package org.cloudsky.cordovaPlugins;

import java.util.ArrayList;
import java.util.List;

public class ZBarcodeFormat {
    public static final List<ZBarcodeFormat> ALL_FORMATS = new ArrayList();
    public static final ZBarcodeFormat CODABAR = new ZBarcodeFormat(38, "CODABAR");
    public static final ZBarcodeFormat CODE128 = new ZBarcodeFormat(128, "CODE128");
    public static final ZBarcodeFormat CODE39 = new ZBarcodeFormat(39, "CODE39");
    public static final ZBarcodeFormat CODE93 = new ZBarcodeFormat(93, "CODE93");
    public static final ZBarcodeFormat DATABAR = new ZBarcodeFormat(34, "DATABAR");
    public static final ZBarcodeFormat DATABAR_EXP = new ZBarcodeFormat(35, "DATABAR_EXP");
    public static final ZBarcodeFormat EAN13 = new ZBarcodeFormat(13, "EAN13");
    public static final ZBarcodeFormat EAN8 = new ZBarcodeFormat(8, "EAN8");
    public static final ZBarcodeFormat I25 = new ZBarcodeFormat(25, "I25");
    public static final ZBarcodeFormat ISBN10 = new ZBarcodeFormat(10, "ISBN10");
    public static final ZBarcodeFormat ISBN13 = new ZBarcodeFormat(14, "ISBN13");
    public static final ZBarcodeFormat NONE = new ZBarcodeFormat(0, "NONE");
    public static final ZBarcodeFormat PARTIAL = new ZBarcodeFormat(1, "PARTIAL");
    public static final ZBarcodeFormat PDF417 = new ZBarcodeFormat(57, "PDF417");
    public static final ZBarcodeFormat QRCODE = new ZBarcodeFormat(64, "QRCODE");
    public static final ZBarcodeFormat UPCA = new ZBarcodeFormat(12, "UPCA");
    public static final ZBarcodeFormat UPCE = new ZBarcodeFormat(9, "UPCE");
    private int mId;
    private String mName;

    static {
        ALL_FORMATS.add(PARTIAL);
        ALL_FORMATS.add(EAN8);
        ALL_FORMATS.add(UPCE);
        ALL_FORMATS.add(ISBN10);
        ALL_FORMATS.add(UPCA);
        ALL_FORMATS.add(EAN13);
        ALL_FORMATS.add(ISBN13);
        ALL_FORMATS.add(I25);
        ALL_FORMATS.add(DATABAR);
        ALL_FORMATS.add(DATABAR_EXP);
        ALL_FORMATS.add(CODABAR);
        ALL_FORMATS.add(CODE39);
        ALL_FORMATS.add(PDF417);
        ALL_FORMATS.add(QRCODE);
        ALL_FORMATS.add(CODE93);
        ALL_FORMATS.add(CODE128);
    }

    public ZBarcodeFormat(int id, String name) {
        this.mId = id;
        this.mName = name;
    }

    public int getId() {
        return this.mId;
    }

    public String getName() {
        return this.mName;
    }

    public static ZBarcodeFormat getFormatById(int id) {
        for (ZBarcodeFormat format : ALL_FORMATS) {
            if (format.getId() == id) {
                return format;
            }
        }
        return NONE;
    }
}
