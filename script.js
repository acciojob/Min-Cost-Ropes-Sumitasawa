// minCost.js
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
        ) {
            [this.heap[index], this.heap[Math.floor((index - 1) / 2)]] =
                [this.heap[Math.floor((index - 1) / 2)], this.heap[index]];
            index = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[smallest], this.heap[index]] =
                    [this.heap[index], this.heap[smallest]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

function minCost(arr) {
    const heap = new MinHeap();
    for (let num of arr) {
        heap.insert(num);
    }

    let cost = 0;
    while (heap.size() > 1) {
        const min1 = heap.extractMin();
        const min2 = heap.extractMin();
        const sum = min1 + min2;
        cost += sum;
        heap.insert(sum);
    }

    return cost;
}

module.exports = minCost;
