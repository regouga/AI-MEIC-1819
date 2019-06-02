package io.sqlc;

import android.database.Cursor;
import android.database.sqlite.SQLiteConstraintException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteStatement;
import android.os.Build.VERSION;
import android.util.Log;
import com.outsystems.plugins.oslogger.engines.puree.OSPureeLog;
import java.io.File;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

class SQLiteAndroidDatabase {
    private static final Pattern DELETE_TABLE_NAME = Pattern.compile("^\\s*DELETE\\s+FROM\\s+(\\S+)", 2);
    private static final Pattern FIRST_WORD = Pattern.compile("^[\\s;]*([^\\s;]+)", 2);
    private static final Pattern UPDATE_TABLE_NAME = Pattern.compile("^\\s*UPDATE\\s+(\\S+)", 2);
    private static final Pattern WHERE_CLAUSE = Pattern.compile("\\s+WHERE\\s+(.+)$", 2);
    private static final boolean isPostHoneycomb = (VERSION.SDK_INT >= 11);
    File dbFile;
    boolean isTransactionActive = false;
    SQLiteDatabase mydb;

    enum QueryType {
        update,
        insert,
        delete,
        select,
        begin,
        commit,
        rollback,
        other
    }

    SQLiteAndroidDatabase() {
    }

    void open(File dbfile) throws Exception {
        if (isPostHoneycomb) {
            this.dbFile = dbfile;
            this.mydb = SQLiteDatabase.openOrCreateDatabase(dbfile, null);
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("INTERNAL PLUGIN ERROR: deprecated android.os.Build.VERSION not supported: ");
        stringBuilder.append(VERSION.SDK_INT);
        Log.v("SQLiteAndroidDatabase.open", stringBuilder.toString());
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append("INTERNAL PLUGIN ERROR: deprecated android.os.Build.VERSION not supported: ");
        stringBuilder2.append(VERSION.SDK_INT);
        throw new RuntimeException(stringBuilder2.toString());
    }

    void closeDatabaseNow() {
        SQLiteDatabase sQLiteDatabase = this.mydb;
        if (sQLiteDatabase != null) {
            if (this.isTransactionActive) {
                try {
                    sQLiteDatabase.endTransaction();
                } catch (Exception ex) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("INTERNAL PLUGIN ERROR IGNORED: Not able to end active transaction before closing database: ");
                    stringBuilder.append(ex.getMessage());
                    Log.v("closeDatabaseNow", stringBuilder.toString());
                    ex.printStackTrace();
                }
                this.isTransactionActive = false;
            }
            this.mydb.close();
            this.mydb = null;
        }
    }

    void bugWorkaround() throws Exception {
        closeDatabaseNow();
        open(this.dbFile);
    }

    void executeSqlBatch(String[] queryarr, JSONArray[] jsonparamsArr, CallbackContext cbc) {
        if (this.mydb == null) {
            cbc.error("INTERNAL PLUGIN ERROR: database not open");
            return;
        }
        int len = queryarr.length;
        JSONArray batchResults = new JSONArray();
        for (int i = 0; i < len; i++) {
            executeSqlBatchStatement(queryarr[i], jsonparamsArr[i], batchResults);
        }
        cbc.success(batchResults);
    }

    private void executeSqlBatchStatement(String query, JSONArray json_params, JSONArray batchResults) {
        SQLiteConstraintException ex;
        StringBuilder stringBuilder;
        StringBuilder stringBuilder2;
        SQLiteException ex2;
        StringBuilder stringBuilder3;
        StringBuilder stringBuilder4;
        int rowsAffectedCompat;
        boolean needRawQuery;
        Exception ex3;
        String str = query;
        JSONArray jSONArray = json_params;
        JSONArray jSONArray2 = batchResults;
        if (this.mydb != null) {
            JSONObject r;
            JSONObject er;
            int rowsAffectedCompat2 = 0;
            boolean needRowsAffectedCompat = false;
            JSONObject jSONObject = null;
            String str2 = "unknown";
            int i = 0;
            boolean z = true;
            try {
                QueryType queryType = getQueryType(query);
                if (queryType != QueryType.update) {
                    if (queryType != QueryType.delete) {
                        if (queryType != QueryType.insert && jSONArray != null) {
                            SQLiteStatement myStatement;
                            z = false;
                            SQLiteStatement myStatement2 = r1.mydb.compileStatement(str);
                            bindArgsToStatement(myStatement2, jSONArray);
                            try {
                                long insertId = myStatement2.executeInsert();
                                long insertId2;
                                try {
                                    jSONObject = new JSONObject();
                                    myStatement = myStatement2;
                                    insertId2 = insertId;
                                    if (insertId2 != -1) {
                                        try {
                                            jSONObject.put("insertId", insertId2);
                                            jSONObject.put("rowsAffected", 1);
                                        } catch (SQLiteConstraintException e) {
                                            ex = e;
                                            insertId = insertId2;
                                            ex.printStackTrace();
                                            stringBuilder = new StringBuilder();
                                            stringBuilder.append("constraint failure: ");
                                            stringBuilder.append(ex.getMessage());
                                            str2 = stringBuilder.toString();
                                            i = 6;
                                            stringBuilder2 = new StringBuilder();
                                            stringBuilder2.append("SQLiteDatabase.executeInsert(): Error=");
                                            stringBuilder2.append(str2);
                                            Log.v("executeSqlBatch", stringBuilder2.toString());
                                            myStatement.close();
                                            if (queryType == QueryType.begin) {
                                                z = false;
                                                try {
                                                    r1.mydb.beginTransaction();
                                                    r1.isTransactionActive = true;
                                                    jSONObject = new JSONObject();
                                                    jSONObject.put("rowsAffected", 0);
                                                } catch (SQLiteException ex22) {
                                                    ex22.printStackTrace();
                                                    str2 = ex22.getMessage();
                                                    stringBuilder2 = new StringBuilder();
                                                    stringBuilder2.append("SQLiteDatabase.beginTransaction(): Error=");
                                                    stringBuilder2.append(str2);
                                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                                }
                                            }
                                            if (queryType == QueryType.commit) {
                                                z = false;
                                                try {
                                                    r1.mydb.setTransactionSuccessful();
                                                    r1.mydb.endTransaction();
                                                    r1.isTransactionActive = false;
                                                    jSONObject = new JSONObject();
                                                    jSONObject.put("rowsAffected", 0);
                                                } catch (SQLiteException ex222) {
                                                    ex222.printStackTrace();
                                                    str2 = ex222.getMessage();
                                                    stringBuilder2 = new StringBuilder();
                                                    stringBuilder2.append("SQLiteDatabase.setTransactionSuccessful/endTransaction(): Error=");
                                                    stringBuilder2.append(str2);
                                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                                }
                                            }
                                            if (queryType == QueryType.rollback) {
                                                z = false;
                                                try {
                                                    r1.mydb.endTransaction();
                                                    r1.isTransactionActive = false;
                                                    jSONObject = new JSONObject();
                                                    jSONObject.put("rowsAffected", 0);
                                                } catch (SQLiteException ex2222) {
                                                    ex2222.printStackTrace();
                                                    str2 = ex2222.getMessage();
                                                    stringBuilder2 = new StringBuilder();
                                                    stringBuilder2.append("SQLiteDatabase.endTransaction(): Error=");
                                                    stringBuilder2.append(str2);
                                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                                }
                                            }
                                            if (z) {
                                                try {
                                                    jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                                } catch (SQLiteConstraintException ex4) {
                                                    ex4.printStackTrace();
                                                    stringBuilder = new StringBuilder();
                                                    stringBuilder.append("constraint failure: ");
                                                    stringBuilder.append(ex4.getMessage());
                                                    str2 = stringBuilder.toString();
                                                    i = 6;
                                                    stringBuilder2 = new StringBuilder();
                                                    stringBuilder2.append("Raw query error=");
                                                    stringBuilder2.append(str2);
                                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                                } catch (SQLiteException ex22222) {
                                                    ex22222.printStackTrace();
                                                    str2 = ex22222.getMessage();
                                                    stringBuilder2 = new StringBuilder();
                                                    stringBuilder2.append("Raw query error=");
                                                    stringBuilder2.append(str2);
                                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                                }
                                                if (needRowsAffectedCompat) {
                                                    jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                                }
                                            }
                                            if (jSONObject != null) {
                                                r = new JSONObject();
                                                r.put("type", "error");
                                                er = new JSONObject();
                                                er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                                er.put("code", i);
                                                r.put("result", er);
                                                jSONArray2.put(r);
                                            } else {
                                                try {
                                                    r = new JSONObject();
                                                    r.put("type", "success");
                                                    r.put("result", jSONObject);
                                                    jSONArray2.put(r);
                                                } catch (JSONException ex5) {
                                                    ex5.printStackTrace();
                                                    stringBuilder3 = new StringBuilder();
                                                    stringBuilder3.append("SQLiteAndroidDatabase.executeSql[Batch](): Error=");
                                                    stringBuilder3.append(ex5.getMessage());
                                                    Log.v("executeSqlBatch", stringBuilder3.toString());
                                                }
                                            }
                                        } catch (SQLiteException e2) {
                                            ex22222 = e2;
                                            insertId = insertId2;
                                            ex22222.printStackTrace();
                                            str2 = ex22222.getMessage();
                                            stringBuilder4 = new StringBuilder();
                                            stringBuilder4.append("SQLiteDatabase.executeInsert(): Error=");
                                            stringBuilder4.append(str2);
                                            Log.v("executeSqlBatch", stringBuilder4.toString());
                                            myStatement.close();
                                            if (queryType == QueryType.begin) {
                                                z = false;
                                                r1.mydb.beginTransaction();
                                                r1.isTransactionActive = true;
                                                jSONObject = new JSONObject();
                                                jSONObject.put("rowsAffected", 0);
                                            }
                                            if (queryType == QueryType.commit) {
                                                z = false;
                                                r1.mydb.setTransactionSuccessful();
                                                r1.mydb.endTransaction();
                                                r1.isTransactionActive = false;
                                                jSONObject = new JSONObject();
                                                jSONObject.put("rowsAffected", 0);
                                            }
                                            if (queryType == QueryType.rollback) {
                                                z = false;
                                                r1.mydb.endTransaction();
                                                r1.isTransactionActive = false;
                                                jSONObject = new JSONObject();
                                                jSONObject.put("rowsAffected", 0);
                                            }
                                            if (z) {
                                                jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                                if (needRowsAffectedCompat) {
                                                    jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                                }
                                            }
                                            if (jSONObject != null) {
                                                r = new JSONObject();
                                                r.put("type", "success");
                                                r.put("result", jSONObject);
                                                jSONArray2.put(r);
                                            } else {
                                                r = new JSONObject();
                                                r.put("type", "error");
                                                er = new JSONObject();
                                                er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                                er.put("code", i);
                                                r.put("result", er);
                                                jSONArray2.put(r);
                                            }
                                        }
                                    }
                                    jSONObject.put("rowsAffected", 0);
                                    insertId = insertId2;
                                } catch (SQLiteConstraintException e3) {
                                    ex4 = e3;
                                    myStatement = myStatement2;
                                    insertId2 = insertId;
                                    ex4.printStackTrace();
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("constraint failure: ");
                                    stringBuilder.append(ex4.getMessage());
                                    str2 = stringBuilder.toString();
                                    i = 6;
                                    stringBuilder2 = new StringBuilder();
                                    stringBuilder2.append("SQLiteDatabase.executeInsert(): Error=");
                                    stringBuilder2.append(str2);
                                    Log.v("executeSqlBatch", stringBuilder2.toString());
                                    myStatement.close();
                                    if (queryType == QueryType.begin) {
                                        z = false;
                                        r1.mydb.beginTransaction();
                                        r1.isTransactionActive = true;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (queryType == QueryType.commit) {
                                        z = false;
                                        r1.mydb.setTransactionSuccessful();
                                        r1.mydb.endTransaction();
                                        r1.isTransactionActive = false;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (queryType == QueryType.rollback) {
                                        z = false;
                                        r1.mydb.endTransaction();
                                        r1.isTransactionActive = false;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (z) {
                                        jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                        if (needRowsAffectedCompat) {
                                            jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                        }
                                    }
                                    if (jSONObject != null) {
                                        r = new JSONObject();
                                        r.put("type", "success");
                                        r.put("result", jSONObject);
                                        jSONArray2.put(r);
                                    } else {
                                        r = new JSONObject();
                                        r.put("type", "error");
                                        er = new JSONObject();
                                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                        er.put("code", i);
                                        r.put("result", er);
                                        jSONArray2.put(r);
                                    }
                                } catch (SQLiteException e4) {
                                    ex22222 = e4;
                                    myStatement = myStatement2;
                                    insertId2 = insertId;
                                    ex22222.printStackTrace();
                                    str2 = ex22222.getMessage();
                                    stringBuilder4 = new StringBuilder();
                                    stringBuilder4.append("SQLiteDatabase.executeInsert(): Error=");
                                    stringBuilder4.append(str2);
                                    Log.v("executeSqlBatch", stringBuilder4.toString());
                                    myStatement.close();
                                    if (queryType == QueryType.begin) {
                                        z = false;
                                        r1.mydb.beginTransaction();
                                        r1.isTransactionActive = true;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (queryType == QueryType.commit) {
                                        z = false;
                                        r1.mydb.setTransactionSuccessful();
                                        r1.mydb.endTransaction();
                                        r1.isTransactionActive = false;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (queryType == QueryType.rollback) {
                                        z = false;
                                        r1.mydb.endTransaction();
                                        r1.isTransactionActive = false;
                                        jSONObject = new JSONObject();
                                        jSONObject.put("rowsAffected", 0);
                                    }
                                    if (z) {
                                        jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                        if (needRowsAffectedCompat) {
                                            jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                        }
                                    }
                                    if (jSONObject != null) {
                                        r = new JSONObject();
                                        r.put("type", "error");
                                        er = new JSONObject();
                                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                        er.put("code", i);
                                        r.put("result", er);
                                        jSONArray2.put(r);
                                    } else {
                                        r = new JSONObject();
                                        r.put("type", "success");
                                        r.put("result", jSONObject);
                                        jSONArray2.put(r);
                                    }
                                }
                            } catch (SQLiteConstraintException e5) {
                                ex4 = e5;
                                myStatement = myStatement2;
                                ex4.printStackTrace();
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("constraint failure: ");
                                stringBuilder.append(ex4.getMessage());
                                str2 = stringBuilder.toString();
                                i = 6;
                                stringBuilder2 = new StringBuilder();
                                stringBuilder2.append("SQLiteDatabase.executeInsert(): Error=");
                                stringBuilder2.append(str2);
                                Log.v("executeSqlBatch", stringBuilder2.toString());
                                myStatement.close();
                                if (queryType == QueryType.begin) {
                                    z = false;
                                    r1.mydb.beginTransaction();
                                    r1.isTransactionActive = true;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (queryType == QueryType.commit) {
                                    z = false;
                                    r1.mydb.setTransactionSuccessful();
                                    r1.mydb.endTransaction();
                                    r1.isTransactionActive = false;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (queryType == QueryType.rollback) {
                                    z = false;
                                    r1.mydb.endTransaction();
                                    r1.isTransactionActive = false;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (z) {
                                    jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                    if (needRowsAffectedCompat) {
                                        jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                    }
                                }
                                if (jSONObject != null) {
                                    r = new JSONObject();
                                    r.put("type", "error");
                                    er = new JSONObject();
                                    er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                    er.put("code", i);
                                    r.put("result", er);
                                    jSONArray2.put(r);
                                } else {
                                    r = new JSONObject();
                                    r.put("type", "success");
                                    r.put("result", jSONObject);
                                    jSONArray2.put(r);
                                }
                            } catch (SQLiteException e6) {
                                ex22222 = e6;
                                myStatement = myStatement2;
                                ex22222.printStackTrace();
                                str2 = ex22222.getMessage();
                                stringBuilder4 = new StringBuilder();
                                stringBuilder4.append("SQLiteDatabase.executeInsert(): Error=");
                                stringBuilder4.append(str2);
                                Log.v("executeSqlBatch", stringBuilder4.toString());
                                myStatement.close();
                                if (queryType == QueryType.begin) {
                                    z = false;
                                    r1.mydb.beginTransaction();
                                    r1.isTransactionActive = true;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (queryType == QueryType.commit) {
                                    z = false;
                                    r1.mydb.setTransactionSuccessful();
                                    r1.mydb.endTransaction();
                                    r1.isTransactionActive = false;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (queryType == QueryType.rollback) {
                                    z = false;
                                    r1.mydb.endTransaction();
                                    r1.isTransactionActive = false;
                                    jSONObject = new JSONObject();
                                    jSONObject.put("rowsAffected", 0);
                                }
                                if (z) {
                                    jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                                    if (needRowsAffectedCompat) {
                                        jSONObject.put("rowsAffected", rowsAffectedCompat2);
                                    }
                                }
                                if (jSONObject != null) {
                                    r = new JSONObject();
                                    r.put("type", "success");
                                    r.put("result", jSONObject);
                                    jSONArray2.put(r);
                                } else {
                                    r = new JSONObject();
                                    r.put("type", "error");
                                    er = new JSONObject();
                                    er.put(OSPureeLog.FIELD_MESSAGE, str2);
                                    er.put("code", i);
                                    r.put("result", er);
                                    jSONArray2.put(r);
                                }
                            }
                            myStatement.close();
                        }
                        if (queryType == QueryType.begin) {
                            z = false;
                            r1.mydb.beginTransaction();
                            r1.isTransactionActive = true;
                            jSONObject = new JSONObject();
                            jSONObject.put("rowsAffected", 0);
                        }
                        if (queryType == QueryType.commit) {
                            z = false;
                            r1.mydb.setTransactionSuccessful();
                            r1.mydb.endTransaction();
                            r1.isTransactionActive = false;
                            jSONObject = new JSONObject();
                            jSONObject.put("rowsAffected", 0);
                        }
                        if (queryType == QueryType.rollback) {
                            z = false;
                            r1.mydb.endTransaction();
                            r1.isTransactionActive = false;
                            jSONObject = new JSONObject();
                            jSONObject.put("rowsAffected", 0);
                        }
                        if (z) {
                            jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                            if (needRowsAffectedCompat) {
                                jSONObject.put("rowsAffected", rowsAffectedCompat2);
                            }
                        }
                        if (jSONObject != null) {
                            r = new JSONObject();
                            r.put("type", "success");
                            r.put("result", jSONObject);
                            jSONArray2.put(r);
                        } else {
                            r = new JSONObject();
                            r.put("type", "error");
                            er = new JSONObject();
                            er.put(OSPureeLog.FIELD_MESSAGE, str2);
                            er.put("code", i);
                            r.put("result", er);
                            jSONArray2.put(r);
                        }
                    }
                }
                SQLiteStatement myStatement3 = r1.mydb.compileStatement(str);
                if (jSONArray != null) {
                    bindArgsToStatement(myStatement3, jSONArray);
                }
                int rowsAffected = -1;
                try {
                    rowsAffected = myStatement3.executeUpdateDelete();
                    z = false;
                    rowsAffectedCompat = 0;
                } catch (SQLiteConstraintException ex42) {
                    rowsAffectedCompat = 0;
                    ex42 = ex42;
                    ex42.printStackTrace();
                    StringBuilder stringBuilder5 = new StringBuilder();
                    stringBuilder5.append("constraint failure: ");
                    stringBuilder5.append(ex42.getMessage());
                    str2 = stringBuilder5.toString();
                    i = 6;
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("SQLiteStatement.executeUpdateDelete(): Error=");
                    stringBuilder4.append(str2);
                    Log.v("executeSqlBatch", stringBuilder4.toString());
                    needRawQuery = false;
                    z = needRawQuery;
                    myStatement3.close();
                    if (rowsAffected == -1) {
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", rowsAffected);
                    }
                    if (z) {
                        rowsAffectedCompat2 = rowsAffectedCompat;
                    } else {
                        rowsAffectedCompat2 = countRowsAffectedCompat(queryType, str, jSONArray, r1.mydb);
                        needRowsAffectedCompat = true;
                    }
                    if (queryType != QueryType.insert) {
                    }
                    if (queryType == QueryType.begin) {
                        z = false;
                        r1.mydb.beginTransaction();
                        r1.isTransactionActive = true;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.commit) {
                        z = false;
                        r1.mydb.setTransactionSuccessful();
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.rollback) {
                        z = false;
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (z) {
                        jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                        if (needRowsAffectedCompat) {
                            jSONObject.put("rowsAffected", rowsAffectedCompat2);
                        }
                    }
                    if (jSONObject != null) {
                        r = new JSONObject();
                        r.put("type", "success");
                        r.put("result", jSONObject);
                        jSONArray2.put(r);
                    } else {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                        er.put("code", i);
                        r.put("result", er);
                        jSONArray2.put(r);
                    }
                } catch (SQLiteException ex222222) {
                    rowsAffectedCompat = 0;
                    ex222222 = ex222222;
                    ex222222.printStackTrace();
                    str2 = ex222222.getMessage();
                    stringBuilder4 = new StringBuilder();
                    stringBuilder4.append("SQLiteStatement.executeUpdateDelete(): Error=");
                    stringBuilder4.append(str2);
                    Log.v("executeSqlBatch", stringBuilder4.toString());
                    needRawQuery = false;
                    z = needRawQuery;
                    myStatement3.close();
                    if (rowsAffected == -1) {
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", rowsAffected);
                    }
                    if (z) {
                        rowsAffectedCompat2 = countRowsAffectedCompat(queryType, str, jSONArray, r1.mydb);
                        needRowsAffectedCompat = true;
                    } else {
                        rowsAffectedCompat2 = rowsAffectedCompat;
                    }
                    if (queryType != QueryType.insert) {
                    }
                    if (queryType == QueryType.begin) {
                        z = false;
                        r1.mydb.beginTransaction();
                        r1.isTransactionActive = true;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.commit) {
                        z = false;
                        r1.mydb.setTransactionSuccessful();
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.rollback) {
                        z = false;
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (z) {
                        jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                        if (needRowsAffectedCompat) {
                            jSONObject.put("rowsAffected", rowsAffectedCompat2);
                        }
                    }
                    if (jSONObject != null) {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                        er.put("code", i);
                        r.put("result", er);
                        jSONArray2.put(r);
                    } else {
                        r = new JSONObject();
                        r.put("type", "success");
                        r.put("result", jSONObject);
                        jSONArray2.put(r);
                    }
                } catch (Exception ex32) {
                    ex32 = ex32;
                    ex32.printStackTrace();
                    String str3 = "SQLiteAndroidDatabase.executeSqlBatchStatement";
                    StringBuilder stringBuilder6 = new StringBuilder();
                    rowsAffectedCompat = 0;
                    stringBuilder6.append("INTERNAL PLUGIN ERROR: could not do myStatement.executeUpdateDelete(): ");
                    stringBuilder6.append(ex32.getMessage());
                    Log.v(str3, stringBuilder6.toString());
                    throw ex32;
                } catch (Exception e7) {
                    ex32 = e7;
                    rowsAffectedCompat2 = rowsAffectedCompat;
                    ex32.printStackTrace();
                    str2 = ex32.getMessage();
                    stringBuilder3 = new StringBuilder();
                    stringBuilder3.append("SQLiteAndroidDatabase.executeSql[Batch](): Error=");
                    stringBuilder3.append(str2);
                    Log.v("executeSqlBatch", stringBuilder3.toString());
                    if (jSONObject != null) {
                        r = new JSONObject();
                        r.put("type", "success");
                        r.put("result", jSONObject);
                        jSONArray2.put(r);
                    } else {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                        er.put("code", i);
                        r.put("result", er);
                        jSONArray2.put(r);
                    }
                }
                myStatement3.close();
                if (rowsAffected == -1) {
                    jSONObject = new JSONObject();
                    jSONObject.put("rowsAffected", rowsAffected);
                }
                if (z) {
                    rowsAffectedCompat2 = countRowsAffectedCompat(queryType, str, jSONArray, r1.mydb);
                    needRowsAffectedCompat = true;
                } else {
                    rowsAffectedCompat2 = rowsAffectedCompat;
                }
                try {
                    if (queryType != QueryType.insert) {
                    }
                    if (queryType == QueryType.begin) {
                        z = false;
                        r1.mydb.beginTransaction();
                        r1.isTransactionActive = true;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.commit) {
                        z = false;
                        r1.mydb.setTransactionSuccessful();
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (queryType == QueryType.rollback) {
                        z = false;
                        r1.mydb.endTransaction();
                        r1.isTransactionActive = false;
                        jSONObject = new JSONObject();
                        jSONObject.put("rowsAffected", 0);
                    }
                    if (z) {
                        jSONObject = executeSqlStatementQuery(r1.mydb, str, jSONArray);
                        if (needRowsAffectedCompat) {
                            jSONObject.put("rowsAffected", rowsAffectedCompat2);
                        }
                    }
                } catch (Exception e8) {
                    ex32 = e8;
                    ex32.printStackTrace();
                    str2 = ex32.getMessage();
                    stringBuilder3 = new StringBuilder();
                    stringBuilder3.append("SQLiteAndroidDatabase.executeSql[Batch](): Error=");
                    stringBuilder3.append(str2);
                    Log.v("executeSqlBatch", stringBuilder3.toString());
                    if (jSONObject != null) {
                        r = new JSONObject();
                        r.put("type", "success");
                        r.put("result", jSONObject);
                        jSONArray2.put(r);
                    } else {
                        r = new JSONObject();
                        r.put("type", "error");
                        er = new JSONObject();
                        er.put(OSPureeLog.FIELD_MESSAGE, str2);
                        er.put("code", i);
                        r.put("result", er);
                        jSONArray2.put(r);
                    }
                }
            } catch (Exception e9) {
                ex32 = e9;
                rowsAffectedCompat = 0;
                ex32.printStackTrace();
                str2 = ex32.getMessage();
                stringBuilder3 = new StringBuilder();
                stringBuilder3.append("SQLiteAndroidDatabase.executeSql[Batch](): Error=");
                stringBuilder3.append(str2);
                Log.v("executeSqlBatch", stringBuilder3.toString());
                if (jSONObject != null) {
                    r = new JSONObject();
                    r.put("type", "error");
                    er = new JSONObject();
                    er.put(OSPureeLog.FIELD_MESSAGE, str2);
                    er.put("code", i);
                    r.put("result", er);
                    jSONArray2.put(r);
                } else {
                    r = new JSONObject();
                    r.put("type", "success");
                    r.put("result", jSONObject);
                    jSONArray2.put(r);
                }
            }
            if (jSONObject != null) {
                r = new JSONObject();
                r.put("type", "error");
                er = new JSONObject();
                er.put(OSPureeLog.FIELD_MESSAGE, str2);
                er.put("code", i);
                r.put("result", er);
                jSONArray2.put(r);
            } else {
                r = new JSONObject();
                r.put("type", "success");
                r.put("result", jSONObject);
                jSONArray2.put(r);
            }
        }
    }

    private final int countRowsAffectedCompat(QueryType queryType, String query, JSONArray json_params, SQLiteDatabase mydb) throws JSONException {
        Matcher whereMatcher = WHERE_CLAUSE.matcher(query);
        String where = "";
        for (int pos = 0; whereMatcher.find(pos); pos = whereMatcher.start(1)) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(" WHERE ");
            stringBuilder.append(whereMatcher.group(1));
            where = stringBuilder.toString();
        }
        int numQuestionMarks = 0;
        for (int j = 0; j < where.length(); j++) {
            if (where.charAt(j) == '?') {
                numQuestionMarks++;
            }
        }
        JSONArray subParams = null;
        if (json_params != null) {
            JSONArray origArray = json_params;
            subParams = new JSONArray();
            int startPos = origArray.length() - numQuestionMarks;
            for (int j2 = startPos; j2 < origArray.length(); j2++) {
                subParams.put(j2 - startPos, origArray.get(j2));
            }
        }
        Matcher tableMatcher;
        String table;
        StringBuilder stringBuilder2;
        SQLiteStatement statement;
        if (queryType == QueryType.update) {
            tableMatcher = UPDATE_TABLE_NAME.matcher(query);
            if (tableMatcher.find()) {
                table = tableMatcher.group(1);
                try {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("SELECT count(*) FROM ");
                    stringBuilder2.append(table);
                    stringBuilder2.append(where);
                    statement = mydb.compileStatement(stringBuilder2.toString());
                    if (subParams != null) {
                        bindArgsToStatement(statement, subParams);
                    }
                    return (int) statement.simpleQueryForLong();
                } catch (Exception e) {
                    Log.e(SQLiteAndroidDatabase.class.getSimpleName(), "uncaught", e);
                }
            }
        } else {
            tableMatcher = DELETE_TABLE_NAME.matcher(query);
            if (tableMatcher.find()) {
                table = tableMatcher.group(1);
                try {
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("SELECT count(*) FROM ");
                    stringBuilder2.append(table);
                    stringBuilder2.append(where);
                    statement = mydb.compileStatement(stringBuilder2.toString());
                    bindArgsToStatement(statement, subParams);
                    return (int) statement.simpleQueryForLong();
                } catch (Exception e2) {
                    Log.e(SQLiteAndroidDatabase.class.getSimpleName(), "uncaught", e2);
                }
            }
        }
        return 0;
    }

    private void bindArgsToStatement(SQLiteStatement myStatement, JSONArray sqlArgs) throws JSONException {
        for (int i = 0; i < sqlArgs.length(); i++) {
            if (!(sqlArgs.get(i) instanceof Float)) {
                if (!(sqlArgs.get(i) instanceof Double)) {
                    if (sqlArgs.get(i) instanceof Number) {
                        myStatement.bindLong(i + 1, sqlArgs.getLong(i));
                    } else if (sqlArgs.isNull(i)) {
                        myStatement.bindNull(i + 1);
                    } else {
                        myStatement.bindString(i + 1, sqlArgs.getString(i));
                    }
                }
            }
            myStatement.bindDouble(i + 1, sqlArgs.getDouble(i));
        }
    }

    private JSONObject executeSqlStatementQuery(SQLiteDatabase mydb, String query, JSONArray paramsAsJson) throws Exception {
        JSONObject rowsResult = new JSONObject();
        String key;
        try {
            String[] params = new String[paramsAsJson.length()];
            for (int j = 0; j < paramsAsJson.length(); j++) {
                if (paramsAsJson.isNull(j)) {
                    params[j] = "";
                } else {
                    params[j] = paramsAsJson.getString(j);
                }
            }
            Cursor cur = mydb.rawQuery(query, params);
            if (cur != null && cur.moveToFirst()) {
                JSONArray rowsArrayResult = new JSONArray();
                key = "";
                int colCount = cur.getColumnCount();
                while (true) {
                    JSONObject row = new JSONObject();
                    int i = 0;
                    while (i < colCount) {
                        try {
                            key = cur.getColumnName(i);
                            if (isPostHoneycomb) {
                                bindPostHoneycomb(row, key, cur, i);
                                i++;
                            } else {
                                StringBuilder stringBuilder = new StringBuilder();
                                stringBuilder.append("INTERNAL PLUGIN ERROR: deprecated android.os.Build.VERSION not supported: ");
                                stringBuilder.append(VERSION.SDK_INT);
                                Log.v("SQLiteAndroidDatabase.executeSqlStatementQuery", stringBuilder.toString());
                                stringBuilder = new StringBuilder();
                                stringBuilder.append("INTERNAL PLUGIN ERROR: deprecated android.os.Build.VERSION not supported: ");
                                stringBuilder.append(VERSION.SDK_INT);
                                throw new RuntimeException(stringBuilder.toString());
                            }
                        } catch (Exception ex) {
                            StringBuilder stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("INTERNAL PLUGIN ERROR: could not bindPostHoneycomb: ");
                            stringBuilder2.append(ex.getMessage());
                            Log.v("SQLiteAndroidDatabase.executeSqlStatementQuery", stringBuilder2.toString());
                            throw ex;
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                    rowsArrayResult.put(row);
                    if (!cur.moveToNext()) {
                        try {
                            break;
                        } catch (JSONException e2) {
                            e2.printStackTrace();
                        }
                    }
                }
                rowsResult.put("rows", rowsArrayResult);
            }
            if (cur != null) {
                cur.close();
            }
            return rowsResult;
        } catch (Exception ex2) {
            ex2.printStackTrace();
            key = ex2.getMessage();
            StringBuilder stringBuilder3 = new StringBuilder();
            stringBuilder3.append("SQLiteAndroidDatabase.executeSql[Batch](): Error=");
            stringBuilder3.append(key);
            Log.v("executeSqlBatch", stringBuilder3.toString());
            throw ex2;
        }
    }

    private void bindPostHoneycomb(JSONObject row, String key, Cursor cur, int i) throws JSONException {
        switch (cur.getType(i)) {
            case 0:
                row.put(key, JSONObject.NULL);
                return;
            case 1:
                row.put(key, cur.getLong(i));
                return;
            case 2:
                row.put(key, cur.getDouble(i));
                return;
            default:
                row.put(key, cur.getString(i));
                return;
        }
    }

    static QueryType getQueryType(String query) {
        Matcher matcher = FIRST_WORD.matcher(query);
        if (matcher.find()) {
            try {
                String first = matcher.group(1);
                if (first.length() != 0) {
                    return QueryType.valueOf(first.toLowerCase(Locale.ENGLISH));
                }
                throw new RuntimeException("query not found");
            } catch (IllegalArgumentException e) {
                return QueryType.other;
            }
        }
        throw new RuntimeException("query not found");
    }
}
