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
});