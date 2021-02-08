class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add method:
  add(data) {
    this.children.push(new Node(data));
  }
  // remove method:
  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(data) {
    this.root = null;
  }
  // breadth first traversal
}
