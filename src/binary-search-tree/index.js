const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

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

  levelOrder() {
    if (!this.root) return null;

    const queue = [this.root];
    const result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  reverseLevelOrder() {
    if (!this.root) return null;

    const queue = [this.root];
    const result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }

    return result;
  }

  remove(value) {
    let current = this.root;
    let parent;

    while (current && current.value !== value) {
      parent = current;
      const key = value < current.value ? 'left' : 'right';
      current = current[key];

    }

    if (!current) return null;

    const children = (current.left ? 1 : 0) + (current.right ? 1 : 0);
    if (current === this.root) {
      if (children > 1) {
        current.right.left = current.left;
        this.root = current.right;
      } else {
        this.root = current.left || current.right;
      }
    } else {
      if (children > 1) {
        parent.right = current.right

        let leftPosition = current.right.left;
        while (leftPosition.left) {
          leftPosition = leftPosition.left;
        }

        leftPosition.left = current.left;
      } else {
        const key = value < parent.value ? 'left' : 'right';
        parent[key] = current.left || current.right;
      }
    }

    current.left = null;
    current.right = null;

    return current;
  }
}

module.exports = BinarySearchTree;
module.exports.Node = Node;
module.exports.displayTree = displayTree;
