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

    let nextNodeKey = value <= currentNode.value ? 'left' : 'right';
    if (currentNode[nextNodeKey]) return this.add(value, currentNode[nextNodeKey]);
    currentNode[nextNodeKey] = newNode;
  }
}

module.exports = BinarySearchTree;
