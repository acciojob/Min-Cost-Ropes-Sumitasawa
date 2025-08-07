class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.heap[leftIdx];
        if (left < element) swap = leftIdx;
      }

      if (rightIdx < length) {
        right = this.heap[rightIdx];
        if ((swap === null && right < element) || (swap !== null && right < left)) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function mincost(arr) {
  const minHeap = new MinHeap();
  for (let val of arr) minHeap.insert(val);

  let totalCost = 0;

  while (minHeap.size() > 1) {
    let first = minHeap.extractMin();
    let second = minHeap.extractMin();
    let cost = first + second;
    totalCost += cost;
    minHeap.insert(cost);
  }

  return totalCost;
}
