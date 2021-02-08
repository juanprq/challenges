const PriorityQueue = require('./index');

describe('PriorityQueue', () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  it('should be of type PriorityQueue', () => {
    expect(priorityQueue).toBeInstanceOf(PriorityQueue);
  });

  it('should have an enqueue method', () => {
    expect(priorityQueue.enqueue).toBeInstanceOf(Function);
  });

  it('should have a dequeue method', () => {
    expect(priorityQueue.dequeue).toBeInstanceOf(Function);
  });

  it('should have a size method', () => {
    expect(priorityQueue.size).toBeInstanceOf(Function);
  });

  it('should have a front method', () => {
    expect(priorityQueue.front).toBeInstanceOf(Function);
  });

  it('should have an isEmpty method', () => {
    expect(priorityQueue.isEmpty).toBeInstanceOf(Function);
  });

// Your PriorityQueue class should correctly keep track of the current number of items using the size method as items are enqueued and dequeued.

// The front method should return the correct item at the front of the queue as items are enqueued and dequeued.

// The isEmpty method should return true when the queue is empty.

// The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.
});
