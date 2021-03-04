const MaxHeap = require('./index');

describe('MaxHeap', () => {
  let maxHeap;
  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  it('should exist', () => {
    expect(maxHeap).toBeInstanceOf(MaxHeap);
  });

  it('should have a method called insert', () => {
    expect(maxHeap.insert).toBeInstanceOf(Function);
  });

  it('should have a method called print', () => {
    expect(maxHeap.print).toBeInstanceOf(Function);
  });

  it('should insert according to max heap property', () => {
    maxHeap.insert(30);
    maxHeap.insert(20);
    maxHeap.insert(28);
    maxHeap.insert(31);

    const result = [31, 30, 28, 20];
    expect(maxHeap.print()).toEqual(result);
  });

  it('should have a method called remove', () => {
    expect(maxHeap.remove).toBeInstanceOf(Function);
  });

  it('should remove the gratest element of the heap while maintaining the max heap property', () => {
    maxHeap.insert(30);
    maxHeap.insert(20);
    maxHeap.insert(28);
    maxHeap.insert(31);

    expect(maxHeap.remove()).toEqual(31);
    expect(maxHeap.remove()).toEqual(30);
    expect(maxHeap.print()).toEqual([28, 20]);
  });

  it('should remove and re-arrange the heap maintaining the max heap property', () => {
    maxHeap.insert(10);
    maxHeap.insert(9);
    maxHeap.insert(8);
    maxHeap.insert(7);
    maxHeap.insert(6);
    maxHeap.insert(5);
    maxHeap.insert(4);
    maxHeap.insert(3);
    maxHeap.insert(2);
    maxHeap.insert(1);

    expect(maxHeap.remove()).toEqual(10);
    expect(maxHeap.print()).toEqual([9, 7, 8, 3, 6, 5, 4, 1, 2]);
  });
});
