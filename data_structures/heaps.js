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

  extractMax() {
    // [12,39,41,18,27]
    const max = this.values[0];
    const end = this.values.pop();
    // replace the last value with the first
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0; // Starts at he beginning
    const { length } = this.values;
    const currentElement = this.values[0];
    while (true) {
      // Two child indices
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // There is no gurantee I am going to find a child at these indices, may be out of bounds
      let leftChild, rightChild;
      let swapIdx = null; // condition to break out of the loop

      // Check if leftChildIdx is in bounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        // compare to our element
        if (leftChild > currentElement) {
          // variable swapIdx is going to keep track of the position we are going to swapIdx with
          swapIdx = leftChildIdx;
        }
      }

      // check right is a valid index
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > currentElement) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = currentElement;
      idx = swapIdx;
    }
  }
}

class MinBinaryHeap {
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
      if (child >= parent) break;
      // Swap
      this.values[parentIdx] = child;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }

  extractMin() {
    // [12,39,41,18,27]
    const min = this.values[0];
    const end = this.values.pop();
    // replace the last value with the first
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0; // Starts at he beginning
    const { length } = this.values;
    const currentElement = this.values[0];
    while (true) {
      // Two child indices
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // There is no gurantee I am going to find a child at these indices, may be out of bounds
      let leftChild, rightChild;
      let swapIdx = null; // condition to break out of the loop

      // Check if leftChildIdx is in bounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        // compare to our element
        if (leftChild < currentElement) {
          // variable swapIdx is going to keep track of the position we are going to swapIdx with
          swapIdx = leftChildIdx;
        }
      }

      // check right is a valid index
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild < currentElement) ||
          (swapIdx !== null && rightChild < leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = currentElement;
      idx = swapIdx;
    }
  }
}

// const heap = new MinBinaryHeap();
// heap.extractMin();
// console.log(heap);

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIdx = this.values.length - 1;
    const child = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (child.priority >= parent.priority) break;
      // Swap
      this.values[currentIdx] = parent;
      this.values[parentIdx] = child;
      currentIdx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const currentElement = this.values[0];
    const { length } = this.values;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let toSwapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < currentElement.priority) {
          toSwapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (toSwapIdx === null &&
            rightChild.priority < currentElement.priority) ||
          (toSwapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          toSwapIdx = rightChildIdx;
        }
      }
      if (toSwapIdx === null) break; // break while loop condition
      this.values[idx] = this.values[toSwapIdx];
      this.values[toSwapIdx] = currentElement;
      idx = toSwapIdx;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
