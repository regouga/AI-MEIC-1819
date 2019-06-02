package org.apache.cordova;

import org.apache.cordova.PluginResult.Status;

class NativeToJsMessageQueue$JsMessage {
    final String jsPayloadOrCallbackId;
    final PluginResult pluginResult;

    NativeToJsMessageQueue$JsMessage(String js) {
        if (js != null) {
            this.jsPayloadOrCallbackId = js;
            this.pluginResult = null;
            return;
        }
        throw new NullPointerException();
    }

    NativeToJsMessageQueue$JsMessage(PluginResult pluginResult, String callbackId) {
        if (callbackId == null || pluginResult == null) {
            throw new NullPointerException();
        }
        this.jsPayloadOrCallbackId = callbackId;
        this.pluginResult = pluginResult;
    }

    static int calculateEncodedLengthHelper(PluginResult pluginResult) {
        int messageType = pluginResult.getMessageType();
        if (messageType == 1) {
            return pluginResult.getStrMessage().length() + 1;
        }
        switch (messageType) {
            case 3:
                return pluginResult.getMessage().length() + 1;
            case 4:
            case 5:
                return 1;
            case 6:
                return pluginResult.getMessage().length() + 1;
            case 7:
                return pluginResult.getMessage().length() + 1;
            case 8:
                messageType = 1;
                for (int i = 0; i < pluginResult.getMultipartMessagesSize(); i++) {
                    int length = calculateEncodedLengthHelper(pluginResult.getMultipartMessage(i));
                    messageType += (String.valueOf(length).length() + 1) + length;
                }
                return messageType;
            default:
                return pluginResult.getMessage().length();
        }
    }

    int calculateEncodedLength() {
        PluginResult pluginResult = this.pluginResult;
        if (pluginResult == null) {
            return this.jsPayloadOrCallbackId.length() + 1;
        }
        return calculateEncodedLengthHelper(this.pluginResult) + ((((String.valueOf(pluginResult.getStatus()).length() + 2) + 1) + this.jsPayloadOrCallbackId.length()) + 1);
    }

    static void encodeAsMessageHelper(StringBuilder sb, PluginResult pluginResult) {
        int messageType = pluginResult.getMessageType();
        if (messageType != 1) {
            switch (messageType) {
                case 3:
                    sb.append('n');
                    sb.append(pluginResult.getMessage());
                    return;
                case 4:
                    sb.append(pluginResult.getMessage().charAt(0));
                    return;
                case 5:
                    sb.append('N');
                    return;
                case 6:
                    sb.append('A');
                    sb.append(pluginResult.getMessage());
                    return;
                case 7:
                    sb.append('S');
                    sb.append(pluginResult.getMessage());
                    return;
                case 8:
                    sb.append('M');
                    for (messageType = 0; messageType < pluginResult.getMultipartMessagesSize(); messageType++) {
                        PluginResult multipartMessage = pluginResult.getMultipartMessage(messageType);
                        sb.append(String.valueOf(calculateEncodedLengthHelper(multipartMessage)));
                        sb.append(' ');
                        encodeAsMessageHelper(sb, multipartMessage);
                    }
                    return;
                default:
                    sb.append(pluginResult.getMessage());
                    return;
            }
        }
        sb.append('s');
        sb.append(pluginResult.getStrMessage());
    }

    void encodeAsMessage(StringBuilder sb) {
        int status = this.pluginResult;
        if (status == 0) {
            sb.append('J');
            sb.append(this.jsPayloadOrCallbackId);
            return;
        }
        char c;
        status = status.getStatus();
        boolean resultOk = true;
        boolean noResult = status == Status.NO_RESULT.ordinal();
        if (status != Status.OK.ordinal()) {
            resultOk = false;
        }
        boolean keepCallback = this.pluginResult.getKeepCallback();
        if (!noResult) {
            if (!resultOk) {
                c = 'F';
                sb.append(c);
                sb.append(keepCallback ? '1' : '0');
                sb.append(status);
                sb.append(' ');
                sb.append(this.jsPayloadOrCallbackId);
                sb.append(' ');
                encodeAsMessageHelper(sb, this.pluginResult);
            }
        }
        c = 'S';
        sb.append(c);
        if (keepCallback) {
        }
        sb.append(keepCallback ? '1' : '0');
        sb.append(status);
        sb.append(' ');
        sb.append(this.jsPayloadOrCallbackId);
        sb.append(' ');
        encodeAsMessageHelper(sb, this.pluginResult);
    }

    void buildJsMessage(StringBuilder sb) {
        switch (this.pluginResult.getMessageType()) {
            case 5:
                sb.append("null");
                return;
            case 6:
                sb.append("cordova.require('cordova/base64').toArrayBuffer('");
                sb.append(this.pluginResult.getMessage());
                sb.append("')");
                return;
            case 7:
                sb.append("atob('");
                sb.append(this.pluginResult.getMessage());
                sb.append("')");
                return;
            case 8:
                int size = this.pluginResult.getMultipartMessagesSize();
                for (int i = 0; i < size; i++) {
                    new NativeToJsMessageQueue$JsMessage(this.pluginResult.getMultipartMessage(i), this.jsPayloadOrCallbackId).buildJsMessage(sb);
                    if (i < size - 1) {
                        sb.append(",");
                    }
                }
                return;
            default:
                sb.append(this.pluginResult.getMessage());
                return;
        }
    }

    void encodeAsJsMessage(StringBuilder sb) {
        int status = this.pluginResult;
        if (status == 0) {
            sb.append(this.jsPayloadOrCallbackId);
            return;
        }
        boolean success;
        status = status.getStatus();
        if (status != Status.OK.ordinal()) {
            if (status != Status.NO_RESULT.ordinal()) {
                success = false;
                sb.append("cordova.callbackFromNative('");
                sb.append(this.jsPayloadOrCallbackId);
                sb.append("',");
                sb.append(success);
                sb.append(",");
                sb.append(status);
                sb.append(",[");
                buildJsMessage(sb);
                sb.append("],");
                sb.append(this.pluginResult.getKeepCallback());
                sb.append(");");
            }
        }
        success = true;
        sb.append("cordova.callbackFromNative('");
        sb.append(this.jsPayloadOrCallbackId);
        sb.append("',");
        sb.append(success);
        sb.append(",");
        sb.append(status);
        sb.append(",[");
        buildJsMessage(sb);
        sb.append("],");
        sb.append(this.pluginResult.getKeepCallback());
        sb.append(");");
    }
}
