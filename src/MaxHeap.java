public class MaxHeap <T extends Comparable<T>> {
    private T[] heap;
    private int size;
    private int capacity;

    public MaxHeap(int capacity) {
        this.heap = (T[]) new Comparable[capacity + 1];
        this.size = 0;
        this.capacity = capacity;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    private void growHeap() {
        T[] temp = (T[]) new Comparable[capacity*2 + 1];

        for (int i = 1; i < this.capacity + 1; i++) {
            temp[i] = (heap[i]);
        }

        this.capacity = capacity*2;
        this.heap = temp;
    }

    public void insert(T value) {
        if (isFull()) {
            growHeap();
        }
        size++;
        heap[size] = value;
        bubbleUp(size);
    }

    public T remove() {
        if (isEmpty()) {
            System.out.println("Priority queue is empty'");
            return null;
        }
        T max = heap[1];
        heap[1] = heap[size];
        heap[size] = null;
        size--;
        bubbleDown(1);
        return max;
    }

    private void bubbleUp(int index) {
        while (index > 1 && (heap[index].compareTo(heap[index/2]) < 0) ) {
            swap(index, index/2);
            index = index/2;
        }
    }

    private void bubbleDown(int index) {
        int maxIndex = index;
        int leftChild = 2*index;
        int rightChild = 2*index + 1;

        if (leftChild <=  size && (heap[maxIndex].compareTo(heap[leftChild]) < 0) ) {
            maxIndex = leftChild;
        }
        if (rightChild <= size && (heap[maxIndex].compareTo(heap[rightChild]) < 0) ) {
            maxIndex = rightChild;
        }

        if (index != maxIndex){
            swap(index,maxIndex);
            bubbleDown(maxIndex);
        }
    }

    private void swap(int i, int j) {
        T temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    @Override
    public String toString() {
        String content = "";
        if (size == 0) {
            return "Heap is empty.";
        }
        for (int i = 0; i <= size; i++) {
            content = content + heap[i] + ", ";
        }
        return content;
    }
}
