package android.support.v4.content.res;

import android.content.res.Resources;
import android.content.res.Resources.Theme;
import android.content.res.TypedArray;
import android.graphics.LinearGradient;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.graphics.Shader.TileMode;
import android.graphics.SweepGradient;
import android.support.annotation.ColorInt;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.support.compat.C0013R;
import android.util.AttributeSet;
import android.util.Xml;
import java.io.IOException;
import java.util.List;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

@RestrictTo({Scope.LIBRARY_GROUP})
final class GradientColorInflaterCompat {
    private static final int TILE_MODE_CLAMP = 0;
    private static final int TILE_MODE_MIRROR = 2;
    private static final int TILE_MODE_REPEAT = 1;

    static final class ColorStops {
        final int[] mColors;
        final float[] mOffsets;

        ColorStops(@NonNull List<Integer> colorsList, @NonNull List<Float> offsetsList) {
            int size = colorsList.size();
            this.mColors = new int[size];
            this.mOffsets = new float[size];
            for (int i = 0; i < size; i++) {
                this.mColors[i] = ((Integer) colorsList.get(i)).intValue();
                this.mOffsets[i] = ((Float) offsetsList.get(i)).floatValue();
            }
        }

        ColorStops(@ColorInt int startColor, @ColorInt int endColor) {
            this.mColors = new int[]{startColor, endColor};
            this.mOffsets = new float[]{0.0f, 1.0f};
        }

        ColorStops(@ColorInt int startColor, @ColorInt int centerColor, @ColorInt int endColor) {
            this.mColors = new int[]{startColor, centerColor, endColor};
            this.mOffsets = new float[]{0.0f, 0.5f, 1.0f};
        }
    }

    private GradientColorInflaterCompat() {
    }

    static Shader createFromXml(@NonNull Resources resources, @NonNull XmlPullParser parser, @Nullable Theme theme) throws XmlPullParserException, IOException {
        AttributeSet attrs = Xml.asAttributeSet(parser);
        while (true) {
            int next = parser.next();
            int type = next;
            if (next == 2 || type == 1) {
                if (type == 2) {
                    return createFromXmlInner(resources, parser, attrs, theme);
                }
                throw new XmlPullParserException("No start tag found");
            }
        }
        if (type == 2) {
            return createFromXmlInner(resources, parser, attrs, theme);
        }
        throw new XmlPullParserException("No start tag found");
    }

    static Shader createFromXmlInner(@NonNull Resources resources, @NonNull XmlPullParser parser, @NonNull AttributeSet attrs, @Nullable Theme theme) throws IOException, XmlPullParserException {
        XmlPullParser xmlPullParser = parser;
        String name = parser.getName();
        if (name.equals("gradient")) {
            Theme theme2 = theme;
            TypedArray a = TypedArrayUtils.obtainAttributes(resources, theme2, attrs, C0013R.styleable.GradientColor);
            float startX = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "startX", C0013R.styleable.GradientColor_android_startX, 0.0f);
            float startY = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "startY", C0013R.styleable.GradientColor_android_startY, 0.0f);
            float endX = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "endX", C0013R.styleable.GradientColor_android_endX, 0.0f);
            float endY = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "endY", C0013R.styleable.GradientColor_android_endY, 0.0f);
            float centerX = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "centerX", C0013R.styleable.GradientColor_android_centerX, 0.0f);
            float centerY = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "centerY", C0013R.styleable.GradientColor_android_centerY, 0.0f);
            int type = TypedArrayUtils.getNamedInt(a, xmlPullParser, "type", C0013R.styleable.GradientColor_android_type, 0);
            int startColor = TypedArrayUtils.getNamedColor(a, xmlPullParser, "startColor", C0013R.styleable.GradientColor_android_startColor, 0);
            boolean hasCenterColor = TypedArrayUtils.hasAttribute(xmlPullParser, "centerColor");
            int centerColor = TypedArrayUtils.getNamedColor(a, xmlPullParser, "centerColor", C0013R.styleable.GradientColor_android_centerColor, 0);
            int endColor = TypedArrayUtils.getNamedColor(a, xmlPullParser, "endColor", C0013R.styleable.GradientColor_android_endColor, 0);
            int tileMode = TypedArrayUtils.getNamedInt(a, xmlPullParser, "tileMode", C0013R.styleable.GradientColor_android_tileMode, 0);
            float gradientRadius = TypedArrayUtils.getNamedFloat(a, xmlPullParser, "gradientRadius", C0013R.styleable.GradientColor_android_gradientRadius, 0.0f);
            a.recycle();
            ColorStops colorStops = checkColors(inflateChildElements(resources, parser, attrs, theme), startColor, endColor, hasCenterColor, centerColor);
            switch (type) {
                case 1:
                    if (gradientRadius > 0.0f) {
                        int[] iArr = colorStops.mColors;
                        return new RadialGradient(centerX, centerY, gradientRadius, iArr, colorStops.mOffsets, parseTileMode(tileMode));
                    }
                    throw new XmlPullParserException("<gradient> tag requires 'gradientRadius' attribute with radial type");
                case 2:
                    return new SweepGradient(centerX, centerY, colorStops.mColors, colorStops.mOffsets);
                default:
                    int[] iArr2 = colorStops.mColors;
                    int[] iArr3 = iArr2;
                    int[] iArr4 = iArr3;
                    return new LinearGradient(startX, startY, endX, endY, iArr4, colorStops.mOffsets, parseTileMode(tileMode));
            }
        }
        theme2 = theme;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(parser.getPositionDescription());
        stringBuilder.append(": invalid gradient color tag ");
        stringBuilder.append(name);
        throw new XmlPullParserException(stringBuilder.toString());
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private static android.support.v4.content.res.GradientColorInflaterCompat.ColorStops inflateChildElements(@android.support.annotation.NonNull android.content.res.Resources r12, @android.support.annotation.NonNull org.xmlpull.v1.XmlPullParser r13, @android.support.annotation.NonNull android.util.AttributeSet r14, @android.support.annotation.Nullable android.content.res.Resources.Theme r15) throws org.xmlpull.v1.XmlPullParserException, java.io.IOException {
        /*
        r0 = r13.getDepth();
        r1 = 1;
        r0 = r0 + r1;
        r2 = new java.util.ArrayList;
        r3 = 20;
        r2.<init>(r3);
        r4 = new java.util.ArrayList;
        r4.<init>(r3);
        r3 = r4;
    L_0x0013:
        r4 = r13.next();
        r5 = r4;
        if (r4 == r1) goto L_0x0091;
    L_0x001a:
        r4 = r13.getDepth();
        r6 = r4;
        if (r4 >= r0) goto L_0x0026;
    L_0x0021:
        r4 = 3;
        if (r5 == r4) goto L_0x0025;
    L_0x0024:
        goto L_0x0026;
    L_0x0025:
        goto L_0x0092;
    L_0x0026:
        r4 = 2;
        if (r5 == r4) goto L_0x002a;
    L_0x0029:
        goto L_0x0013;
    L_0x002a:
        if (r6 > r0) goto L_0x0090;
    L_0x002c:
        r4 = r13.getName();
        r7 = "item";
        r4 = r4.equals(r7);
        if (r4 != 0) goto L_0x0039;
    L_0x0038:
        goto L_0x0013;
    L_0x0039:
        r4 = android.support.compat.C0013R.styleable.GradientColorItem;
        r4 = android.support.v4.content.res.TypedArrayUtils.obtainAttributes(r12, r15, r14, r4);
        r7 = android.support.compat.C0013R.styleable.GradientColorItem_android_color;
        r7 = r4.hasValue(r7);
        r8 = android.support.compat.C0013R.styleable.GradientColorItem_android_offset;
        r8 = r4.hasValue(r8);
        if (r7 == 0) goto L_0x006f;
    L_0x004d:
        if (r8 == 0) goto L_0x006f;
    L_0x004f:
        r9 = android.support.compat.C0013R.styleable.GradientColorItem_android_color;
        r10 = 0;
        r9 = r4.getColor(r9, r10);
        r10 = android.support.compat.C0013R.styleable.GradientColorItem_android_offset;
        r11 = 0;
        r10 = r4.getFloat(r10, r11);
        r4.recycle();
        r11 = java.lang.Integer.valueOf(r9);
        r3.add(r11);
        r11 = java.lang.Float.valueOf(r10);
        r2.add(r11);
        goto L_0x0013;
        r1 = new org.xmlpull.v1.XmlPullParserException;
        r9 = new java.lang.StringBuilder;
        r9.<init>();
        r10 = r13.getPositionDescription();
        r9.append(r10);
        r10 = ": <item> tag requires a 'color' attribute and a 'offset' ";
        r9.append(r10);
        r10 = "attribute!";
        r9.append(r10);
        r9 = r9.toString();
        r1.<init>(r9);
        throw r1;
    L_0x0090:
        goto L_0x0013;
    L_0x0092:
        r1 = r3.size();
        if (r1 <= 0) goto L_0x009e;
    L_0x0098:
        r1 = new android.support.v4.content.res.GradientColorInflaterCompat$ColorStops;
        r1.<init>(r3, r2);
        return r1;
    L_0x009e:
        r1 = 0;
        return r1;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.content.res.GradientColorInflaterCompat.inflateChildElements(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.content.res.Resources$Theme):android.support.v4.content.res.GradientColorInflaterCompat$ColorStops");
    }

    private static ColorStops checkColors(@Nullable ColorStops colorItems, @ColorInt int startColor, @ColorInt int endColor, boolean hasCenterColor, @ColorInt int centerColor) {
        if (colorItems != null) {
            return colorItems;
        }
        if (hasCenterColor) {
            return new ColorStops(startColor, centerColor, endColor);
        }
        return new ColorStops(startColor, endColor);
    }

    private static TileMode parseTileMode(int tileMode) {
        switch (tileMode) {
            case 1:
                return TileMode.REPEAT;
            case 2:
                return TileMode.MIRROR;
            default:
                return TileMode.CLAMP;
        }
    }
}
