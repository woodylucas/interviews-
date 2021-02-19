class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        this.left.contains(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        this.right.contains(value);
      }
    }
  }
  depthFirstTraversal(iteratorFn, order) {
    // Pre-order
    if (order === 'pre-order') iteratorFn(this.value); // Making a copy of a tree
    if (this.left) this.left.depthFirstTraversal(iteratorFn, order);
    if (order === "in-order") iteratorFn(this.value); // In-order 
    if (this.right) this.right.depthFirstTraversal(iteratorFn, order);
    if (order === 'post-order').depthFirstTraversal(iteratorFn, order); // Delete Nodes 
  }

  breadthFirstTraversal(iteratorFn) {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift(); 
      if (node === null) continue; 
      iteratorFn(node); 
      if (node.left) queue.push(node.left); 
      if (node.right) queue.push(node.right); 
    } 
  }

  getMinValue() {
    if (this.left) {
      return this.left.getMinValue(); 
    } else {
      return this.value; 
    }
  }

  getMaxValue() {
    if (this.right) {
      return this.right.getMaxValue(); 
    } else {
      return this.value; 
    }
  }
}

const bst = new BinarySearchTree(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);
console.log(bst.depthFirstTraversal(log));

function log(value) {
  console.log(value);
}
