package com.cookpad.puree.storage;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.text.TextUtils;
import android.util.Log;
import com.cookpad.puree.internal.ProcessName;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.ipaulpro.afilechooser.utils.FileUtils;
import java.util.concurrent.atomic.AtomicBoolean;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public class PureeSQLiteStorage extends SQLiteOpenHelper implements PureeStorage {
    private static final String COLUMN_NAME_LOG = "log";
    private static final String COLUMN_NAME_TYPE = "type";
    private static final String DATABASE_NAME = "puree.db";
    private static final int DATABASE_VERSION = 1;
    private static final String TABLE_NAME = "logs";
    private final SQLiteDatabase db = getWritableDatabase();
    private final JsonParser jsonParser = new JsonParser();
    private final AtomicBoolean lock = new AtomicBoolean(false);

    static String databaseName(Context context) {
        String processName = ProcessName.getAndroidProcessName(context);
        if (TextUtils.isEmpty(processName)) {
            return DATABASE_NAME;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(processName);
        stringBuilder.append(FileUtils.HIDDEN_PREFIX);
        stringBuilder.append(DATABASE_NAME);
        return stringBuilder.toString();
    }

    public PureeSQLiteStorage(Context context) {
        super(context, databaseName(context), null, 1);
    }

    public void insert(String type, JsonObject jsonLog) {
        ContentValues contentValues = new ContentValues();
        contentValues.put(COLUMN_NAME_TYPE, type);
        contentValues.put(COLUMN_NAME_LOG, jsonLog.toString());
        this.db.insert(TABLE_NAME, null, contentValues);
    }

    public Records select(String type, int logsPerRequest) {
        String query = new StringBuilder();
        query.append("SELECT * FROM logs WHERE type = ? ORDER BY id ASC LIMIT ");
        query.append(logsPerRequest);
        query = query.toString();
        Cursor cursor = this.db.rawQuery(query, new String[]{type});
        try {
            Records recordsFromCursor = recordsFromCursor(cursor);
            return recordsFromCursor;
        } finally {
            cursor.close();
        }
    }

    public Records selectAll() {
        Cursor cursor = this.db.rawQuery("SELECT * FROM logs ORDER BY id ASC", null);
        try {
            Records recordsFromCursor = recordsFromCursor(cursor);
            return recordsFromCursor;
        } finally {
            cursor.close();
        }
    }

    private Records recordsFromCursor(Cursor cursor) {
        Records records = new Records();
        while (cursor.moveToNext()) {
            records.add(buildRecord(cursor));
        }
        return records;
    }

    private Record buildRecord(Cursor cursor) {
        return new Record(cursor.getInt(0), cursor.getString(1), parseJsonString(cursor.getString(2)));
    }

    public int count() {
        Cursor cursor = this.db.rawQuery("SELECT COUNT(*) FROM logs", null);
        int count = 0;
        if (cursor.moveToNext()) {
            count = cursor.getInt(0);
        }
        cursor.close();
        return count;
    }

    private JsonObject parseJsonString(String jsonString) {
        return (JsonObject) this.jsonParser.parse(jsonString);
    }

    public void delete(Records records) {
        String query = new StringBuilder();
        query.append("DELETE FROM logs WHERE id IN (");
        query.append(records.getIdsAsString());
        query.append(")");
        this.db.execSQL(query.toString());
    }

    public void truncateBufferedLogs(int maxRecords) {
        int recordSize = count();
        if (recordSize > maxRecords) {
            String query = new StringBuilder();
            query.append("DELETE FROM logs WHERE id IN ( SELECT id FROM logs ORDER BY id ASC LIMIT ");
            query.append(String.valueOf(recordSize - maxRecords));
            query.append(")");
            this.db.execSQL(query.toString());
        }
    }

    public void clear() {
        this.db.execSQL("DELETE FROM logs");
    }

    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,log TEXT)");
    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("unexpected onUpgrade(db, ");
        stringBuilder.append(oldVersion);
        stringBuilder.append(", ");
        stringBuilder.append(newVersion);
        stringBuilder.append(")");
        Log.e("PureeDbHelper", stringBuilder.toString());
    }

    protected void finalize() throws Throwable {
        this.db.close();
        super.finalize();
    }

    public boolean lock() {
        return this.lock.compareAndSet(false, true);
    }

    public void unlock() {
        this.lock.set(false);
    }
}
