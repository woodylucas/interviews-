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
  }

  // push method
}

let first = new Node(12);
first.next = new Node(13);
first.next.prev = first;

console.log(first);
