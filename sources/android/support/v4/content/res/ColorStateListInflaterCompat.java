package android.support.v4.content.res;

import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.Resources.Theme;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.support.annotation.ColorInt;
import android.support.annotation.FloatRange;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.support.v4.view.ViewCompat;
import android.util.AttributeSet;
import android.util.Xml;
import java.io.IOException;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

@RestrictTo({Scope.LIBRARY_GROUP})
public final class ColorStateListInflaterCompat {
    private static final int DEFAULT_COLOR = -65536;

    private ColorStateListInflaterCompat() {
    }

    @NonNull
    public static ColorStateList createFromXml(@NonNull Resources r, @NonNull XmlPullParser parser, @Nullable Theme theme) throws XmlPullParserException, IOException {
        AttributeSet attrs = Xml.asAttributeSet(parser);
        while (true) {
            int next = parser.next();
            int type = next;
            if (next == 2 || type == 1) {
                if (type == 2) {
                    return createFromXmlInner(r, parser, attrs, theme);
                }
                throw new XmlPullParserException("No start tag found");
            }
        }
        if (type == 2) {
            return createFromXmlInner(r, parser, attrs, theme);
        }
        throw new XmlPullParserException("No start tag found");
    }

    @NonNull
    public static ColorStateList createFromXmlInner(@NonNull Resources r, @NonNull XmlPullParser parser, @NonNull AttributeSet attrs, @Nullable Theme theme) throws XmlPullParserException, IOException {
        String name = parser.getName();
        if (name.equals("selector")) {
            return inflate(r, parser, attrs, theme);
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(parser.getPositionDescription());
        stringBuilder.append(": invalid color state list tag ");
        stringBuilder.append(name);
        throw new XmlPullParserException(stringBuilder.toString());
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private static android.content.res.ColorStateList inflate(@android.support.annotation.NonNull android.content.res.Resources r22, @android.support.annotation.NonNull org.xmlpull.v1.XmlPullParser r23, @android.support.annotation.NonNull android.util.AttributeSet r24, @android.support.annotation.Nullable android.content.res.Resources.Theme r25) throws org.xmlpull.v1.XmlPullParserException, java.io.IOException {
        /*
        r0 = r24;
        r1 = r23.getDepth();
        r2 = 1;
        r1 = r1 + r2;
        r3 = -65536; // 0xffffffffffff0000 float:NaN double:NaN;
        r4 = 20;
        r4 = new int[r4][];
        r5 = r4.length;
        r5 = new int[r5];
        r6 = 0;
    L_0x0012:
        r7 = r23.next();
        r8 = r7;
        if (r7 == r2) goto L_0x00fd;
    L_0x0019:
        r7 = r23.getDepth();
        r10 = r7;
        if (r7 >= r1) goto L_0x002e;
    L_0x0020:
        r7 = 3;
        if (r8 == r7) goto L_0x0024;
    L_0x0023:
        goto L_0x002e;
    L_0x0024:
        r11 = r22;
        r12 = r25;
        r16 = r1;
        r18 = r3;
        goto L_0x0105;
    L_0x002e:
        r7 = 2;
        if (r8 != r7) goto L_0x00ee;
    L_0x0031:
        if (r10 > r1) goto L_0x00ee;
    L_0x0033:
        r7 = r23.getName();
        r11 = "item";
        r7 = r7.equals(r11);
        if (r7 != 0) goto L_0x0049;
    L_0x003f:
        r11 = r22;
        r12 = r25;
        r16 = r1;
        r18 = r3;
        goto L_0x00f6;
    L_0x0049:
        r7 = android.support.compat.C0013R.styleable.ColorStateListItem;
        r11 = r22;
        r12 = r25;
        r7 = obtainAttributes(r11, r12, r0, r7);
        r13 = android.support.compat.C0013R.styleable.ColorStateListItem_android_color;
        r14 = -65281; // 0xffffffffffff00ff float:NaN double:NaN;
        r13 = r7.getColor(r13, r14);
        r14 = 1065353216; // 0x3f800000 float:1.0 double:5.263544247E-315;
        r15 = android.support.compat.C0013R.styleable.ColorStateListItem_android_alpha;
        r15 = r7.hasValue(r15);
        if (r15 == 0) goto L_0x006d;
    L_0x0066:
        r15 = android.support.compat.C0013R.styleable.ColorStateListItem_android_alpha;
        r14 = r7.getFloat(r15, r14);
        goto L_0x007d;
    L_0x006d:
        r15 = android.support.compat.C0013R.styleable.ColorStateListItem_alpha;
        r15 = r7.hasValue(r15);
        if (r15 == 0) goto L_0x007c;
    L_0x0075:
        r15 = android.support.compat.C0013R.styleable.ColorStateListItem_alpha;
        r14 = r7.getFloat(r15, r14);
        goto L_0x007d;
    L_0x007d:
        r7.recycle();
        r15 = 0;
        r2 = r24.getAttributeCount();
        r9 = new int[r2];
        r16 = 0;
        r21 = r16;
        r16 = r1;
        r1 = r15;
        r15 = r21;
    L_0x0090:
        if (r15 >= r2) goto L_0x00c3;
    L_0x0092:
        r17 = r2;
        r2 = r0.getAttributeNameResource(r15);
        r18 = r3;
        r3 = 16843173; // 0x10101a5 float:2.3694738E-38 double:8.321633E-317;
        if (r2 == r3) goto L_0x00bb;
    L_0x009f:
        r3 = 16843551; // 0x101031f float:2.3695797E-38 double:8.32182E-317;
        if (r2 == r3) goto L_0x00bb;
    L_0x00a4:
        r3 = android.support.compat.C0013R.attr.alpha;
        if (r2 == r3) goto L_0x00bb;
    L_0x00a8:
        r3 = r1 + 1;
        r19 = r3;
        r3 = 0;
        r20 = r0.getAttributeBooleanValue(r15, r3);
        if (r20 == 0) goto L_0x00b5;
    L_0x00b3:
        r3 = r2;
        goto L_0x00b6;
    L_0x00b5:
        r3 = -r2;
    L_0x00b6:
        r9[r1] = r3;
        r1 = r19;
        goto L_0x00bc;
    L_0x00bc:
        r15 = r15 + 1;
        r2 = r17;
        r3 = r18;
        goto L_0x0090;
    L_0x00c3:
        r17 = r2;
        r18 = r3;
        r2 = android.util.StateSet.trimStateSet(r9, r1);
        r3 = modulateColorAlpha(r13, r14);
        if (r6 == 0) goto L_0x00d6;
    L_0x00d1:
        r9 = r2.length;
        if (r9 != 0) goto L_0x00d5;
    L_0x00d4:
        goto L_0x00d6;
    L_0x00d5:
        goto L_0x00d9;
    L_0x00d6:
        r9 = r3;
        r18 = r9;
    L_0x00d9:
        r5 = android.support.v4.content.res.GrowingArrayUtils.append(r5, r6, r3);
        r9 = android.support.v4.content.res.GrowingArrayUtils.append(r4, r6, r2);
        r4 = r9;
        r4 = (int[][]) r4;
        r6 = r6 + 1;
        r1 = r16;
        r3 = r18;
        r2 = 1;
        goto L_0x0012;
    L_0x00ee:
        r11 = r22;
        r12 = r25;
        r16 = r1;
        r18 = r3;
    L_0x00f6:
        r1 = r16;
        r3 = r18;
        r2 = 1;
        goto L_0x0012;
    L_0x00fd:
        r11 = r22;
        r12 = r25;
        r16 = r1;
        r18 = r3;
    L_0x0105:
        r1 = new int[r6];
        r2 = new int[r6][];
        r3 = 0;
        java.lang.System.arraycopy(r5, r3, r1, r3, r6);
        java.lang.System.arraycopy(r4, r3, r2, r3, r6);
        r3 = new android.content.res.ColorStateList;
        r3.<init>(r2, r1);
        return r3;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.content.res.ColorStateListInflaterCompat.inflate(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.content.res.Resources$Theme):android.content.res.ColorStateList");
    }

    private static TypedArray obtainAttributes(Resources res, Theme theme, AttributeSet set, int[] attrs) {
        if (theme == null) {
            return res.obtainAttributes(set, attrs);
        }
        return theme.obtainStyledAttributes(set, attrs, 0, 0);
    }

    @ColorInt
    private static int modulateColorAlpha(@ColorInt int color, @FloatRange(from = 0.0d, to = 1.0d) float alphaMod) {
        return (ViewCompat.MEASURED_SIZE_MASK & color) | (Math.round(((float) Color.alpha(color)) * alphaMod) << 24);
    }
}
