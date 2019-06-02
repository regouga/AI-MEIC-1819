package com.outsystems.plugins.manifest.interfaces;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.outsystems.plugins.manifest.types.Manifest;
import org.json.JSONObject;

public interface ManifestParserEngine {
    Manifest getManifestInfo(@NonNull JSONObject jSONObject);

    String getManifestUrl(@Nullable String str);

    String getManifestVersion(@NonNull JSONObject jSONObject);
}
