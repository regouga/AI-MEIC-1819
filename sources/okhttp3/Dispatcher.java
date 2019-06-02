package okhttp3;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import okhttp3.internal.Util;

public final class Dispatcher {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    @Nullable
    private ExecutorService executorService;
    @Nullable
    private Runnable idleCallback;
    private int maxRequests = 64;
    private int maxRequestsPerHost = 5;
    private final Deque<AsyncCall> readyAsyncCalls = new ArrayDeque();
    private final Deque<AsyncCall> runningAsyncCalls = new ArrayDeque();
    private final Deque<RealCall> runningSyncCalls = new ArrayDeque();

    public Dispatcher(ExecutorService executorService) {
        this.executorService = executorService;
    }

    public synchronized ExecutorService executorService() {
        if (this.executorService == null) {
            this.executorService = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60, TimeUnit.SECONDS, new SynchronousQueue(), Util.threadFactory("OkHttp Dispatcher", false));
        }
        return this.executorService;
    }

    public void setMaxRequests(int maxRequests) {
        if (maxRequests >= 1) {
            synchronized (this) {
                this.maxRequests = maxRequests;
            }
            promoteAndExecute();
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("max < 1: ");
        stringBuilder.append(maxRequests);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    public synchronized int getMaxRequests() {
        return this.maxRequests;
    }

    public void setMaxRequestsPerHost(int maxRequestsPerHost) {
        if (maxRequestsPerHost >= 1) {
            synchronized (this) {
                this.maxRequestsPerHost = maxRequestsPerHost;
            }
            promoteAndExecute();
            return;
        }
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("max < 1: ");
        stringBuilder.append(maxRequestsPerHost);
        throw new IllegalArgumentException(stringBuilder.toString());
    }

    public synchronized int getMaxRequestsPerHost() {
        return this.maxRequestsPerHost;
    }

    public synchronized void setIdleCallback(@Nullable Runnable idleCallback) {
        this.idleCallback = idleCallback;
    }

    void enqueue(AsyncCall call) {
        synchronized (this) {
            this.readyAsyncCalls.add(call);
        }
        promoteAndExecute();
    }

    public synchronized void cancelAll() {
        for (AsyncCall call : this.readyAsyncCalls) {
            call.get().cancel();
        }
        for (AsyncCall call2 : this.runningAsyncCalls) {
            call2.get().cancel();
        }
        for (RealCall call3 : this.runningSyncCalls) {
            call3.cancel();
        }
    }

    private boolean promoteAndExecute() {
        boolean isRunning;
        List<AsyncCall> executableCalls = new ArrayList();
        synchronized (this) {
            Iterator<AsyncCall> i = this.readyAsyncCalls.iterator();
            while (i.hasNext()) {
                AsyncCall asyncCall = (AsyncCall) i.next();
                if (this.runningAsyncCalls.size() >= this.maxRequests) {
                    break;
                } else if (runningCallsForHost(asyncCall) < this.maxRequestsPerHost) {
                    i.remove();
                    executableCalls.add(asyncCall);
                    this.runningAsyncCalls.add(asyncCall);
                }
            }
            isRunning = runningCallsCount() > 0;
        }
        int size = executableCalls.size();
        for (int i2 = 0; i2 < size; i2++) {
            ((AsyncCall) executableCalls.get(i2)).executeOn(executorService());
        }
        return isRunning;
    }

    private int runningCallsForHost(AsyncCall call) {
        int result = 0;
        for (AsyncCall c : this.runningAsyncCalls) {
            if (!c.get().forWebSocket) {
                if (c.host().equals(call.host())) {
                    result++;
                }
            }
        }
        return result;
    }

    synchronized void executed(RealCall call) {
        this.runningSyncCalls.add(call);
    }

    void finished(AsyncCall call) {
        finished(this.runningAsyncCalls, call);
    }

    void finished(RealCall call) {
        finished(this.runningSyncCalls, call);
    }

    private <T> void finished(Deque<T> calls, T call) {
        synchronized (this) {
            if (calls.remove(call)) {
                Runnable idleCallback = this.idleCallback;
            } else {
                throw new AssertionError("Call wasn't in-flight!");
            }
        }
        if (!promoteAndExecute() && idleCallback != null) {
            idleCallback.run();
        }
    }

    public synchronized List<Call> queuedCalls() {
        List<Call> result;
        result = new ArrayList();
        for (AsyncCall asyncCall : this.readyAsyncCalls) {
            result.add(asyncCall.get());
        }
        return Collections.unmodifiableList(result);
    }

    public synchronized List<Call> runningCalls() {
        List<Call> result;
        result = new ArrayList();
        result.addAll(this.runningSyncCalls);
        for (AsyncCall asyncCall : this.runningAsyncCalls) {
            result.add(asyncCall.get());
        }
        return Collections.unmodifiableList(result);
    }

    public synchronized int queuedCallsCount() {
        return this.readyAsyncCalls.size();
    }

    public synchronized int runningCallsCount() {
        return this.runningAsyncCalls.size() + this.runningSyncCalls.size();
    }
}
