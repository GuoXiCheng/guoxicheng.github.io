export { };

class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private getLeftChildIndex(i: number): number {
        return 2 * i + 1;
    }

    private getRightChildIndex(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    public insert(key: number) {
        this.heap.push(key);
        let index = this.heap.length - 1;
        while (index !== 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    public extractMax(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapify(0);

        return max;
    }

    private heapify(i: number) {
        const left = this.getLeftChildIndex(i);
        const right = this.getRightChildIndex(i);
        let largest = i;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(i, largest);
            this.heapify(largest);
        }
    }
}

function heapSort(arr: number[]): number[] {
    let heap = new MaxHeap();
    for (let num of arr) {
        heap.insert(num);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = heap.extractMax()!;
    }

    return arr;
}

// 示例
const array = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", array);
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);
