package android.support.v4.util;

public final class CircularArray<E> {
    private int mCapacityBitmask;
    private E[] mElements;
    private int mHead;
    private int mTail;

    private void doubleCapacity() {
        Object obj = this.mElements;
        int n = obj.length;
        int i = this.mHead;
        int r = n - i;
        int newCapacity = n << 1;
        if (newCapacity >= 0) {
            Object[] a = new Object[newCapacity];
            System.arraycopy(obj, i, a, 0, r);
            System.arraycopy(this.mElements, 0, a, r, this.mHead);
            this.mElements = a;
            this.mHead = 0;
            this.mTail = n;
            this.mCapacityBitmask = newCapacity - 1;
            return;
        }
        throw new RuntimeException("Max array capacity exceeded");
    }

    public CircularArray() {
        this(8);
    }

    public CircularArray(int minCapacity) {
        if (minCapacity < 1) {
            throw new IllegalArgumentException("capacity must be >= 1");
        } else if (minCapacity <= 1073741824) {
            int arrayCapacity;
            if (Integer.bitCount(minCapacity) != 1) {
                arrayCapacity = Integer.highestOneBit(minCapacity - 1) << 1;
            } else {
                arrayCapacity = minCapacity;
            }
            this.mCapacityBitmask = arrayCapacity - 1;
            this.mElements = new Object[arrayCapacity];
        } else {
            throw new IllegalArgumentException("capacity must be <= 2^30");
        }
    }

    public void addFirst(E e) {
        this.mHead = (this.mHead - 1) & this.mCapacityBitmask;
        Object[] objArr = this.mElements;
        int i = this.mHead;
        objArr[i] = e;
        if (i == this.mTail) {
            doubleCapacity();
        }
    }

    public void addLast(E e) {
        Object[] objArr = this.mElements;
        int i = this.mTail;
        objArr[i] = e;
        this.mTail = this.mCapacityBitmask & (i + 1);
        if (this.mTail == this.mHead) {
            doubleCapacity();
        }
    }

    public E popFirst() {
        int i = this.mHead;
        if (i != this.mTail) {
            Object[] objArr = this.mElements;
            E result = objArr[i];
            objArr[i] = null;
            this.mHead = (i + 1) & this.mCapacityBitmask;
            return result;
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public E popLast() {
        int i = this.mHead;
        int i2 = this.mTail;
        if (i != i2) {
            i = this.mCapacityBitmask & (i2 - 1);
            Object[] objArr = this.mElements;
            E result = objArr[i];
            objArr[i] = null;
            this.mTail = i;
            return result;
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public void clear() {
        removeFromStart(size());
    }

    public void removeFromStart(int numOfElements) {
        if (numOfElements > 0) {
            if (numOfElements <= size()) {
                int end = this.mElements.length;
                int i = this.mHead;
                if (numOfElements < end - i) {
                    end = i + numOfElements;
                }
                for (i = this.mHead; i < end; i++) {
                    this.mElements[i] = null;
                }
                i = this.mHead;
                int removed = end - i;
                numOfElements -= removed;
                this.mHead = (i + removed) & this.mCapacityBitmask;
                if (numOfElements > 0) {
                    for (i = 0; i < numOfElements; i++) {
                        this.mElements[i] = null;
                    }
                    this.mHead = numOfElements;
                }
                return;
            }
            throw new ArrayIndexOutOfBoundsException();
        }
    }

    public void removeFromEnd(int numOfElements) {
        if (numOfElements > 0) {
            if (numOfElements <= size()) {
                int i;
                int start = 0;
                int i2 = this.mTail;
                if (numOfElements < i2) {
                    start = i2 - numOfElements;
                }
                i2 = start;
                while (true) {
                    i = this.mTail;
                    if (i2 >= i) {
                        break;
                    }
                    this.mElements[i2] = null;
                    i2++;
                }
                i2 = i - start;
                numOfElements -= i2;
                this.mTail = i - i2;
                if (numOfElements > 0) {
                    this.mTail = this.mElements.length;
                    i = this.mTail - numOfElements;
                    for (int i3 = i; i3 < this.mTail; i3++) {
                        this.mElements[i3] = null;
                    }
                    this.mTail = i;
                }
                return;
            }
            throw new ArrayIndexOutOfBoundsException();
        }
    }

    public E getFirst() {
        int i = this.mHead;
        if (i != this.mTail) {
            return this.mElements[i];
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public E getLast() {
        int i = this.mHead;
        int i2 = this.mTail;
        if (i != i2) {
            return this.mElements[(i2 - 1) & this.mCapacityBitmask];
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public E get(int n) {
        if (n >= 0 && n < size()) {
            return this.mElements[(this.mHead + n) & this.mCapacityBitmask];
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public int size() {
        return (this.mTail - this.mHead) & this.mCapacityBitmask;
    }

    public boolean isEmpty() {
        return this.mHead == this.mTail;
    }
}
