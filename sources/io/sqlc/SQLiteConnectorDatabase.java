package io.sqlc;

import android.util.Log;
import com.outsystems.plugins.oslogger.engines.puree.OSPureeLog;
import io.liteglue.SQLiteConnection;
import io.liteglue.SQLiteConnector;
import io.liteglue.SQLiteStatement;
import java.io.File;
import java.sql.SQLException;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

class SQLiteConnectorDatabase extends SQLiteAndroidDatabase {
    static SQLiteConnector connector = new SQLiteConnector();
    SQLiteConnection mydb;

    SQLiteConnectorDatabase() {
    }

    void open(File dbFile) throws Exception {
        this.mydb = connector.newSQLiteConnection(dbFile.getAbsolutePath(), 6);
    }

    void closeDatabaseNow() {
        try {
            if (this.mydb != null) {
                this.mydb.dispose();
            }
        } catch (Exception e) {
            Log.e(SQLitePlugin.class.getSimpleName(), "couldn't close database, ignoring", e);
        }
    }

    void bugWorkaround() {
    }

    void executeSqlBatch(String[] queryarr, JSONArray[] jsonparams, CallbackContext cbc) {
        SQLException ex;
        int sqliteErrorCode;
        StringBuilder stringBuilder;
        JSONObject r;
        JSONObject er;
        JSONException ex2;
        String[] strArr = queryarr;
        CallbackContext callbackContext = cbc;
        if (this.mydb == null) {
            callbackContext.error("database has been closed");
            return;
        }
        int len = strArr.length;
        JSONArray batchResults = new JSONArray();
        int i = 0;
        while (i < len) {
            SQLiteConnectorDatabase sQLiteConnectorDatabase;
            JSONObject queryResult = null;
            String errorMessage = "unknown";
            int code = 0;
            int rowsAffectedCompat;
            boolean needRowsAffectedCompat;
            String errorMessage2;
            int sqliteErrorCode2;
            try {
                String query = strArr[i];
                long lastTotal = (long) sQLiteConnectorDatabase.mydb.getTotalChanges();
                queryResult = sQLiteConnectorDatabase.executeSQLiteStatement(query, jsonparams[i], callbackContext);
                rowsAffectedCompat = 0;
                needRowsAffectedCompat = false;
                errorMessage2 = errorMessage;
                sqliteErrorCode2 = -1;
                long rowsAffected = ((long) sQLiteConnectorDatabase.mydb.getTotalChanges()) - lastTotal;
                try {
                    queryResult.put("rowsAffected", rowsAffected);
                    if (rowsAffected > 0) {
                        long insertId = sQLiteConnectorDatabase.mydb.getLastInsertRowid();
                        if (insertId > 0) {
                            queryResult.put("insertId", insertId);
                        }
                    }
                    errorMessage = errorMessage2;
                } catch (SQLException e) {
                    ex = e;
                    ex.printStackTrace();
                    sqliteErrorCode = ex.getErrorCode();
                    errorMessage = ex.getMessage();
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("SQLitePlugin.executeSql[Batch](): SQL Error code = ");
                    stringBuilder.append(sqliteErrorCode);
                    stringBuilder.append(" message = ");
                    stringBuilder.append(errorMessage);
                    Log.v("executeSqlBatch", stringBuilder.toString());
                    if (sqliteErrorCode != 1) {
                        code = 5;
                    } else if (sqliteErrorCode != 13) {
                        code = 4;
                    } else if (sqliteErrorCode != 19) {
                        code = 6;
                    }
                    sqliteErrorCode2 = sqliteErrorCode;
                    if (queryResult != null) {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, errorMessage);
                        er.put("code", code);
                        r.put("result", er);
                        batchResults.put(r);
                    } else {
                        try {
                            r = new JSONObject();
                            r.put("type", "success");
                            r.put("result", queryResult);
                            batchResults.put(r);
                        } catch (JSONException ex22) {
                            ex22.printStackTrace();
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("SQLitePlugin.executeSql[Batch](): Error=");
                            stringBuilder.append(ex22.getMessage());
                            Log.e("executeSqlBatch", stringBuilder.toString());
                        }
                    }
                    i++;
                    sQLiteConnectorDatabase = this;
                    strArr = queryarr;
                } catch (JSONException e2) {
                    ex22 = e2;
                    ex22.printStackTrace();
                    errorMessage = ex22.getMessage();
                    code = 0;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("SQLitePlugin.executeSql[Batch](): UNEXPECTED JSON Error=");
                    stringBuilder.append(errorMessage);
                    Log.e("executeSqlBatch", stringBuilder.toString());
                    if (queryResult != null) {
                        r = new JSONObject();
                        r.put("type", "success");
                        r.put("result", queryResult);
                        batchResults.put(r);
                    } else {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, errorMessage);
                        er.put("code", code);
                        r.put("result", er);
                        batchResults.put(r);
                    }
                    i++;
                    sQLiteConnectorDatabase = this;
                    strArr = queryarr;
                }
            } catch (SQLException e3) {
                ex = e3;
                rowsAffectedCompat = 0;
                needRowsAffectedCompat = false;
                errorMessage2 = errorMessage;
                sqliteErrorCode2 = -1;
                ex.printStackTrace();
                sqliteErrorCode = ex.getErrorCode();
                errorMessage = ex.getMessage();
                stringBuilder = new StringBuilder();
                stringBuilder.append("SQLitePlugin.executeSql[Batch](): SQL Error code = ");
                stringBuilder.append(sqliteErrorCode);
                stringBuilder.append(" message = ");
                stringBuilder.append(errorMessage);
                Log.v("executeSqlBatch", stringBuilder.toString());
                if (sqliteErrorCode != 1) {
                    code = 5;
                } else if (sqliteErrorCode != 13) {
                    code = 4;
                } else if (sqliteErrorCode != 19) {
                    code = 6;
                }
                sqliteErrorCode2 = sqliteErrorCode;
                if (queryResult != null) {
                    r = new JSONObject();
                    r.put("type", "error");
                    er = new JSONObject();
                    er.put(OSPureeLog.FIELD_MESSAGE, errorMessage);
                    er.put("code", code);
                    r.put("result", er);
                    batchResults.put(r);
                } else {
                    r = new JSONObject();
                    r.put("type", "success");
                    r.put("result", queryResult);
                    batchResults.put(r);
                }
                i++;
                sQLiteConnectorDatabase = this;
                strArr = queryarr;
            } catch (JSONException e4) {
                ex22 = e4;
                rowsAffectedCompat = 0;
                needRowsAffectedCompat = false;
                errorMessage2 = errorMessage;
                sqliteErrorCode2 = -1;
                ex22.printStackTrace();
                errorMessage = ex22.getMessage();
                code = 0;
                stringBuilder = new StringBuilder();
                stringBuilder.append("SQLitePlugin.executeSql[Batch](): UNEXPECTED JSON Error=");
                stringBuilder.append(errorMessage);
                Log.e("executeSqlBatch", stringBuilder.toString());
                if (queryResult != null) {
                    r = new JSONObject();
                    r.put("type", "success");
                    r.put("result", queryResult);
                    batchResults.put(r);
                } else {
                    r = new JSONObject();
                    r.put("type", "error");
                    er = new JSONObject();
                    er.put(OSPureeLog.FIELD_MESSAGE, errorMessage);
                    er.put("code", code);
                    r.put("result", er);
                    batchResults.put(r);
                }
                i++;
                sQLiteConnectorDatabase = this;
                strArr = queryarr;
            }
            if (queryResult != null) {
                r = new JSONObject();
                r.put("type", "success");
                r.put("result", queryResult);
                batchResults.put(r);
            } else {
                r = new JSONObject();
                r.put("type", "error");
                er = new JSONObject();
                er.put(OSPureeLog.FIELD_MESSAGE, errorMessage);
                er.put("code", code);
                r.put("result", er);
                batchResults.put(r);
            }
            i++;
            sQLiteConnectorDatabase = this;
            strArr = queryarr;
        }
        callbackContext.success(batchResults);
    }

    private JSONObject executeSQLiteStatement(String query, JSONArray paramsAsJson, CallbackContext cbc) throws JSONException, SQLException {
        StringBuilder stringBuilder;
        JSONObject rowsResult = new JSONObject();
        SQLiteStatement myStatement = this.mydb.prepareStatement(query);
        String key;
        try {
            String[] params = new String[paramsAsJson.length()];
            for (int i = 0; i < paramsAsJson.length(); i++) {
                if (paramsAsJson.isNull(i)) {
                    myStatement.bindNull(i + 1);
                } else {
                    Object p = paramsAsJson.get(i);
                    if (!(p instanceof Float)) {
                        if (!(p instanceof Double)) {
                            if (p instanceof Number) {
                                myStatement.bindLong(i + 1, paramsAsJson.getLong(i));
                            } else {
                                myStatement.bindTextNativeString(i + 1, paramsAsJson.getString(i));
                            }
                        }
                    }
                    myStatement.bindDouble(i + 1, paramsAsJson.getDouble(i));
                }
            }
            if (myStatement.step()) {
                JSONArray rowsArrayResult = new JSONArray();
                key = "";
                int colCount = myStatement.getColumnCount();
                while (true) {
                    JSONObject row = new JSONObject();
                    int i2 = 0;
                    while (i2 < colCount) {
                        try {
                            key = myStatement.getColumnName(i2);
                            int columnType = myStatement.getColumnType(i2);
                            if (columnType != 5) {
                                switch (columnType) {
                                    case 1:
                                        row.put(key, myStatement.getColumnLong(i2));
                                        break;
                                    case 2:
                                        row.put(key, myStatement.getColumnDouble(i2));
                                        break;
                                    default:
                                        row.put(key, myStatement.getColumnTextNativeString(i2));
                                        break;
                                }
                            }
                            row.put(key, JSONObject.NULL);
                            i2++;
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    rowsArrayResult.put(row);
                    if (!myStatement.step()) {
                        try {
                            rowsResult.put("rows", rowsArrayResult);
                        } catch (JSONException e2) {
                            e2.printStackTrace();
                        }
                    }
                }
            }
            myStatement.dispose();
            return rowsResult;
        } catch (SQLException ex) {
            ex.printStackTrace();
            key = ex.getMessage();
            stringBuilder = new StringBuilder();
            stringBuilder.append("SQLitePlugin.executeSql[Batch](): Error=");
            stringBuilder.append(key);
            Log.v("executeSqlBatch", stringBuilder.toString());
            myStatement.dispose();
            throw ex;
        } catch (JSONException ex2) {
            ex2.printStackTrace();
            key = ex2.getMessage();
            stringBuilder = new StringBuilder();
            stringBuilder.append("SQLitePlugin.executeSql[Batch](): Error=");
            stringBuilder.append(key);
            Log.v("executeSqlBatch", stringBuilder.toString());
            myStatement.dispose();
            throw ex2;
        }
    }
}
