class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method
  push(data) {
    // Create the new node passed into the function
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  // pop method
  pop() {
    if (!this.head) return null;

    const poppedNode = this.tail; 
    if (this.length === 1) {
      this.head = null; 
      this.tail = null; 
    } else {
      this.tail = poppedNode.prev; 
      this.tail.next = null; 
    }
    this.length--; 
    return poppedNode; 
}

// let first = new Node(12);
// first.next = new Node(13);
// first.next.prev = first;

// console.log(first);
