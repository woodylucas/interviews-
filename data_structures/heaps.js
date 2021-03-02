class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // Insert input takes in a value
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // Bubble Up
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    let child = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (child <= parent) break;
      // Swap
      this.values[parentIdx] = child;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(40);
console.log(heap);
