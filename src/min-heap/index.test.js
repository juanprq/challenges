const MinHeap = require('./index');

describe('MinHeap', () => {
  let minHeap;
  beforeEach(() => {
    minHeap = new MinHeap();
  });

  it('should the structure exists', () => {
    expect(minHeap).toBeInstanceOf(MinHeap);
  });

  it('should have the method called insert', () => {
    expect(minHeap.insert).toBeInstanceOf(Function);
  });

  it('should have the method called remove', () => {
    expect(minHeap.remove).toBeInstanceOf(Function);
  });

  it('should have the method called sort', () => {
    expect(minHeap.sort).toBeInstanceOf(Function);
  });

  it('should #sort return the array containing the items in a sorted way', () => {
    minHeap.insert(7);
    minHeap.insert(13);
    minHeap.insert(2);
    minHeap.insert(9);
    minHeap.insert(22);
    minHeap.insert(6);

    expect(minHeap.sort()).toEqual([2, 6, 7, 9, 13, 22]);
  });
});
