package android.support.v4.content;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.NonNull;
import android.support.v4.provider.FontsContractCompat.FontRequestCallback;
import android.util.Log;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public final class LocalBroadcastManager {
    private static final boolean DEBUG = false;
    static final int MSG_EXEC_PENDING_BROADCASTS = 1;
    private static final String TAG = "LocalBroadcastManager";
    private static LocalBroadcastManager mInstance;
    private static final Object mLock = new Object();
    private final HashMap<String, ArrayList<ReceiverRecord>> mActions = new HashMap();
    private final Context mAppContext;
    private final Handler mHandler;
    private final ArrayList<BroadcastRecord> mPendingBroadcasts = new ArrayList();
    private final HashMap<BroadcastReceiver, ArrayList<ReceiverRecord>> mReceivers = new HashMap();

    private static final class BroadcastRecord {
        final Intent intent;
        final ArrayList<ReceiverRecord> receivers;

        BroadcastRecord(Intent _intent, ArrayList<ReceiverRecord> _receivers) {
            this.intent = _intent;
            this.receivers = _receivers;
        }
    }

    private static final class ReceiverRecord {
        boolean broadcasting;
        boolean dead;
        final IntentFilter filter;
        final BroadcastReceiver receiver;

        ReceiverRecord(IntentFilter _filter, BroadcastReceiver _receiver) {
            this.filter = _filter;
            this.receiver = _receiver;
        }

        public String toString() {
            StringBuilder builder = new StringBuilder(128);
            builder.append("Receiver{");
            builder.append(this.receiver);
            builder.append(" filter=");
            builder.append(this.filter);
            if (this.dead) {
                builder.append(" DEAD");
            }
            builder.append("}");
            return builder.toString();
        }
    }

    @NonNull
    public static LocalBroadcastManager getInstance(@NonNull Context context) {
        LocalBroadcastManager localBroadcastManager;
        synchronized (mLock) {
            if (mInstance == null) {
                mInstance = new LocalBroadcastManager(context.getApplicationContext());
            }
            localBroadcastManager = mInstance;
        }
        return localBroadcastManager;
    }

    private LocalBroadcastManager(Context context) {
        this.mAppContext = context;
        this.mHandler = new Handler(context.getMainLooper()) {
            public void handleMessage(Message msg) {
                if (msg.what != 1) {
                    super.handleMessage(msg);
                } else {
                    LocalBroadcastManager.this.executePendingBroadcasts();
                }
            }
        };
    }

    public void registerReceiver(@NonNull BroadcastReceiver receiver, @NonNull IntentFilter filter) {
        synchronized (this.mReceivers) {
            ReceiverRecord entry = new ReceiverRecord(filter, receiver);
            ArrayList<ReceiverRecord> filters = (ArrayList) this.mReceivers.get(receiver);
            if (filters == null) {
                filters = new ArrayList(1);
                this.mReceivers.put(receiver, filters);
            }
            filters.add(entry);
            for (int i = 0; i < filter.countActions(); i++) {
                String action = filter.getAction(i);
                ArrayList<ReceiverRecord> entries = (ArrayList) this.mActions.get(action);
                if (entries == null) {
                    entries = new ArrayList(1);
                    this.mActions.put(action, entries);
                }
                entries.add(entry);
            }
        }
    }

    public void unregisterReceiver(@NonNull BroadcastReceiver receiver) {
        synchronized (this.mReceivers) {
            ArrayList<ReceiverRecord> filters = (ArrayList) this.mReceivers.remove(receiver);
            if (filters == null) {
                return;
            }
            for (int i = filters.size() - 1; i >= 0; i--) {
                ReceiverRecord filter = (ReceiverRecord) filters.get(i);
                filter.dead = true;
                for (int j = 0; j < filter.filter.countActions(); j++) {
                    String action = filter.filter.getAction(j);
                    ArrayList<ReceiverRecord> receivers = (ArrayList) this.mActions.get(action);
                    if (receivers != null) {
                        for (int k = receivers.size() - 1; k >= 0; k--) {
                            ReceiverRecord rec = (ReceiverRecord) receivers.get(k);
                            if (rec.receiver == receiver) {
                                rec.dead = true;
                                receivers.remove(k);
                            }
                        }
                        if (receivers.size() <= 0) {
                            this.mActions.remove(action);
                        }
                    }
                }
            }
        }
    }

    public boolean sendBroadcast(@NonNull Intent intent) {
        Intent intent2 = intent;
        synchronized (this.mReceivers) {
            String action = intent.getAction();
            String type = intent2.resolveTypeIfNeeded(r1.mAppContext.getContentResolver());
            Uri data = intent.getData();
            String scheme = intent.getScheme();
            Set<String> categories = intent.getCategories();
            boolean debug = (intent.getFlags() & 8) != 0;
            if (debug) {
                String str = TAG;
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Resolving type ");
                stringBuilder.append(type);
                stringBuilder.append(" scheme ");
                stringBuilder.append(scheme);
                stringBuilder.append(" of intent ");
                stringBuilder.append(intent2);
                Log.v(str, stringBuilder.toString());
            }
            ArrayList<ReceiverRecord> entries = (ArrayList) r1.mActions.get(intent.getAction());
            if (entries != null) {
                int i;
                if (debug) {
                    str = TAG;
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Action list: ");
                    stringBuilder.append(entries);
                    Log.v(str, stringBuilder.toString());
                }
                ArrayList<ReceiverRecord> receivers = null;
                int i2 = 0;
                while (i2 < entries.size()) {
                    String type2;
                    ReceiverRecord receiver = (ReceiverRecord) entries.get(i2);
                    if (debug) {
                        str = TAG;
                        StringBuilder stringBuilder2 = new StringBuilder();
                        stringBuilder2.append("Matching against filter ");
                        stringBuilder2.append(receiver.filter);
                        Log.v(str, stringBuilder2.toString());
                    }
                    if (!receiver.broadcasting) {
                        int match = receiver.filter;
                        ReceiverRecord receiver2 = receiver;
                        String str2 = type;
                        type2 = type;
                        type = receivers;
                        i = i2;
                        match = match.match(action, str2, scheme, data, categories, TAG);
                        if (match >= 0) {
                            if (debug) {
                                str2 = TAG;
                                StringBuilder stringBuilder3 = new StringBuilder();
                                stringBuilder3.append("  Filter matched!  match=0x");
                                stringBuilder3.append(Integer.toHexString(match));
                                Log.v(str2, stringBuilder3.toString());
                            }
                            if (type == null) {
                                type = new ArrayList();
                            }
                            type.add(receiver2);
                            receiver2.broadcasting = true;
                            receivers = type;
                            i2 = i + 1;
                            type = type2;
                        } else if (debug) {
                            switch (match) {
                                case FontRequestCallback.FAIL_REASON_SECURITY_VIOLATION /*-4*/:
                                    str2 = "category";
                                    break;
                                case FontRequestCallback.FAIL_REASON_FONT_LOAD_ERROR /*-3*/:
                                    str2 = "action";
                                    break;
                                case -2:
                                    str2 = "data";
                                    break;
                                case -1:
                                    str2 = "type";
                                    break;
                                default:
                                    str2 = "unknown reason";
                                    break;
                            }
                            String str3 = TAG;
                            StringBuilder stringBuilder4 = new StringBuilder();
                            stringBuilder4.append("  Filter did not match: ");
                            stringBuilder4.append(str2);
                            Log.v(str3, stringBuilder4.toString());
                        }
                    } else if (debug) {
                        Log.v(TAG, "  Filter's target already added");
                        type2 = type;
                        type = receivers;
                        i = i2;
                    } else {
                        type2 = type;
                        type = receivers;
                        i = i2;
                    }
                    receivers = type;
                    i2 = i + 1;
                    type = type2;
                }
                ArrayList<ReceiverRecord> type3 = receivers;
                i = i2;
                if (type3 != null) {
                    for (int i3 = 0; i3 < type3.size(); i3++) {
                        ((ReceiverRecord) type3.get(i3)).broadcasting = false;
                    }
                    r1.mPendingBroadcasts.add(new BroadcastRecord(intent2, type3));
                    if (!r1.mHandler.hasMessages(1)) {
                        r1.mHandler.sendEmptyMessage(1);
                    }
                    return true;
                }
            }
            return false;
        }
    }

    public void sendBroadcastSync(@NonNull Intent intent) {
        if (sendBroadcast(intent)) {
            executePendingBroadcasts();
        }
    }

    /* JADX WARNING: inconsistent code. */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    void executePendingBroadcasts() {
        /*
        r9 = this;
        r0 = 0;
    L_0x0001:
        r1 = r9.mReceivers;
        monitor-enter(r1);
        r2 = r9.mPendingBroadcasts;	 Catch:{ all -> 0x0048 }
        r2 = r2.size();	 Catch:{ all -> 0x0048 }
        if (r2 > 0) goto L_0x000e;
    L_0x000c:
        monitor-exit(r1);	 Catch:{ all -> 0x0048 }
        return;
    L_0x000e:
        r0 = new android.support.v4.content.LocalBroadcastManager.BroadcastRecord[r2];	 Catch:{ all -> 0x0048 }
        r3 = r9.mPendingBroadcasts;	 Catch:{ all -> 0x0048 }
        r3.toArray(r0);	 Catch:{ all -> 0x0048 }
        r3 = r9.mPendingBroadcasts;	 Catch:{ all -> 0x0048 }
        r3.clear();	 Catch:{ all -> 0x0048 }
        monitor-exit(r1);	 Catch:{ all -> 0x0048 }
        r1 = 0;
    L_0x001c:
        r2 = r0.length;
        if (r1 >= r2) goto L_0x0047;
    L_0x001f:
        r2 = r0[r1];
        r3 = r2.receivers;
        r3 = r3.size();
        r4 = 0;
    L_0x0028:
        if (r4 >= r3) goto L_0x0044;
    L_0x002a:
        r5 = r2.receivers;
        r5 = r5.get(r4);
        r5 = (android.support.v4.content.LocalBroadcastManager.ReceiverRecord) r5;
        r6 = r5.dead;
        if (r6 != 0) goto L_0x0040;
    L_0x0036:
        r6 = r5.receiver;
        r7 = r9.mAppContext;
        r8 = r2.intent;
        r6.onReceive(r7, r8);
        goto L_0x0041;
    L_0x0041:
        r4 = r4 + 1;
        goto L_0x0028;
    L_0x0044:
        r1 = r1 + 1;
        goto L_0x001c;
    L_0x0047:
        goto L_0x0001;
    L_0x0048:
        r2 = move-exception;
        monitor-exit(r1);	 Catch:{ all -> 0x0048 }
        throw r2;
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.content.LocalBroadcastManager.executePendingBroadcasts():void");
    }
}
