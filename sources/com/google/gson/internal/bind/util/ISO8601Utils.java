package com.google.gson.internal.bind.util;

import java.text.ParseException;
import java.text.ParsePosition;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;

public class ISO8601Utils {
    private static final TimeZone TIMEZONE_UTC = TimeZone.getTimeZone(UTC_ID);
    private static final String UTC_ID = "UTC";

    public static String format(Date date) {
        return format(date, false, TIMEZONE_UTC);
    }

    public static String format(Date date, boolean millis) {
        return format(date, millis, TIMEZONE_UTC);
    }

    public static String format(Date date, boolean millis, TimeZone tz) {
        Calendar calendar = new GregorianCalendar(tz, Locale.US);
        calendar.setTime(date);
        StringBuilder formatted = new StringBuilder(("yyyy-MM-ddThh:mm:ss".length() + (millis ? ".sss".length() : 0)) + (tz.getRawOffset() == 0 ? "Z" : "+hh:mm").length());
        padInt(formatted, calendar.get(1), "yyyy".length());
        char c = '-';
        formatted.append('-');
        padInt(formatted, calendar.get(2) + 1, "MM".length());
        formatted.append('-');
        padInt(formatted, calendar.get(5), "dd".length());
        formatted.append('T');
        padInt(formatted, calendar.get(11), "hh".length());
        formatted.append(':');
        padInt(formatted, calendar.get(12), "mm".length());
        formatted.append(':');
        padInt(formatted, calendar.get(13), "ss".length());
        if (millis) {
            formatted.append('.');
            padInt(formatted, calendar.get(14), "sss".length());
        }
        int offset = tz.getOffset(calendar.getTimeInMillis());
        if (offset != 0) {
            int hours = Math.abs((offset / 60000) / 60);
            int minutes = Math.abs((offset / 60000) % 60);
            if (offset >= 0) {
                c = '+';
            }
            formatted.append(c);
            padInt(formatted, hours, "hh".length());
            formatted.append(':');
            padInt(formatted, minutes, "mm".length());
        } else {
            formatted.append('Z');
        }
        return formatted.toString();
    }

    public static Date parse(String date, ParsePosition pos) throws ParseException {
        Exception e;
        Exception exception;
        Exception fail;
        String input;
        String msg;
        StringBuilder stringBuilder;
        ParseException ex;
        StringBuilder stringBuilder2;
        String str = date;
        ParsePosition parsePosition = pos;
        try {
            int offset;
            int year = pos.getIndex();
            int month = year + 4;
            year = parseInt(str, year, month);
            if (checkOffset(str, month, '-')) {
                month++;
            }
            int day = month + 2;
            month = parseInt(str, month, day);
            if (checkOffset(str, day, '-')) {
                day++;
            }
            int offset2 = day + 2;
            day = parseInt(str, day, offset2);
            int hour = 0;
            int minutes = 0;
            int seconds = 0;
            int milliseconds = 0;
            boolean hasT = checkOffset(str, offset2, true);
            if (!hasT) {
                try {
                    if (date.length() <= offset2) {
                        Calendar calendar = new GregorianCalendar(year, month - 1, day);
                        parsePosition.setIndex(offset2);
                        return calendar.getTime();
                    }
                } catch (IndexOutOfBoundsException e2) {
                    e = e2;
                    exception = null;
                    fail = e;
                    if (str == null) {
                        input = null;
                    } else {
                        input = new StringBuilder();
                        input.append('\"');
                        input.append(str);
                        input.append("'");
                        input = input.toString();
                    }
                    msg = fail.getMessage();
                    if (msg != null) {
                        if (!msg.isEmpty()) {
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        }
                    }
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("(");
                    stringBuilder2.append(fail.getClass().getName());
                    stringBuilder2.append(")");
                    msg = stringBuilder2.toString();
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                } catch (NumberFormatException e3) {
                    e = e3;
                    exception = null;
                    fail = e;
                    if (str == null) {
                        input = new StringBuilder();
                        input.append('\"');
                        input.append(str);
                        input.append("'");
                        input = input.toString();
                    } else {
                        input = null;
                    }
                    msg = fail.getMessage();
                    if (msg != null) {
                        if (!msg.isEmpty()) {
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        }
                    }
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("(");
                    stringBuilder2.append(fail.getClass().getName());
                    stringBuilder2.append(")");
                    msg = stringBuilder2.toString();
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                } catch (IllegalArgumentException e4) {
                    e = e4;
                    exception = null;
                    fail = e;
                    if (str == null) {
                        input = null;
                    } else {
                        input = new StringBuilder();
                        input.append('\"');
                        input.append(str);
                        input.append("'");
                        input = input.toString();
                    }
                    msg = fail.getMessage();
                    if (msg != null) {
                        if (!msg.isEmpty()) {
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        }
                    }
                    stringBuilder2 = new StringBuilder();
                    stringBuilder2.append("(");
                    stringBuilder2.append(fail.getClass().getName());
                    stringBuilder2.append(")");
                    msg = stringBuilder2.toString();
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                }
            }
            if (hasT) {
                offset2++;
                offset = offset2 + 2;
                hour = parseInt(str, offset2, offset);
                if (checkOffset(str, offset, ':')) {
                    offset++;
                }
                int offset3 = offset + 2;
                minutes = parseInt(str, offset, offset3);
                if (checkOffset(str, offset3, ':')) {
                    offset2 = offset3 + 1;
                } else {
                    offset2 = offset3;
                }
                if (date.length() > offset2) {
                    char c = str.charAt(offset2);
                    if (c != 'Z' && c != '+' && c != '-') {
                        offset = offset2 + 2;
                        offset2 = parseInt(str, offset2, offset);
                        if (offset2 <= 59 || offset2 >= 63) {
                            seconds = offset2;
                        } else {
                            seconds = 59;
                        }
                        if (checkOffset(str, offset, '.')) {
                            offset++;
                            offset2 = indexOfNonDigit(str, offset + 1);
                            int parseEndOffset = Math.min(offset2, offset + 3);
                            int fraction = parseInt(str, offset, parseEndOffset);
                            switch (parseEndOffset - offset) {
                                case 1:
                                    milliseconds = fraction * 100;
                                    break;
                                case 2:
                                    milliseconds = fraction * 10;
                                    break;
                                default:
                                    milliseconds = fraction;
                                    break;
                            }
                            offset = offset2;
                        }
                    }
                }
                offset = offset2;
            } else {
                offset = offset2;
            }
            boolean z;
            if (date.length() > offset) {
                TimeZone timezone;
                char timezoneIndicator = str.charAt(offset);
                char c2;
                if (timezoneIndicator == 'Z') {
                    timezone = TIMEZONE_UTC;
                    offset++;
                    exception = null;
                    c2 = timezoneIndicator;
                    z = hasT;
                } else {
                    String str2;
                    if (timezoneIndicator == '+') {
                        exception = null;
                    } else if (timezoneIndicator == '-') {
                        exception = null;
                    } else {
                        StringBuilder stringBuilder3 = new StringBuilder();
                        exception = null;
                        try {
                            stringBuilder3.append("Invalid time zone indicator '");
                            stringBuilder3.append(timezoneIndicator);
                            stringBuilder3.append("'");
                            throw new IndexOutOfBoundsException(stringBuilder3.toString());
                        } catch (IndexOutOfBoundsException e5) {
                            e = e5;
                            fail = e;
                            if (str == null) {
                                input = new StringBuilder();
                                input.append('\"');
                                input.append(str);
                                input.append("'");
                                input = input.toString();
                            } else {
                                input = null;
                            }
                            msg = fail.getMessage();
                            if (msg != null) {
                                if (!msg.isEmpty()) {
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Failed to parse date [");
                                    stringBuilder.append(input);
                                    stringBuilder.append("]: ");
                                    stringBuilder.append(msg);
                                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                                    ex.initCause(fail);
                                    throw ex;
                                }
                            }
                            stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("(");
                            stringBuilder2.append(fail.getClass().getName());
                            stringBuilder2.append(")");
                            msg = stringBuilder2.toString();
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        } catch (NumberFormatException e6) {
                            e = e6;
                            fail = e;
                            if (str == null) {
                                input = null;
                            } else {
                                input = new StringBuilder();
                                input.append('\"');
                                input.append(str);
                                input.append("'");
                                input = input.toString();
                            }
                            msg = fail.getMessage();
                            if (msg != null) {
                                if (!msg.isEmpty()) {
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Failed to parse date [");
                                    stringBuilder.append(input);
                                    stringBuilder.append("]: ");
                                    stringBuilder.append(msg);
                                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                                    ex.initCause(fail);
                                    throw ex;
                                }
                            }
                            stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("(");
                            stringBuilder2.append(fail.getClass().getName());
                            stringBuilder2.append(")");
                            msg = stringBuilder2.toString();
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        } catch (IllegalArgumentException e7) {
                            e = e7;
                            fail = e;
                            if (str == null) {
                                input = new StringBuilder();
                                input.append('\"');
                                input.append(str);
                                input.append("'");
                                input = input.toString();
                            } else {
                                input = null;
                            }
                            msg = fail.getMessage();
                            if (msg != null) {
                                if (!msg.isEmpty()) {
                                    stringBuilder = new StringBuilder();
                                    stringBuilder.append("Failed to parse date [");
                                    stringBuilder.append(input);
                                    stringBuilder.append("]: ");
                                    stringBuilder.append(msg);
                                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                                    ex.initCause(fail);
                                    throw ex;
                                }
                            }
                            stringBuilder2 = new StringBuilder();
                            stringBuilder2.append("(");
                            stringBuilder2.append(fail.getClass().getName());
                            stringBuilder2.append(")");
                            msg = stringBuilder2.toString();
                            stringBuilder = new StringBuilder();
                            stringBuilder.append("Failed to parse date [");
                            stringBuilder.append(input);
                            stringBuilder.append("]: ");
                            stringBuilder.append(msg);
                            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                            ex.initCause(fail);
                            throw ex;
                        }
                    }
                    fail = str.substring(offset);
                    if (fail.length() >= 5) {
                        str2 = fail;
                    } else {
                        StringBuilder stringBuilder4 = new StringBuilder();
                        stringBuilder4.append(fail);
                        stringBuilder4.append("00");
                        str2 = stringBuilder4.toString();
                    }
                    String fail2 = str2;
                    offset += fail2.length();
                    String timezoneOffset;
                    if ("+0000".equals(fail2)) {
                        timezoneOffset = fail2;
                        c2 = timezoneIndicator;
                        z = hasT;
                    } else if ("+00:00".equals(fail2)) {
                        timezoneOffset = fail2;
                        c2 = timezoneIndicator;
                        z = hasT;
                    } else {
                        str2 = new StringBuilder();
                        str2.append("GMT");
                        str2.append(fail2);
                        str2 = str2.toString();
                        timezone = TimeZone.getTimeZone(str2);
                        String act = timezone.getID();
                        if (act.equals(str2)) {
                            timezoneOffset = fail2;
                            c2 = timezoneIndicator;
                            z = hasT;
                        } else {
                            timezoneOffset = fail2;
                            fail = act.replace(":", "");
                            if (fail.equals(str2)) {
                                z = hasT;
                            } else {
                                Exception cleaned = fail;
                                fail = new StringBuilder();
                                fail.append("Mismatching time zone indicator: ");
                                fail.append(str2);
                                fail.append(" given, resolves to ");
                                fail.append(timezone.getID());
                                throw new IndexOutOfBoundsException(fail.toString());
                            }
                        }
                    }
                    timezone = TIMEZONE_UTC;
                }
                fail = new GregorianCalendar(timezone);
                fail.setLenient(false);
                fail.set(1, year);
                fail.set(2, month - 1);
                fail.set(5, day);
                fail.set(11, hour);
                fail.set(12, minutes);
                fail.set(13, seconds);
                fail.set(14, milliseconds);
                parsePosition.setIndex(offset);
                return fail.getTime();
            }
            exception = null;
            z = hasT;
            throw new IllegalArgumentException("No time zone indicator");
        } catch (IndexOutOfBoundsException e8) {
            e = e8;
            exception = null;
            fail = e;
            if (str == null) {
                input = null;
            } else {
                input = new StringBuilder();
                input.append('\"');
                input.append(str);
                input.append("'");
                input = input.toString();
            }
            msg = fail.getMessage();
            if (msg != null) {
                if (!msg.isEmpty()) {
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                }
            }
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("(");
            stringBuilder2.append(fail.getClass().getName());
            stringBuilder2.append(")");
            msg = stringBuilder2.toString();
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to parse date [");
            stringBuilder.append(input);
            stringBuilder.append("]: ");
            stringBuilder.append(msg);
            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
            ex.initCause(fail);
            throw ex;
        } catch (NumberFormatException e9) {
            e = e9;
            exception = null;
            fail = e;
            if (str == null) {
                input = new StringBuilder();
                input.append('\"');
                input.append(str);
                input.append("'");
                input = input.toString();
            } else {
                input = null;
            }
            msg = fail.getMessage();
            if (msg != null) {
                if (!msg.isEmpty()) {
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                }
            }
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("(");
            stringBuilder2.append(fail.getClass().getName());
            stringBuilder2.append(")");
            msg = stringBuilder2.toString();
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to parse date [");
            stringBuilder.append(input);
            stringBuilder.append("]: ");
            stringBuilder.append(msg);
            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
            ex.initCause(fail);
            throw ex;
        } catch (IllegalArgumentException e10) {
            e = e10;
            exception = null;
            fail = e;
            if (str == null) {
                input = null;
            } else {
                input = new StringBuilder();
                input.append('\"');
                input.append(str);
                input.append("'");
                input = input.toString();
            }
            msg = fail.getMessage();
            if (msg != null) {
                if (!msg.isEmpty()) {
                    stringBuilder = new StringBuilder();
                    stringBuilder.append("Failed to parse date [");
                    stringBuilder.append(input);
                    stringBuilder.append("]: ");
                    stringBuilder.append(msg);
                    ex = new ParseException(stringBuilder.toString(), pos.getIndex());
                    ex.initCause(fail);
                    throw ex;
                }
            }
            stringBuilder2 = new StringBuilder();
            stringBuilder2.append("(");
            stringBuilder2.append(fail.getClass().getName());
            stringBuilder2.append(")");
            msg = stringBuilder2.toString();
            stringBuilder = new StringBuilder();
            stringBuilder.append("Failed to parse date [");
            stringBuilder.append(input);
            stringBuilder.append("]: ");
            stringBuilder.append(msg);
            ex = new ParseException(stringBuilder.toString(), pos.getIndex());
            ex.initCause(fail);
            throw ex;
        }
    }

    private static boolean checkOffset(String value, int offset, char expected) {
        return offset < value.length() && value.charAt(offset) == expected;
    }

    private static int parseInt(String value, int beginIndex, int endIndex) throws NumberFormatException {
        if (beginIndex < 0 || endIndex > value.length() || beginIndex > endIndex) {
            throw new NumberFormatException(value);
        }
        int i = beginIndex;
        int result = 0;
        int i2;
        if (i < endIndex) {
            i2 = i + 1;
            i = Character.digit(value.charAt(i), 10);
            if (i >= 0) {
                result = -i;
                i = i2;
            } else {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("Invalid number: ");
                stringBuilder.append(value.substring(beginIndex, endIndex));
                throw new NumberFormatException(stringBuilder.toString());
            }
        }
        while (i < endIndex) {
            i2 = i + 1;
            i = Character.digit(value.charAt(i), 10);
            if (i >= 0) {
                result = (result * 10) - i;
                i = i2;
            } else {
                stringBuilder = new StringBuilder();
                stringBuilder.append("Invalid number: ");
                stringBuilder.append(value.substring(beginIndex, endIndex));
                throw new NumberFormatException(stringBuilder.toString());
            }
        }
        return -result;
    }

    private static void padInt(StringBuilder buffer, int value, int length) {
        String strValue = Integer.toString(value);
        for (int i = length - strValue.length(); i > 0; i--) {
            buffer.append('0');
        }
        buffer.append(strValue);
    }

    private static int indexOfNonDigit(String string, int offset) {
        int i = offset;
        while (i < string.length()) {
            char c = string.charAt(i);
            if (c >= '0') {
                if (c <= '9') {
                    i++;
                }
            }
            return i;
        }
        return string.length();
    }
}
