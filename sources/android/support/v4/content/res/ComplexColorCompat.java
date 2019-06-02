package android.support.v4.content.res;

import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.Resources.Theme;
import android.graphics.Shader;
import android.support.annotation.ColorInt;
import android.support.annotation.ColorRes;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.util.AttributeSet;
import android.util.Log;
import android.util.Xml;
import java.io.IOException;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

@RestrictTo({Scope.LIBRARY_GROUP})
public final class ComplexColorCompat {
    private static final String LOG_TAG = "ComplexColorCompat";
    private int mColor;
    private final ColorStateList mColorStateList;
    private final Shader mShader;

    private ComplexColorCompat(Shader shader, ColorStateList colorStateList, @ColorInt int color) {
        this.mShader = shader;
        this.mColorStateList = colorStateList;
        this.mColor = color;
    }

    static ComplexColorCompat from(@NonNull Shader shader) {
        return new ComplexColorCompat(shader, null, 0);
    }

    static ComplexColorCompat from(@NonNull ColorStateList colorStateList) {
        return new ComplexColorCompat(null, colorStateList, colorStateList.getDefaultColor());
    }

    static ComplexColorCompat from(@ColorInt int color) {
        return new ComplexColorCompat(null, null, color);
    }

    @Nullable
    public Shader getShader() {
        return this.mShader;
    }

    @ColorInt
    public int getColor() {
        return this.mColor;
    }

    public void setColor(@ColorInt int color) {
        this.mColor = color;
    }

    public boolean isGradient() {
        return this.mShader != null;
    }

    public boolean isStateful() {
        if (this.mShader == null) {
            ColorStateList colorStateList = this.mColorStateList;
            if (colorStateList != null && colorStateList.isStateful()) {
                return true;
            }
        }
        return false;
    }

    public boolean onStateChanged(int[] stateSet) {
        if (!isStateful()) {
            return false;
        }
        int colorForState = this.mColorStateList;
        colorForState = colorForState.getColorForState(stateSet, colorForState.getDefaultColor());
        if (colorForState == this.mColor) {
            return false;
        }
        this.mColor = colorForState;
        return true;
    }

    public boolean willDraw() {
        if (!isGradient()) {
            if (this.mColor == 0) {
                return false;
            }
        }
        return true;
    }

    @Nullable
    public static ComplexColorCompat inflate(@NonNull Resources resources, @ColorRes int resId, @Nullable Theme theme) {
        try {
            return createFromXml(resources, resId, theme);
        } catch (Exception e) {
            Log.e(LOG_TAG, "Failed to inflate ComplexColor.", e);
            return null;
        }
    }

    @NonNull
    private static ComplexColorCompat createFromXml(@NonNull Resources resources, @ColorRes int resId, @Nullable Theme theme) throws IOException, XmlPullParserException {
        XmlPullParser parser = resources.getXml(resId);
        AttributeSet attrs = Xml.asAttributeSet(parser);
        while (true) {
            int next = parser.next();
            int type = next;
            Object obj = 1;
            String name;
            int hashCode;
            StringBuilder stringBuilder;
            if (next == 2 || type == 1) {
                if (type != 2) {
                    name = parser.getName();
                    hashCode = name.hashCode();
                    if (hashCode != 89650992) {
                        if (hashCode == 1191572447 && name.equals("selector")) {
                            obj = null;
                            switch (obj) {
                                case null:
                                    return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                                case 1:
                                    return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                                default:
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append(parser.getPositionDescription());
                                    stringBuilder.append(": unsupported complex color tag ");
                                    stringBuilder.append(name);
                                    throw new XmlPullParserException(stringBuilder.toString());
                            }
                        }
                    } else if (name.equals("gradient")) {
                        switch (obj) {
                            case null:
                                return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                            case 1:
                                return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                            default:
                                stringBuilder = new StringBuilder();
                                stringBuilder.append(parser.getPositionDescription());
                                stringBuilder.append(": unsupported complex color tag ");
                                stringBuilder.append(name);
                                throw new XmlPullParserException(stringBuilder.toString());
                        }
                    }
                    obj = -1;
                    switch (obj) {
                        case null:
                            return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                        case 1:
                            return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                        default:
                            stringBuilder = new StringBuilder();
                            stringBuilder.append(parser.getPositionDescription());
                            stringBuilder.append(": unsupported complex color tag ");
                            stringBuilder.append(name);
                            throw new XmlPullParserException(stringBuilder.toString());
                    }
                }
                throw new XmlPullParserException("No start tag found");
            }
        }
        if (type != 2) {
            throw new XmlPullParserException("No start tag found");
        }
        name = parser.getName();
        hashCode = name.hashCode();
        if (hashCode != 89650992) {
            obj = null;
            switch (obj) {
                case null:
                    return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                case 1:
                    return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                default:
                    stringBuilder = new StringBuilder();
                    stringBuilder.append(parser.getPositionDescription());
                    stringBuilder.append(": unsupported complex color tag ");
                    stringBuilder.append(name);
                    throw new XmlPullParserException(stringBuilder.toString());
            }
        } else if (name.equals("gradient")) {
            switch (obj) {
                case null:
                    return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                case 1:
                    return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
                default:
                    stringBuilder = new StringBuilder();
                    stringBuilder.append(parser.getPositionDescription());
                    stringBuilder.append(": unsupported complex color tag ");
                    stringBuilder.append(name);
                    throw new XmlPullParserException(stringBuilder.toString());
            }
        }
        obj = -1;
        switch (obj) {
            case null:
                return from(ColorStateListInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
            case 1:
                return from(GradientColorInflaterCompat.createFromXmlInner(resources, parser, attrs, theme));
            default:
                stringBuilder = new StringBuilder();
                stringBuilder.append(parser.getPositionDescription());
                stringBuilder.append(": unsupported complex color tag ");
                stringBuilder.append(name);
                throw new XmlPullParserException(stringBuilder.toString());
        }
    }
}
