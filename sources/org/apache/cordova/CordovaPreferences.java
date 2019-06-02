package org.apache.cordova;

import android.os.Bundle;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class CordovaPreferences {
    private Bundle preferencesBundleExtras;
    private HashMap<String, String> prefs = new HashMap(20);

    public void setPreferencesBundle(Bundle extras) {
        this.preferencesBundleExtras = extras;
    }

    public void set(String name, String value) {
        this.prefs.put(name.toLowerCase(Locale.ENGLISH), value);
    }

    public void set(String name, boolean value) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("");
        stringBuilder.append(value);
        set(name, stringBuilder.toString());
    }

    public void set(String name, int value) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("");
        stringBuilder.append(value);
        set(name, stringBuilder.toString());
    }

    public void set(String name, double value) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("");
        stringBuilder.append(value);
        set(name, stringBuilder.toString());
    }

    public Map<String, String> getAll() {
        return this.prefs;
    }

    public boolean getBoolean(String name, boolean defaultValue) {
        String value = (String) this.prefs.get(name.toLowerCase(Locale.ENGLISH));
        if (value != null) {
            return Boolean.parseBoolean(value);
        }
        return defaultValue;
    }

    public boolean contains(String name) {
        return getString(name, null) != null;
    }

    public int getInteger(String name, int defaultValue) {
        String value = (String) this.prefs.get(name.toLowerCase(Locale.ENGLISH));
        if (value != null) {
            return (int) Long.decode(value).longValue();
        }
        return defaultValue;
    }

    public double getDouble(String name, double defaultValue) {
        String value = (String) this.prefs.get(name.toLowerCase(Locale.ENGLISH));
        if (value != null) {
            return Double.valueOf(value).doubleValue();
        }
        return defaultValue;
    }

    public String getString(String name, String defaultValue) {
        String value = (String) this.prefs.get(name.toLowerCase(Locale.ENGLISH));
        if (value != null) {
            return value;
        }
        return defaultValue;
    }
}
