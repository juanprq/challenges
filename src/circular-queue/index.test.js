const CircularQueue = require('./index');

describe('CircularQueue', () => {
  let circularQueue;
  beforeEach(() => {
    circularQueue = new CircularQueue(5);
  });

  it('should be instance of CircularQueue', () => {
    expect(circularQueue).toBeInstanceOf(CircularQueue);
  });

  it('should have an enqueue method', () => {
    expect(circularQueue.enqueue).toBeInstanceOf(Function);
  });

  it('should have a dequeue method', () => {
    expect(circularQueue.dequeue).toBeInstanceOf(Function);
  });

  it('should add items to the circular queue', () => {
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);

    expect(circularQueue.print()).toEqual([1, 2, 3, null, null]);
  });

  it('should add items to the circular queue', () => {
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.enqueue(4);
    circularQueue.enqueue(5);
    circularQueue.enqueue(6);
    circularQueue.enqueue(7);

    expect(circularQueue.print()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should dequeue items from the queue', () => {
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.enqueue(4);

    expect(circularQueue.dequeue()).toEqual(1);
    expect(circularQueue.dequeue()).toEqual(2);
    expect(circularQueue.dequeue()).toEqual(3);
  });

  it('should set items to null when dequeued', () => {
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);

    expect(circularQueue.dequeue()).toEqual(1);
    expect(circularQueue.print()).toEqual([null, 2, 3, null, null]);
  });

  it('should not dequeue items past the writer poiner', () => {
    circularQueue.enqueue(1);
    circularQueue.enqueue(2);

    circularQueue.dequeue();
    circularQueue.dequeue();
    expect(circularQueue.dequeue()).toBe(null);
    expect(circularQueue.print()).toEqual([null, null, null, null, null]);
  });
});
