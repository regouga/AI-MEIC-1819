package io.liteglue;

import java.sql.SQLException;

class SQLiteGlueConnection implements SQLiteConnection {
    private SQLDatabaseHandle db = null;

    private class SQLGStatement implements SQLiteStatement {
        private int columnCount = 0;
        private boolean hasRow = false;
        private String sql = null;
        private SQLStatementHandle sthandle = null;

        SQLGStatement(String str) {
            this.sql = str;
            this.sthandle = SQLiteGlueConnection.this.db.newStatementHandle(str);
        }

        int prepare() {
            return this.sthandle.prepare();
        }

        public void bindDouble(int i, double d) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                i = sQLStatementHandle.bindDouble(i, d);
                if (i != 0) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("sqlite3_bind_double failure: ");
                    stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                    throw new SQLException(stringBuilder.toString(), "failure", i);
                }
                return;
            }
            throw new SQLException("already disposed", "failed", 1.04E-322d);
        }

        public void bindInteger(int i, int i2) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                i = sQLStatementHandle.bindInteger(i, i2);
                if (i != 0) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("sqlite3_bind_int failure: ");
                    stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                    throw new SQLException(stringBuilder.toString(), "failure", i);
                }
                return;
            }
            throw new SQLException("already disposed", "failed", 21);
        }

        public void bindLong(int i, long j) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                i = sQLStatementHandle.bindLong(i, j);
                if (i != 0) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("sqlite3_bind_int64 (long) failure: ");
                    stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                    throw new SQLException(stringBuilder.toString(), "failure", i);
                }
                return;
            }
            throw new SQLException("already disposed", "failed", 21);
        }

        public void bindNull(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                i = sQLStatementHandle.bindNull(i);
                if (i != 0) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("sqlite3_bind_null failure: ");
                    stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                    throw new SQLException(stringBuilder.toString(), "failure", i);
                }
                return;
            }
            throw new SQLException("already disposed", "failed", 21);
        }

        public void bindTextNativeString(int i, String str) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (str != null) {
                i = sQLStatementHandle.bindTextNativeString(i, str);
                if (i != 0) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("sqlite3_bind_text failure: ");
                    stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                    throw new SQLException(stringBuilder.toString(), "failure", i);
                }
            } else {
                throw new SQLException("null argument", "failed", 21);
            }
        }

        public boolean step() throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                int step = sQLStatementHandle.step();
                if (!(step == 0 || step == 100)) {
                    if (step != 101) {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("sqlite3_step failure: ");
                        stringBuilder.append(SQLiteGlueConnection.this.db.getLastErrorMessage());
                        throw new SQLException(stringBuilder.toString(), "failure", step);
                    }
                }
                this.hasRow = step == 100;
                if (this.hasRow) {
                    this.columnCount = this.sthandle.getColumnCount();
                } else {
                    this.columnCount = 0;
                }
                return this.hasRow;
            }
            throw new SQLException("already disposed", "failed", 21);
        }

        public int getColumnCount() throws SQLException {
            if (this.sthandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (this.hasRow) {
                return this.columnCount;
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public String getColumnName(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnName(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public int getColumnType(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnType(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public double getColumnDouble(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnDouble(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public int getColumnInteger(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnInteger(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public long getColumnLong(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnLong(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public String getColumnTextNativeString(int i) throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle == null) {
                throw new SQLException("already disposed", "failed", 21);
            } else if (!this.hasRow) {
                throw new SQLException("no result available", "failed", 21);
            } else if (i >= 0 && i < this.columnCount) {
                return sQLStatementHandle.getColumnTextNativeString(i);
            } else {
                throw new SQLException("no result available", "failed", 21);
            }
        }

        public void dispose() throws SQLException {
            SQLStatementHandle sQLStatementHandle = this.sthandle;
            if (sQLStatementHandle != null) {
                sQLStatementHandle.finish();
                this.sthandle = null;
                return;
            }
            throw new SQLException("already disposed", "failed", 21);
        }
    }

    public SQLiteGlueConnection(String str, int i) throws SQLException {
        if (str != null) {
            SQLDatabaseHandle sQLGDatabaseHandle = new SQLGDatabaseHandle(str, i);
            str = sQLGDatabaseHandle.open();
            if (str == null) {
                this.db = sQLGDatabaseHandle;
                return;
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("sqlite3_open_v2 failure: ");
            stringBuilder.append(this.db.getLastErrorMessage());
            throw new SQLException(stringBuilder.toString(), "failure", str);
        }
        throw new SQLException("null argument", "failed", 21);
    }

    public void dispose() throws SQLException {
        SQLDatabaseHandle sQLDatabaseHandle = this.db;
        if (sQLDatabaseHandle != null) {
            int close = sQLDatabaseHandle.close();
            if (close == 0) {
                this.db = null;
                return;
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("sqlite3_close failure: ");
            stringBuilder.append(this.db.getLastErrorMessage());
            throw new SQLException(stringBuilder.toString(), "failure", close);
        }
        throw new SQLException("already disposed", "failed", 21);
    }

    public void keyNativeString(String str) throws SQLException {
        SQLDatabaseHandle sQLDatabaseHandle = this.db;
        if (sQLDatabaseHandle != null) {
            str = sQLDatabaseHandle.keyNativeString(str);
            if (str != null) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("sqlite3_key failure: ");
                stringBuilder.append(this.db.getLastErrorMessage());
                throw new SQLException(stringBuilder.toString(), "failure", str);
            }
            return;
        }
        throw new SQLException("already disposed", "failed", 21);
    }

    public SQLiteStatement prepareStatement(String str) throws SQLException {
        if (this.db == null) {
            throw new SQLException("already disposed", "failed", 21);
        } else if (str != null) {
            SQLiteStatement sQLGStatement = new SQLGStatement(str);
            str = sQLGStatement.prepare();
            if (str == null) {
                return sQLGStatement;
            }
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("sqlite3_prepare_v2 failure: ");
            stringBuilder.append(this.db.getLastErrorMessage());
            throw new SQLException(stringBuilder.toString(), "failure", str);
        } else {
            throw new SQLException("null argument", "failed", 21);
        }
    }

    public long getLastInsertRowid() throws SQLException {
        SQLDatabaseHandle sQLDatabaseHandle = this.db;
        if (sQLDatabaseHandle != null) {
            return sQLDatabaseHandle.getLastInsertRowid();
        }
        throw new SQLException("already disposed", "failed", 21);
    }

    public int getTotalChanges() throws SQLException {
        SQLDatabaseHandle sQLDatabaseHandle = this.db;
        if (sQLDatabaseHandle != null) {
            return sQLDatabaseHandle.getTotalChanges();
        }
        throw new SQLException("already disposed", "failed", 21);
    }
}
