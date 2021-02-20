module.exports.displayTree = tree => console.log(JSON.stringify(tree, null, 2));

class Node {
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  root = null;

  add(value, currentNode = this.root) {
    const newNode = new Node(value);

    if (currentNode === null) {
      this.root = newNode;
      return;
    }
    if (currentNode.value === value) {
      return null;
    }

    if (value <= currentNode.value) {
      if (currentNode.left) return this.add(value, currentNode.left);
      currentNode.left = newNode;
    } else {
      if (currentNode.right) return this.add(value, currentNode.right);
      currentNode.right = newNode;
    }
  }
}

module.exports = BinarySearchTree;
