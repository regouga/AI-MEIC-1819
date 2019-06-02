package com.cookpad.puree.internal;

import android.app.ActivityManager;
import android.app.ActivityManager.RunningAppProcessInfo;
import android.content.Context;
import android.os.Process;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import javax.annotation.Nonnull;
import javax.annotation.ParametersAreNonnullByDefault;

@ParametersAreNonnullByDefault
public class ProcessName {
    @Nonnull
    public static String getAndroidProcessName(Context context) {
        String name = findProcessNameInLinuxWay();
        if (name == null) {
            name = findProcessNameInAndroidWay(context);
        }
        if (name != null) {
            return extractAndroidProcessName(name);
        }
        return "";
    }

    static String extractAndroidProcessName(String fullProcessName) {
        int pos = fullProcessName.lastIndexOf(58);
        if (pos != -1) {
            return fullProcessName.substring(pos + 1);
        }
        return "";
    }

    static String findProcessNameInLinuxWay() {
        BufferedReader cmdlineReader = null;
        try {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("/proc/");
            stringBuilder.append(Process.myPid());
            stringBuilder.append("/cmdline");
            cmdlineReader = new BufferedReader(new InputStreamReader(new FileInputStream(stringBuilder.toString()), "UTF-8"));
            StringBuilder processName = new StringBuilder();
            while (true) {
                int read = cmdlineReader.read();
                int c = read;
                if (read <= 0) {
                    break;
                }
                processName.append((char) c);
            }
            String stringBuilder2 = processName.toString();
            try {
                cmdlineReader.close();
            } catch (IOException e) {
            }
            return stringBuilder2;
        } catch (IOException e2) {
            if (cmdlineReader != null) {
                try {
                    cmdlineReader.close();
                } catch (IOException e3) {
                }
            }
            return null;
        } catch (Throwable th) {
            if (cmdlineReader != null) {
                try {
                    cmdlineReader.close();
                } catch (IOException e4) {
                }
            }
        }
    }

    static String findProcessNameInAndroidWay(Context context) {
        int pid = Process.myPid();
        for (RunningAppProcessInfo processInfo : ((ActivityManager) context.getSystemService("activity")).getRunningAppProcesses()) {
            if (processInfo.pid == pid) {
                return processInfo.processName;
            }
        }
        return null;
    }
}
