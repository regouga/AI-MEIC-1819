package io.sqlc;

import android.util.Log;
import java.io.File;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.cloudsky.cordovaPlugins.ZBarScannerActivity;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class SQLitePlugin extends CordovaPlugin {
    static Map<String, DBRunner> dbrmap = new ConcurrentHashMap();

    private enum Action {
        echoStringValue,
        open,
        close,
        delete,
        executeSqlBatch,
        backgroundExecuteSqlBatch
    }

    private final class DBQuery {
        final CallbackContext cbc;
        final boolean close;
        final boolean delete;
        final JSONArray[] jsonparams;
        final String[] queries;
        final boolean stop;

        DBQuery(String[] myqueries, JSONArray[] params, CallbackContext c) {
            this.stop = false;
            this.close = false;
            this.delete = false;
            this.queries = myqueries;
            this.jsonparams = params;
            this.cbc = c;
        }

        DBQuery(boolean delete, CallbackContext cbc) {
            this.stop = true;
            this.close = true;
            this.delete = delete;
            this.queries = null;
            this.jsonparams = null;
            this.cbc = cbc;
        }

        DBQuery() {
            this.stop = true;
            this.close = false;
            this.delete = false;
            this.queries = null;
            this.jsonparams = null;
            this.cbc = null;
        }
    }

    private class DBRunner implements Runnable {
        private boolean bugWorkaround;
        final String dbConnectionName;
        final String dbname;
        SQLiteAndroidDatabase mydb;
        private boolean oldImpl;
        final CallbackContext openCbc;
        /* renamed from: q */
        final BlockingQueue<DBQuery> f1q;

        DBRunner(String dbname, String dbConnectionName, JSONObject options, CallbackContext cbc) {
            this.dbname = dbname;
            this.dbConnectionName = dbConnectionName;
            this.oldImpl = options.has("androidOldDatabaseImplementation");
            Log.v(SQLitePlugin.class.getSimpleName(), "Android db implementation: built-in android.database.sqlite package");
            SQLitePlugin sQLitePlugin = (this.oldImpl == null || options.has("androidBugWorkaround") == null) ? null : true;
            this.bugWorkaround = sQLitePlugin;
            if (this.bugWorkaround != null) {
                Log.v(SQLitePlugin.class.getSimpleName(), "Android db closing/locking workaround applied");
            }
            this.f1q = new LinkedBlockingQueue();
            this.openCbc = cbc;
        }

        public void run() {
            try {
                this.mydb = SQLitePlugin.this.openDatabase(this.dbname, this.openCbc, this.oldImpl);
                DBQuery dbq = null;
                try {
                    dbq = (DBQuery) this.f1q.take();
                    while (!dbq.stop) {
                        this.mydb.executeSqlBatch(dbq.queries, dbq.jsonparams, dbq.cbc);
                        if (this.bugWorkaround && dbq.queries.length == 1 && dbq.queries[0] == "COMMIT") {
                            this.mydb.bugWorkaround();
                        }
                        dbq = (DBQuery) this.f1q.take();
                    }
                } catch (Exception e) {
                    Log.e(SQLitePlugin.class.getSimpleName(), "unexpected error", e);
                }
                if (dbq != null && dbq.close) {
                    try {
                        SQLitePlugin.this.closeDatabaseNow(this.dbConnectionName);
                        SQLitePlugin.dbrmap.remove(this.dbConnectionName);
                        if (dbq.delete) {
                            SQLitePlugin.this.deleteDatabase(this.dbname, dbq.cbc);
                        } else {
                            dbq.cbc.success();
                        }
                    } catch (Exception e2) {
                        Log.e(SQLitePlugin.class.getSimpleName(), "couldn't close database", e2);
                        if (dbq.cbc != null) {
                            CallbackContext callbackContext = dbq.cbc;
                            StringBuilder stringBuilder = new StringBuilder();
                            stringBuilder.append("couldn't close database: ");
                            stringBuilder.append(e2);
                            callbackContext.error(stringBuilder.toString());
                        }
                    }
                }
            } catch (Exception e3) {
                Log.e(SQLitePlugin.class.getSimpleName(), "unexpected error, stopping db thread", e3);
                SQLitePlugin.dbrmap.remove(this.dbConnectionName);
            }
        }
    }

    public boolean execute(String actionAsString, JSONArray args, CallbackContext cbc) {
        boolean z = false;
        try {
            try {
                z = executeAndPossiblyThrow(Action.valueOf(actionAsString), args, cbc);
                return z;
            } catch (JSONException e) {
                Log.e(SQLitePlugin.class.getSimpleName(), "unexpected error", e);
                return z;
            }
        } catch (IllegalArgumentException e2) {
            Log.e(SQLitePlugin.class.getSimpleName(), "unexpected error", e2);
            return false;
        }
    }

    private boolean executeAndPossiblyThrow(Action action, JSONArray args, CallbackContext cbc) throws JSONException {
        SQLitePlugin sQLitePlugin = this;
        JSONArray jSONArray = args;
        CallbackContext callbackContext = cbc;
        JSONObject o;
        switch (action) {
            case echoStringValue:
                callbackContext.success(jSONArray.getJSONObject(0).getString("value"));
                break;
            case open:
                o = jSONArray.getJSONObject(0);
                startDatabase(o.getString("name"), o, callbackContext);
                break;
            case close:
                o = jSONArray.getJSONObject(0);
                closeDatabase(getDBConnectionName(o.getString("dbname"), o), callbackContext);
                break;
            case delete:
                deleteDatabase(jSONArray.getJSONObject(0).getString("path"), callbackContext);
                break;
            case executeSqlBatch:
            case backgroundExecuteSqlBatch:
                JSONObject allargs = jSONArray.getJSONObject(0);
                JSONObject dbargs = allargs.getJSONObject("dbargs");
                String dbname = dbargs.getString("dbname");
                JSONArray txargs = allargs.getJSONArray("executes");
                if (!txargs.isNull(0)) {
                    int len = txargs.length();
                    String[] queries = new String[len];
                    JSONArray[] jsonparams = new JSONArray[len];
                    for (int i = 0; i < len; i++) {
                        JSONObject a = txargs.getJSONObject(i);
                        queries[i] = a.getString("sql");
                        jsonparams[i] = a.getJSONArray(ZBarScannerActivity.EXTRA_PARAMS);
                    }
                    DBQuery q = new DBQuery(queries, jsonparams, callbackContext);
                    DBRunner r = (DBRunner) dbrmap.get(getDBConnectionName(dbname, dbargs));
                    if (r == null) {
                        callbackContext.error("INTERNAL PLUGIN ERROR: database not open");
                        break;
                    }
                    try {
                        r.f1q.put(q);
                    } catch (Exception e) {
                        Log.e(SQLitePlugin.class.getSimpleName(), "couldn't add to queue", e);
                        callbackContext.error("INTERNAL PLUGIN ERROR: couldn't add to queue");
                    }
                    break;
                }
                callbackContext.error("INTERNAL PLUGIN ERROR: missing executes list");
                break;
            default:
                break;
        }
        return true;
    }

    public void onDestroy() {
        while (!dbrmap.isEmpty()) {
            String dbConnectionName = (String) dbrmap.keySet().iterator().next();
            closeDatabaseNow(dbConnectionName);
            try {
                ((DBRunner) dbrmap.get(dbConnectionName)).f1q.put(new DBQuery());
            } catch (Exception e) {
                Log.e(SQLitePlugin.class.getSimpleName(), "INTERNAL PLUGIN CLEANUP ERROR: could not stop db thread due to exception", e);
            }
            dbrmap.remove(dbConnectionName);
        }
    }

    private void startDatabase(String dbname, JSONObject options, CallbackContext cbc) throws JSONException {
        String dbConnectionName = getDBConnectionName(dbname, options);
        if (((DBRunner) dbrmap.get(dbConnectionName)) != null) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("INTERNAL ERROR: database already open for db name: ");
            stringBuilder.append(dbname);
            cbc.error(stringBuilder.toString());
            return;
        }
        DBRunner r = new DBRunner(dbname, dbConnectionName, options, cbc);
        dbrmap.put(dbConnectionName, r);
        this.cordova.getThreadPool().execute(r);
    }

    private SQLiteAndroidDatabase openDatabase(String dbname, CallbackContext cbc, boolean old_impl) throws Exception {
        try {
            File dbfile = this.cordova.getActivity().getDatabasePath(dbname);
            if (!dbfile.exists()) {
                dbfile.getParentFile().mkdirs();
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Open sqlite db: ");
            stringBuilder.append(dbfile.getAbsolutePath());
            Log.v("info", stringBuilder.toString());
            SQLiteAndroidDatabase mydb = old_impl ? new SQLiteAndroidDatabase() : new SQLiteConnectorDatabase();
            mydb.open(dbfile);
            if (cbc != null) {
                cbc.success();
            }
            return mydb;
        } catch (Exception e) {
            if (cbc != null) {
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder2.append("can't open database ");
                stringBuilder2.append(e);
                cbc.error(stringBuilder2.toString());
            }
            throw e;
        }
    }

    private void closeDatabase(String dbConnectionName, CallbackContext cbc) {
        DBRunner r = (DBRunner) dbrmap.get(dbConnectionName);
        if (r != null) {
            try {
                r.f1q.put(new DBQuery(false, cbc));
            } catch (Exception e) {
                if (cbc != null) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("couldn't close database");
                    stringBuilder.append(e);
                    cbc.error(stringBuilder.toString());
                }
                Log.e(SQLitePlugin.class.getSimpleName(), "couldn't close database", e);
            }
        } else if (cbc != null) {
            cbc.success();
        }
    }

    private void closeDatabaseNow(String dbConnectionName) {
        DBRunner r = (DBRunner) dbrmap.get(dbConnectionName);
        if (r != null) {
            SQLiteAndroidDatabase mydb = r.mydb;
            if (mydb != null) {
                mydb.closeDatabaseNow();
            }
        }
    }

    private void deleteDatabase(String dbname, CallbackContext cbc) {
        DBRunner r = getRunnerForDb(dbname);
        if (r != null) {
            try {
                r.f1q.put(new DBQuery(true, cbc));
            } catch (Exception e) {
                if (cbc != null) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("couldn't close database");
                    stringBuilder.append(e);
                    cbc.error(stringBuilder.toString());
                }
                Log.e(SQLitePlugin.class.getSimpleName(), "couldn't close database", e);
            }
        } else if (deleteDatabaseNow(dbname)) {
            cbc.success();
        } else {
            cbc.error("couldn't delete database");
        }
    }

    private boolean deleteDatabaseNow(String dbname) {
        try {
            return this.cordova.getActivity().deleteDatabase(this.cordova.getActivity().getDatabasePath(dbname).getAbsolutePath());
        } catch (Exception e) {
            Log.e(SQLitePlugin.class.getSimpleName(), "couldn't delete database", e);
            return false;
        }
    }

    private static String getDBConnectionName(String dbname, JSONObject options) {
        String connectionName = options.optString("connectionName");
        if (connectionName == null) {
            return dbname;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(dbname);
        stringBuilder.append("_");
        stringBuilder.append(connectionName);
        return stringBuilder.toString();
    }

    private DBRunner getRunnerForDb(String dbName) {
        for (DBRunner runner : dbrmap.values()) {
            if (runner.dbname.equals(dbName)) {
                return runner;
            }
        }
        return null;
    }
}
