package com.outsystems.plugins.oscache.cache.helpers;

import android.support.annotation.NonNull;

public class VersionComparator {
    public static int compare(@NonNull String left, @NonNull String right) {
        int i = 0;
        if (left.equals(right)) {
            return 0;
        }
        int result;
        int leftStart = 0;
        int rightStart = 0;
        while (true) {
            int leftEnd = left.indexOf(46, leftStart);
            int rightEnd = right.indexOf(46, rightStart);
            String leftString = leftEnd < 0 ? left.substring(leftStart) : left.substring(leftStart, leftEnd);
            String rightString = rightEnd < 0 ? right.substring(rightStart) : right.substring(rightStart, rightEnd);
            try {
                result = Integer.valueOf(Integer.parseInt(leftString)).compareTo(Integer.valueOf(Integer.parseInt(rightString)));
            } catch (NumberFormatException e) {
                result = leftString.compareTo(rightString);
            }
            leftStart = leftEnd + 1;
            rightStart = rightEnd + 1;
            if (result != 0 || leftStart <= 0) {
                break;
            } else if (rightStart <= 0) {
                break;
            }
        }
        if (result == 0) {
            if (leftStart > rightStart) {
                return containsNonZeroValue(left, leftStart);
            }
            if (leftStart < rightStart) {
                if (containsNonZeroValue(right, rightStart)) {
                    i = -1;
                }
                return i;
            }
        }
        return result;
    }

    private static boolean containsNonZeroValue(String str, int beginIndex) {
        for (int i = beginIndex; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c != '0' && c != '.') {
                return true;
            }
        }
        return false;
    }
}
