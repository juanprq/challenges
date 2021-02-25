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

  findMinHeight() {
    const fn = (currentNode = this.root) => {
      if (currentNode === null) return 0;

      return 1 + Math.min(
        fn(currentNode.left),
        fn(currentNode.right),
      );
    };

    return fn() - 1;
  }

  findMaxHeight() {
    const fn = (currentNode = this.root) => {
      if (currentNode === null) return 0;

      return 1 + Math.max(
        fn(currentNode.left),
        fn(currentNode.right),
      );
    };

    return fn() - 1;
  }

  isBalanced() {
    const min = this.findMinHeight();
    const max = this.findMaxHeight();

    return max - min <= 1;
  }

  inorder() {
    if (!this.root) return null;

    const fn = (current = this.root) => {
      if (!current) return [];

      return [
        ...fn(current.left),
        current.value,
        ...fn(current.right),
      ];
    }

    return fn();
  }

  preorder() {
    if (!this.root) return null;

    const fn = (current = this.root) => {
      if (!current) return [];

      return [
        current.value,
        ...fn(current.left),
        ...fn(current.right),
      ];
    }

    return fn();
  }

  postorder() {
    if (!this.root) return null;

    const fn = (current = this.root) => {
      if (!current) return [];

      return [
        ...fn(current.left),
        ...fn(current.right),
        current.value,
      ];
    }

    return fn();
  }
}

module.exports = BinarySearchTree;
module.exports.Node = Node;
module.exports.displayTree = tree => console.log(JSON.stringify(tree, null, 2));
