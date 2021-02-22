const BinarySearchTree = require('../binary-search-tree');
const { Node } = require('../binary-search-tree');
const isBinarySearchTree = require('./index');

describe('isBinarySearchTree', () => {
  it('should be a function', () => {
    expect(isBinarySearchTree).toBeInstanceOf(Function);
  });

  it('should return true if the tree is a binary search tree', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node3.left = node2;
    node2.left = node1;
    node3.right = node4;
    node4.right = node5;

    const tree = new BinarySearchTree();
    tree.root = node3;
    expect(isBinarySearchTree(tree)).toBe(true);
  });

  it('should return false if the tree is not a binary search tree', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.left = node5;
    node1.right = node2;
    node5.left = node4
    node5.right = node3;

    const tree = new BinarySearchTree();
    tree.root = node1;
    expect(isBinarySearchTree(tree)).toBe(false);
  });
});
