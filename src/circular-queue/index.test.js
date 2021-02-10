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
// The enqueue method should add items to the circular queue.

// You should not enqueue items past the read pointer.

// The dequeue method should dequeue items from the queue.

// After an item is dequeued, its position in the queue should be reset to null.

// Trying to dequeue past the write pointer should return null and does not advance the write pointer.
});
