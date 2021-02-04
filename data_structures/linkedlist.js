/* 

A Linked List is an ordered collection of data, the collection contains an ordered number of nodes.

Node contains some amount of data, and reference to the next node. 


Chain of nodes: ordered that is always maintained 


2 special Nodes: Head(first) & Tail(last)


*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insertFirst method: takes in one argument
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  // size method
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  // getFirst return the first node
  getFirst() {
    return this.head;
  }
  // getLast method: retrieves the last node in our linked list
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      // IF there is not a next node reference, return the current node--it is the last node.
      if (!node.next) return node;
      node = node.next;
    }
  }
  // Clear method: clear the list
  clear() {
    this.head = null;
  }

  // remove first method:
  removeFirst() {
    // EDGE CASE:
    if (!this.head) return;
    let nextNode = this.head.next; // reference to the next node
    this.head = nextNode;
  }

  // REMOVE LAST method:
  removeLast() {
    // IF the head doesn't exist break
    if (!this.head) return;
    let previous = this.head;
    let current = this.head.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
  // Insert last
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // Existing nodes in our chain
      last.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  }

  getAt(idx) {
    const node = this.head;
    let counter = 0;
    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
}

const list = new LinkedList();

list.insertLast("green");
list.insertLast("blue");
list.insertLast("green");
list.insertLast("red");
list.insertLast("orange");
list.insertLast("purple");

/* 

S
green -> blue -> green -> red -> orange -> purple
                  F
  
*/
function midpoint(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// console.log(midpoint(list));
