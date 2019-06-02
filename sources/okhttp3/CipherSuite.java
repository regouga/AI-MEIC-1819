package okhttp3;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class CipherSuite {
    private static final Map<String, CipherSuite> INSTANCES = new LinkedHashMap();
    static final Comparator<String> ORDER_BY_NAME = new C02441();
    public static final CipherSuite TLS_AES_128_CCM_SHA256 = init("TLS_AES_128_CCM_SHA256", 4868);
    public static final CipherSuite TLS_AES_128_GCM_SHA256 = init("TLS_AES_128_GCM_SHA256", 4865);
    public static final CipherSuite TLS_AES_256_CCM_8_SHA256 = init("TLS_AES_256_CCM_8_SHA256", 4869);
    public static final CipherSuite TLS_AES_256_GCM_SHA384 = init("TLS_AES_256_GCM_SHA384", 4866);
    public static final CipherSuite TLS_CHACHA20_POLY1305_SHA256 = init("TLS_CHACHA20_POLY1305_SHA256", 4867);
    public static final CipherSuite TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA = init("SSL_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA", 17);
    public static final CipherSuite TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA = init("SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA", 19);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_128_CBC_SHA = init("TLS_DHE_DSS_WITH_AES_128_CBC_SHA", 50);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_128_CBC_SHA256 = init("TLS_DHE_DSS_WITH_AES_128_CBC_SHA256", 64);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_128_GCM_SHA256 = init("TLS_DHE_DSS_WITH_AES_128_GCM_SHA256", 162);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_256_CBC_SHA = init("TLS_DHE_DSS_WITH_AES_256_CBC_SHA", 56);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_256_CBC_SHA256 = init("TLS_DHE_DSS_WITH_AES_256_CBC_SHA256", 106);
    public static final CipherSuite TLS_DHE_DSS_WITH_AES_256_GCM_SHA384 = init("TLS_DHE_DSS_WITH_AES_256_GCM_SHA384", 163);
    public static final CipherSuite TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA = init("TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA", 68);
    public static final CipherSuite TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA = init("TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA", 135);
    public static final CipherSuite TLS_DHE_DSS_WITH_DES_CBC_SHA = init("SSL_DHE_DSS_WITH_DES_CBC_SHA", 18);
    public static final CipherSuite TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA = init("SSL_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA", 20);
    public static final CipherSuite TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA = init("SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA", 22);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_128_CBC_SHA = init("TLS_DHE_RSA_WITH_AES_128_CBC_SHA", 51);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 = init("TLS_DHE_RSA_WITH_AES_128_CBC_SHA256", 103);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 = init("TLS_DHE_RSA_WITH_AES_128_GCM_SHA256", 158);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_256_CBC_SHA = init("TLS_DHE_RSA_WITH_AES_256_CBC_SHA", 57);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 = init("TLS_DHE_RSA_WITH_AES_256_CBC_SHA256", 107);
    public static final CipherSuite TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 = init("TLS_DHE_RSA_WITH_AES_256_GCM_SHA384", 159);
    public static final CipherSuite TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA = init("TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA", 69);
    public static final CipherSuite TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA = init("TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA", 136);
    public static final CipherSuite TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = init("TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256", 52394);
    public static final CipherSuite TLS_DHE_RSA_WITH_DES_CBC_SHA = init("SSL_DHE_RSA_WITH_DES_CBC_SHA", 21);
    public static final CipherSuite TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA = init("SSL_DH_anon_EXPORT_WITH_DES40_CBC_SHA", 25);
    public static final CipherSuite TLS_DH_anon_EXPORT_WITH_RC4_40_MD5 = init("SSL_DH_anon_EXPORT_WITH_RC4_40_MD5", 23);
    public static final CipherSuite TLS_DH_anon_WITH_3DES_EDE_CBC_SHA = init("SSL_DH_anon_WITH_3DES_EDE_CBC_SHA", 27);
    public static final CipherSuite TLS_DH_anon_WITH_AES_128_CBC_SHA = init("TLS_DH_anon_WITH_AES_128_CBC_SHA", 52);
    public static final CipherSuite TLS_DH_anon_WITH_AES_128_CBC_SHA256 = init("TLS_DH_anon_WITH_AES_128_CBC_SHA256", 108);
    public static final CipherSuite TLS_DH_anon_WITH_AES_128_GCM_SHA256 = init("TLS_DH_anon_WITH_AES_128_GCM_SHA256", 166);
    public static final CipherSuite TLS_DH_anon_WITH_AES_256_CBC_SHA = init("TLS_DH_anon_WITH_AES_256_CBC_SHA", 58);
    public static final CipherSuite TLS_DH_anon_WITH_AES_256_CBC_SHA256 = init("TLS_DH_anon_WITH_AES_256_CBC_SHA256", 109);
    public static final CipherSuite TLS_DH_anon_WITH_AES_256_GCM_SHA384 = init("TLS_DH_anon_WITH_AES_256_GCM_SHA384", 167);
    public static final CipherSuite TLS_DH_anon_WITH_DES_CBC_SHA = init("SSL_DH_anon_WITH_DES_CBC_SHA", 26);
    public static final CipherSuite TLS_DH_anon_WITH_RC4_128_MD5 = init("SSL_DH_anon_WITH_RC4_128_MD5", 24);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA = init("TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA", 49160);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA = init("TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA", 49161);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 = init("TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256", 49187);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 = init("TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", 49195);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA = init("TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA", 49162);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 = init("TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384", 49188);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 = init("TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", 49196);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 = init("TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256", 52393);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_NULL_SHA = init("TLS_ECDHE_ECDSA_WITH_NULL_SHA", 49158);
    public static final CipherSuite TLS_ECDHE_ECDSA_WITH_RC4_128_SHA = init("TLS_ECDHE_ECDSA_WITH_RC4_128_SHA", 49159);
    public static final CipherSuite TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA = init("TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA", 49205);
    public static final CipherSuite TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA = init("TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA", 49206);
    public static final CipherSuite TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256 = init("TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256", 52396);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA = init("TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA", 49170);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA = init("TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", 49171);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 = init("TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256", 49191);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 = init("TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", 49199);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA = init("TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA", 49172);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 = init("TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384", 49192);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 = init("TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", 49200);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = init("TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256", 52392);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_NULL_SHA = init("TLS_ECDHE_RSA_WITH_NULL_SHA", 49168);
    public static final CipherSuite TLS_ECDHE_RSA_WITH_RC4_128_SHA = init("TLS_ECDHE_RSA_WITH_RC4_128_SHA", 49169);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA = init("TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA", 49155);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA = init("TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA", 49156);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256 = init("TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256", 49189);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256 = init("TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256", 49197);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA = init("TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA", 49157);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384 = init("TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384", 49190);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384 = init("TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384", 49198);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_NULL_SHA = init("TLS_ECDH_ECDSA_WITH_NULL_SHA", 49153);
    public static final CipherSuite TLS_ECDH_ECDSA_WITH_RC4_128_SHA = init("TLS_ECDH_ECDSA_WITH_RC4_128_SHA", 49154);
    public static final CipherSuite TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA = init("TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA", 49165);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_128_CBC_SHA = init("TLS_ECDH_RSA_WITH_AES_128_CBC_SHA", 49166);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256 = init("TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256", 49193);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256 = init("TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256", 49201);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_256_CBC_SHA = init("TLS_ECDH_RSA_WITH_AES_256_CBC_SHA", 49167);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384 = init("TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384", 49194);
    public static final CipherSuite TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384 = init("TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384", 49202);
    public static final CipherSuite TLS_ECDH_RSA_WITH_NULL_SHA = init("TLS_ECDH_RSA_WITH_NULL_SHA", 49163);
    public static final CipherSuite TLS_ECDH_RSA_WITH_RC4_128_SHA = init("TLS_ECDH_RSA_WITH_RC4_128_SHA", 49164);
    public static final CipherSuite TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA = init("TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA", 49175);
    public static final CipherSuite TLS_ECDH_anon_WITH_AES_128_CBC_SHA = init("TLS_ECDH_anon_WITH_AES_128_CBC_SHA", 49176);
    public static final CipherSuite TLS_ECDH_anon_WITH_AES_256_CBC_SHA = init("TLS_ECDH_anon_WITH_AES_256_CBC_SHA", 49177);
    public static final CipherSuite TLS_ECDH_anon_WITH_NULL_SHA = init("TLS_ECDH_anon_WITH_NULL_SHA", 49173);
    public static final CipherSuite TLS_ECDH_anon_WITH_RC4_128_SHA = init("TLS_ECDH_anon_WITH_RC4_128_SHA", 49174);
    public static final CipherSuite TLS_EMPTY_RENEGOTIATION_INFO_SCSV = init("TLS_EMPTY_RENEGOTIATION_INFO_SCSV", 255);
    public static final CipherSuite TLS_FALLBACK_SCSV = init("TLS_FALLBACK_SCSV", 22016);
    public static final CipherSuite TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5 = init("TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5", 41);
    public static final CipherSuite TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA = init("TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA", 38);
    public static final CipherSuite TLS_KRB5_EXPORT_WITH_RC4_40_MD5 = init("TLS_KRB5_EXPORT_WITH_RC4_40_MD5", 43);
    public static final CipherSuite TLS_KRB5_EXPORT_WITH_RC4_40_SHA = init("TLS_KRB5_EXPORT_WITH_RC4_40_SHA", 40);
    public static final CipherSuite TLS_KRB5_WITH_3DES_EDE_CBC_MD5 = init("TLS_KRB5_WITH_3DES_EDE_CBC_MD5", 35);
    public static final CipherSuite TLS_KRB5_WITH_3DES_EDE_CBC_SHA = init("TLS_KRB5_WITH_3DES_EDE_CBC_SHA", 31);
    public static final CipherSuite TLS_KRB5_WITH_DES_CBC_MD5 = init("TLS_KRB5_WITH_DES_CBC_MD5", 34);
    public static final CipherSuite TLS_KRB5_WITH_DES_CBC_SHA = init("TLS_KRB5_WITH_DES_CBC_SHA", 30);
    public static final CipherSuite TLS_KRB5_WITH_RC4_128_MD5 = init("TLS_KRB5_WITH_RC4_128_MD5", 36);
    public static final CipherSuite TLS_KRB5_WITH_RC4_128_SHA = init("TLS_KRB5_WITH_RC4_128_SHA", 32);
    public static final CipherSuite TLS_PSK_WITH_3DES_EDE_CBC_SHA = init("TLS_PSK_WITH_3DES_EDE_CBC_SHA", 139);
    public static final CipherSuite TLS_PSK_WITH_AES_128_CBC_SHA = init("TLS_PSK_WITH_AES_128_CBC_SHA", 140);
    public static final CipherSuite TLS_PSK_WITH_AES_256_CBC_SHA = init("TLS_PSK_WITH_AES_256_CBC_SHA", 141);
    public static final CipherSuite TLS_PSK_WITH_RC4_128_SHA = init("TLS_PSK_WITH_RC4_128_SHA", 138);
    public static final CipherSuite TLS_RSA_EXPORT_WITH_DES40_CBC_SHA = init("SSL_RSA_EXPORT_WITH_DES40_CBC_SHA", 8);
    public static final CipherSuite TLS_RSA_EXPORT_WITH_RC4_40_MD5 = init("SSL_RSA_EXPORT_WITH_RC4_40_MD5", 3);
    public static final CipherSuite TLS_RSA_WITH_3DES_EDE_CBC_SHA = init("SSL_RSA_WITH_3DES_EDE_CBC_SHA", 10);
    public static final CipherSuite TLS_RSA_WITH_AES_128_CBC_SHA = init("TLS_RSA_WITH_AES_128_CBC_SHA", 47);
    public static final CipherSuite TLS_RSA_WITH_AES_128_CBC_SHA256 = init("TLS_RSA_WITH_AES_128_CBC_SHA256", 60);
    public static final CipherSuite TLS_RSA_WITH_AES_128_GCM_SHA256 = init("TLS_RSA_WITH_AES_128_GCM_SHA256", 156);
    public static final CipherSuite TLS_RSA_WITH_AES_256_CBC_SHA = init("TLS_RSA_WITH_AES_256_CBC_SHA", 53);
    public static final CipherSuite TLS_RSA_WITH_AES_256_CBC_SHA256 = init("TLS_RSA_WITH_AES_256_CBC_SHA256", 61);
    public static final CipherSuite TLS_RSA_WITH_AES_256_GCM_SHA384 = init("TLS_RSA_WITH_AES_256_GCM_SHA384", 157);
    public static final CipherSuite TLS_RSA_WITH_CAMELLIA_128_CBC_SHA = init("TLS_RSA_WITH_CAMELLIA_128_CBC_SHA", 65);
    public static final CipherSuite TLS_RSA_WITH_CAMELLIA_256_CBC_SHA = init("TLS_RSA_WITH_CAMELLIA_256_CBC_SHA", 132);
    public static final CipherSuite TLS_RSA_WITH_DES_CBC_SHA = init("SSL_RSA_WITH_DES_CBC_SHA", 9);
    public static final CipherSuite TLS_RSA_WITH_NULL_MD5 = init("SSL_RSA_WITH_NULL_MD5", 1);
    public static final CipherSuite TLS_RSA_WITH_NULL_SHA = init("SSL_RSA_WITH_NULL_SHA", 2);
    public static final CipherSuite TLS_RSA_WITH_NULL_SHA256 = init("TLS_RSA_WITH_NULL_SHA256", 59);
    public static final CipherSuite TLS_RSA_WITH_RC4_128_MD5 = init("SSL_RSA_WITH_RC4_128_MD5", 4);
    public static final CipherSuite TLS_RSA_WITH_RC4_128_SHA = init("SSL_RSA_WITH_RC4_128_SHA", 5);
    public static final CipherSuite TLS_RSA_WITH_SEED_CBC_SHA = init("TLS_RSA_WITH_SEED_CBC_SHA", 150);
    final String javaName;

    /* renamed from: okhttp3.CipherSuite$1 */
    class C02441 implements Comparator<String> {
        C02441() {
        }

        /* JADX WARNING: inconsistent code. */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public int compare(java.lang.String r7, java.lang.String r8) {
            /*
            r6 = this;
            r0 = 4;
            r1 = r7.length();
            r2 = r8.length();
            r1 = java.lang.Math.min(r1, r2);
        L_0x000d:
            r2 = -1;
            r3 = 1;
            if (r0 >= r1) goto L_0x0023;
        L_0x0011:
            r4 = r7.charAt(r0);
            r5 = r8.charAt(r0);
            if (r4 == r5) goto L_0x0020;
        L_0x001b:
            if (r4 >= r5) goto L_0x001e;
        L_0x001d:
            goto L_0x001f;
        L_0x001e:
            r2 = 1;
        L_0x001f:
            return r2;
        L_0x0020:
            r0 = r0 + 1;
            goto L_0x000d;
        L_0x0023:
            r0 = r7.length();
            r1 = r8.length();
            if (r0 == r1) goto L_0x0032;
        L_0x002d:
            if (r0 >= r1) goto L_0x0030;
        L_0x002f:
            goto L_0x0031;
        L_0x0030:
            r2 = 1;
        L_0x0031:
            return r2;
        L_0x0032:
            r2 = 0;
            return r2;
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.CipherSuite.1.compare(java.lang.String, java.lang.String):int");
        }
    }

    public static synchronized CipherSuite forJavaName(String javaName) {
        CipherSuite result;
        synchronized (CipherSuite.class) {
            result = (CipherSuite) INSTANCES.get(javaName);
            if (result == null) {
                result = (CipherSuite) INSTANCES.get(secondaryName(javaName));
                if (result == null) {
                    result = new CipherSuite(javaName);
                }
                INSTANCES.put(javaName, result);
            }
        }
        return result;
    }

    private static String secondaryName(String javaName) {
        StringBuilder stringBuilder;
        if (javaName.startsWith("TLS_")) {
            stringBuilder = new StringBuilder();
            stringBuilder.append("SSL_");
            stringBuilder.append(javaName.substring(4));
            return stringBuilder.toString();
        } else if (!javaName.startsWith("SSL_")) {
            return javaName;
        } else {
            stringBuilder = new StringBuilder();
            stringBuilder.append("TLS_");
            stringBuilder.append(javaName.substring(4));
            return stringBuilder.toString();
        }
    }

    static List<CipherSuite> forJavaNames(String... cipherSuites) {
        List<CipherSuite> result = new ArrayList(cipherSuites.length);
        for (String cipherSuite : cipherSuites) {
            result.add(forJavaName(cipherSuite));
        }
        return Collections.unmodifiableList(result);
    }

    private CipherSuite(String javaName) {
        if (javaName != null) {
            this.javaName = javaName;
            return;
        }
        throw new NullPointerException();
    }

    private static CipherSuite init(String javaName, int value) {
        CipherSuite suite = new CipherSuite(javaName);
        INSTANCES.put(javaName, suite);
        return suite;
    }

    public String javaName() {
        return this.javaName;
    }

    public String toString() {
        return this.javaName;
    }
}
