package okio;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;

public final class Options extends AbstractList<ByteString> implements RandomAccess {
    final ByteString[] byteStrings;
    final int[] trie;

    private Options(ByteString[] byteStrings, int[] trie) {
        this.byteStrings = byteStrings;
        this.trie = trie;
    }

    public static Options of(ByteString... byteStrings) {
        if (byteStrings.length == 0) {
            return new Options(new ByteString[0], new int[]{0, -1});
        }
        int i;
        List<ByteString> list = new ArrayList(Arrays.asList(byteStrings));
        Collections.sort(list);
        List<Integer> indexes = new ArrayList();
        for (i = 0; i < list.size(); i++) {
            indexes.add(Integer.valueOf(-1));
        }
        for (i = 0; i < list.size(); i++) {
            indexes.set(Collections.binarySearch(list, byteStrings[i]), Integer.valueOf(i));
        }
        if (((ByteString) list.get(0)).size() != 0) {
            for (int a = 0; a < list.size(); a++) {
                ByteString prefix = (ByteString) list.get(a);
                int b = a + 1;
                while (b < list.size()) {
                    ByteString byteString = (ByteString) list.get(b);
                    if (!byteString.startsWith(prefix)) {
                        break;
                    } else if (byteString.size() == prefix.size()) {
                        StringBuilder stringBuilder = new StringBuilder();
                        stringBuilder.append("duplicate option: ");
                        stringBuilder.append(byteString);
                        throw new IllegalArgumentException(stringBuilder.toString());
                    } else if (((Integer) indexes.get(b)).intValue() > ((Integer) indexes.get(a)).intValue()) {
                        list.remove(b);
                        indexes.remove(b);
                    } else {
                        b++;
                    }
                }
            }
            Buffer trieBytes = new Buffer();
            buildTrieRecursive(0, trieBytes, 0, list, 0, list.size(), indexes);
            int[] trie = new int[intCount(trieBytes)];
            for (i = 0; i < trie.length; i++) {
                trie[i] = trieBytes.readInt();
            }
            if (trieBytes.exhausted()) {
                return new Options((ByteString[]) byteStrings.clone(), trie);
            }
            throw new AssertionError();
        }
        throw new IllegalArgumentException("the empty byte string is not a supported option");
    }

    private static void buildTrieRecursive(long nodeOffset, Buffer node, int byteStringOffset, List<ByteString> byteStrings, int fromIndex, int toIndex, List<Integer> indexes) {
        Buffer buffer = node;
        int i = byteStringOffset;
        List<ByteString> list = byteStrings;
        int fromIndex2 = fromIndex;
        int i2 = toIndex;
        List list2 = indexes;
        if (fromIndex2 < i2) {
            int prefixIndex;
            int fromIndex3;
            ByteString from;
            int prefixIndex2;
            int i3 = fromIndex;
            while (i3 < i2) {
                if (((ByteString) list.get(i3)).size() >= i) {
                    i3++;
                } else {
                    throw new AssertionError();
                }
            }
            ByteString from2 = (ByteString) byteStrings.get(fromIndex);
            ByteString to = (ByteString) list.get(i2 - 1);
            if (i == from2.size()) {
                prefixIndex = ((Integer) list2.get(fromIndex2)).intValue();
                fromIndex2++;
                fromIndex3 = fromIndex2;
                from = (ByteString) list.get(fromIndex2);
                prefixIndex2 = prefixIndex;
            } else {
                fromIndex3 = fromIndex2;
                from = from2;
                prefixIndex2 = -1;
            }
            long childNodesOffset;
            int rangeStart;
            int prefixIndex3;
            if (from.getByte(i) != to.getByte(i)) {
                int i4;
                Buffer childNodes;
                int selectChoiceCount;
                int selectChoiceCount2 = 1;
                for (i3 = fromIndex3 + 1; i3 < i2; i3++) {
                    if (((ByteString) list.get(i3 - 1)).getByte(i) != ((ByteString) list.get(i3)).getByte(i)) {
                        selectChoiceCount2++;
                    }
                }
                childNodesOffset = ((nodeOffset + ((long) intCount(node))) + 2) + ((long) (selectChoiceCount2 * 2));
                buffer.writeInt(selectChoiceCount2);
                buffer.writeInt(prefixIndex2);
                for (fromIndex2 = fromIndex3; fromIndex2 < i2; fromIndex2++) {
                    byte rangeByte = ((ByteString) list.get(fromIndex2)).getByte(i);
                    if (fromIndex2 != fromIndex3) {
                        if (rangeByte == ((ByteString) list.get(fromIndex2 - 1)).getByte(i)) {
                        }
                    }
                    buffer.writeInt(rangeByte & 255);
                }
                Buffer childNodes2 = new Buffer();
                rangeStart = fromIndex3;
                while (rangeStart < i2) {
                    int rangeEnd;
                    List<Integer> prefixIndex4;
                    byte rangeByte2 = ((ByteString) list.get(rangeStart)).getByte(i);
                    fromIndex2 = toIndex;
                    for (i3 = rangeStart + 1; i3 < i2; i3++) {
                        if (rangeByte2 != ((ByteString) list.get(i3)).getByte(i)) {
                            prefixIndex = i3;
                            break;
                        }
                    }
                    prefixIndex = fromIndex2;
                    if (rangeStart + 1 == prefixIndex) {
                        if (i + 1 == ((ByteString) list.get(rangeStart)).size()) {
                            buffer.writeInt(((Integer) list2.get(rangeStart)).intValue());
                            rangeEnd = prefixIndex;
                            byte b = rangeByte2;
                            i4 = rangeStart;
                            childNodes = childNodes2;
                            selectChoiceCount = selectChoiceCount2;
                            prefixIndex3 = prefixIndex2;
                            rangeStart = rangeEnd;
                            childNodes2 = childNodes;
                            prefixIndex2 = prefixIndex3;
                            selectChoiceCount2 = selectChoiceCount;
                            prefixIndex4 = indexes;
                        }
                    }
                    buffer.writeInt((int) ((childNodesOffset + ((long) intCount(childNodes2))) * -1));
                    rangeEnd = prefixIndex;
                    childNodes = childNodes2;
                    selectChoiceCount = selectChoiceCount2;
                    prefixIndex3 = prefixIndex2;
                    buildTrieRecursive(childNodesOffset, childNodes2, i + 1, byteStrings, rangeStart, rangeEnd, indexes);
                    rangeStart = rangeEnd;
                    childNodes2 = childNodes;
                    prefixIndex2 = prefixIndex3;
                    selectChoiceCount2 = selectChoiceCount;
                    prefixIndex4 = indexes;
                }
                i4 = rangeStart;
                childNodes = childNodes2;
                selectChoiceCount = selectChoiceCount2;
                prefixIndex3 = prefixIndex2;
                buffer.write(childNodes, childNodes.size());
                i4 = prefixIndex3;
                prefixIndex3 = indexes;
                return;
            }
            prefixIndex3 = prefixIndex2;
            rangeStart = Math.min(from.size(), to.size());
            prefixIndex2 = 0;
            for (i3 = byteStringOffset; i3 < rangeStart; i3++) {
                if (from.getByte(i3) != to.getByte(i3)) {
                    break;
                }
                prefixIndex2++;
            }
            childNodesOffset = (((nodeOffset + ((long) intCount(node))) + 2) + ((long) prefixIndex2)) + 1;
            buffer.writeInt(-prefixIndex2);
            buffer.writeInt(prefixIndex3);
            for (fromIndex2 = byteStringOffset; fromIndex2 < i + prefixIndex2; fromIndex2++) {
                buffer.writeInt(from.getByte(fromIndex2) & 255);
            }
            if (fromIndex3 + 1 != i2) {
                prefixIndex3 = indexes;
                Buffer childNodes3 = new Buffer();
                buffer.writeInt((int) ((childNodesOffset + ((long) intCount(childNodes3))) * -1));
                fromIndex = childNodes3;
                buildTrieRecursive(childNodesOffset, childNodes3, i + prefixIndex2, byteStrings, fromIndex3, toIndex, indexes);
                buffer.write((Buffer) fromIndex, fromIndex.size());
                return;
            } else if (i + prefixIndex2 == ((ByteString) list.get(fromIndex3)).size()) {
                buffer.writeInt(((Integer) indexes.get(fromIndex3)).intValue());
                return;
            } else {
                prefixIndex3 = indexes;
                throw new AssertionError();
            }
        }
        throw new AssertionError();
    }

    public ByteString get(int i) {
        return this.byteStrings[i];
    }

    public final int size() {
        return this.byteStrings.length;
    }

    private static int intCount(Buffer trieBytes) {
        return (int) (trieBytes.size() / 4);
    }
}
