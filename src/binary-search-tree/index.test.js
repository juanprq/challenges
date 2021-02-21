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

  // it('should return false with an empty tree', () => {
  //   expect(binarySearchTree.isPresent(5)).toBe(false);
  // });
});
