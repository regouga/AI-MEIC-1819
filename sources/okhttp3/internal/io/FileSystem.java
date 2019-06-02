package okhttp3.internal.io;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import okio.Okio;
import okio.Sink;
import okio.Source;

public interface FileSystem {
    public static final FileSystem SYSTEM = new C03631();

    /* renamed from: okhttp3.internal.io.FileSystem$1 */
    class C03631 implements FileSystem {
        C03631() {
        }

        public Source source(File file) throws FileNotFoundException {
            return Okio.source(file);
        }

        public Sink sink(File file) throws FileNotFoundException {
            try {
                return Okio.sink(file);
            } catch (FileNotFoundException e) {
                file.getParentFile().mkdirs();
                return Okio.sink(file);
            }
        }

        public Sink appendingSink(File file) throws FileNotFoundException {
            try {
                return Okio.appendingSink(file);
            } catch (FileNotFoundException e) {
                file.getParentFile().mkdirs();
                return Okio.appendingSink(file);
            }
        }

        public void delete(File file) throws IOException {
            if (!file.delete()) {
                if (file.exists()) {
                    StringBuilder stringBuilder = new StringBuilder();
                    stringBuilder.append("failed to delete ");
                    stringBuilder.append(file);
                    throw new IOException(stringBuilder.toString());
                }
            }
        }

        public boolean exists(File file) {
            return file.exists();
        }

        public long size(File file) {
            return file.length();
        }

        public void rename(File from, File to) throws IOException {
            delete(to);
            if (!from.renameTo(to)) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("failed to rename ");
                stringBuilder.append(from);
                stringBuilder.append(" to ");
                stringBuilder.append(to);
                throw new IOException(stringBuilder.toString());
            }
        }

        public void deleteContents(File directory) throws IOException {
            File[] files = directory.listFiles();
            if (files != null) {
                int length = files.length;
                int i = 0;
                while (i < length) {
                    File file = files[i];
                    if (file.isDirectory()) {
                        deleteContents(file);
                    }
                    if (file.delete()) {
                        i++;
                    } else {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("failed to delete ");
                        stringBuilder.append(file);
                        throw new IOException(stringBuilder.toString());
                    }
                }
                return;
            }
            stringBuilder = new StringBuilder();
            stringBuilder.append("not a readable directory: ");
            stringBuilder.append(directory);
            throw new IOException(stringBuilder.toString());
        }
    }

    Sink appendingSink(File file) throws FileNotFoundException;

    void delete(File file) throws IOException;

    void deleteContents(File file) throws IOException;

    boolean exists(File file);

    void rename(File file, File file2) throws IOException;

    Sink sink(File file) throws FileNotFoundException;

    long size(File file);

    Source source(File file) throws FileNotFoundException;
}
