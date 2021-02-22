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

  findMin() {
    if (!this.root) return null;

    let current = this.root;
    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  findMax() {
    if (!this.root) return null;

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }

  isPresent(value) {
    let current = this.root;

    while (current && current.value !== value) {
      current = value <= current.value ? current.left : current.right;
    }

    return !!current;
  }
}

module.exports = BinarySearchTree;
module.exports.Node = Node;
module.exports.displayTree = tree => console.log(JSON.stringify(tree, null, 2));
