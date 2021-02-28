const BinarySearchTree = require('./index');

describe('BinarySearchTree', () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  it('should be a BinarySearchTree', () => {
    expect(binarySearchTree).toBeInstanceOf(BinarySearchTree);
  });


  it('should have the add method', () => {
    expect(binarySearchTree.add).toBeInstanceOf(Function);
  });

  it('should add an element in a sorted way', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    expect(binarySearchTree.root.value).toEqual(2);
    expect(binarySearchTree.root.left.value).toEqual(1);
    expect(binarySearchTree.root.right.value).toEqual(3);
  });

  it('should not add an element that already exists', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);

    expect(binarySearchTree.add(2)).toBe(null);
    expect(binarySearchTree.root.value).toEqual(1);
    expect(binarySearchTree.root.right.value).toEqual(2);
    expect(binarySearchTree.root.right.left).toBe(null);
    expect(binarySearchTree.root.right.right).toBe(null);
  });

  it('should have a findMin method', () => {
    expect(binarySearchTree.findMin).toBeInstanceOf(Function);
  });

  it('should have a findMax method', () => {
    expect(binarySearchTree.findMax).toBeInstanceOf(Function);
  });

  it('should return the minium value of the tree', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);

    expect(binarySearchTree.findMin()).toEqual(1);
  });

  it('should return the maximum value of the tree', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);

    expect(binarySearchTree.findMax()).toEqual(5);
  });

  it('should return null if an empty tree', () => {
    expect(binarySearchTree.findMin()).toBe(null);
    expect(binarySearchTree.findMax()).toBe(null);
  });

  it('should have an isPresent method', () => {
    expect(binarySearchTree.isPresent).toBeInstanceOf(Function);
  });

  it('should return true if an element isPresent', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);

    expect(binarySearchTree.isPresent(2)).toBe(true);
  });

  it('should return false with an empty tree', () => {
    expect(binarySearchTree.isPresent(5)).toBe(false);
  });

  it('should have the findMinHeight method', () => {
    expect(binarySearchTree.findMinHeight).toBeInstanceOf(Function);
  });

  it('should have the findMaxHeight method', () => {
    expect(binarySearchTree.findMaxHeight).toBeInstanceOf(Function);
  });

  it('should have the isBalancedTree', () => {
    expect(binarySearchTree.isBalanced).toBeInstanceOf(Function);
  });

  it('should return the minimum height of the tree', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    expect(binarySearchTree.findMinHeight()).toEqual(1);
  });

  it('should return the maximum height of the tree', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    expect(binarySearchTree.findMaxHeight()).toEqual(4);
  });

  it('should return -1 if is an empty tree', () => {
    expect(binarySearchTree.findMaxHeight()).toEqual(-1);
    expect(binarySearchTree.findMinHeight()).toEqual(-1);
  });

  it('should return false if the tree is unbalanced', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    expect(binarySearchTree.isBalanced()).toBe(false);
  });

  it('should return true if the tree is balanced', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    expect(binarySearchTree.isBalanced()).toBe(true);
  });

  it('should have the inorder method', () => {
    expect(binarySearchTree.inorder).toBeInstanceOf(Function);
  });

  it('should have the preorder method', () => {
    expect(binarySearchTree.preorder).toBeInstanceOf(Function);
  });

  it('should have the postorder method', () => {
    expect(binarySearchTree.postorder).toBeInstanceOf(Function);
  });

  it('should return an array for inorder traversal', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    const result = [1, 2, 3, 4, 5, 6];
    expect(binarySearchTree.inorder()).toEqual(result);
  });


  it('should return an array for preorder traversal', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    const result = [2, 1, 3, 4, 5, 6];
    expect(binarySearchTree.preorder()).toEqual(result);
  });

  it('should return an array for postorder traversal', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(6);

    const result = [1, 6, 5, 4, 3, 2];
    expect(binarySearchTree.postorder()).toEqual(result);
  });

  it('should return null on empty tree', () => {
    expect(binarySearchTree.inorder()).toBe(null);
    expect(binarySearchTree.preorder()).toBe(null);
    expect(binarySearchTree.postorder()).toBe(null);
  });

  it('should have a method called levelOrder', () => {
    expect(binarySearchTree.levelOrder).toBeInstanceOf(Function);
  });

  it('should have a method called reverseLevelOrder', () => {
    expect(binarySearchTree.reverseLevelOrder).toBeInstanceOf(Function);
  });

  it('should return an array of values explored in level order', () => {
    binarySearchTree.add(4);
    binarySearchTree.add(2);
    binarySearchTree.add(6);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(7);

    const result = [4, 2, 6, 1, 3, 5, 7];
    expect(binarySearchTree.levelOrder()).toEqual(result);
  });

  it('should return an array of values explored in reverse level order',  () => {
    binarySearchTree.add(4);
    binarySearchTree.add(2);
    binarySearchTree.add(6);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(7);

    const result = [4, 6, 2, 7, 5, 3, 1];
    expect(binarySearchTree.reverseLevelOrder()).toEqual(result);
  });

  it('should levelOrder return null if an empty tree', () => {
    expect(binarySearchTree.levelOrder()).toBe(null);
  });

  it('should reverseLevelOrder return null if an empty tree', () => {
    expect(binarySearchTree.reverseLevelOrder()).toBe(null);
  });

  it('should have the remove method', () => {
    expect(binarySearchTree.remove).toBeInstanceOf(Function);
  });

  it(`should return true if the element doesn't exits`, () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    expect(binarySearchTree.remove(4)).toBe(null);
  });

  it('should set root to null if no children', () => {
    binarySearchTree.add(2);

    binarySearchTree.remove(2);
    expect(binarySearchTree.root).toBe(null);
  });

  it('should remove leaf nodes from the tree', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    binarySearchTree.remove(1);
    expect(binarySearchTree.root.left).toBe(null);
  });

  it('should remove a node with one child', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);

    binarySearchTree.remove(2);
    expect(binarySearchTree.root.right.value).toEqual(3);
  });

  it('should remove the root node and set the child as root', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);

    binarySearchTree.remove(1);
    expect(binarySearchTree.root.value).toEqual(2);
  });

  it('should remove the root in a tree with two nodes and set the second to be the root', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    binarySearchTree.remove(2);
    expect(binarySearchTree.root.value).toEqual(3);
    expect(binarySearchTree.root.left.value).toEqual(1);
  });

  it('should remove the node with two children while remaining a binary search tree structure', () => {
    binarySearchTree.add(5);
    binarySearchTree.add(10);
    binarySearchTree.add(8);
    binarySearchTree.add(12);
    binarySearchTree.add(6);
    binarySearchTree.add(9);
    binarySearchTree.add(11);
    binarySearchTree.add(13);

    binarySearchTree.remove(10);
    expect(binarySearchTree.root.right.value).toEqual(12);
    expect(binarySearchTree.root.right.left.value).toEqual(11);
    expect(binarySearchTree.root.right.left.left.value).toEqual(8);
  });
});
