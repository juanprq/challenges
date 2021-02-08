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

  it('should keep track of the current number of items enqueued', () => {
    priorityQueue.enqueue(['coin', 1]);
    priorityQueue.enqueue(['stick', 2]);
    priorityQueue.enqueue(['pencil', 1]);

    expect(priorityQueue.size()).toEqual(3);

    priorityQueue.dequeue();
    expect(priorityQueue.size()).toEqual(2);

    priorityQueue.dequeue();
    expect(priorityQueue.size()).toEqual(1);
  });

  it('should return correct item in the front method', () => {
    priorityQueue.enqueue(['coin', 1]);
    priorityQueue.enqueue(['stick', 2]);
    priorityQueue.enqueue(['pencil', 1]);

    expect(priorityQueue.front()).toEqual('coin');
    priorityQueue.dequeue();
    expect(priorityQueue.front()).toEqual('pencil');
  });

  it('should return true if the queue is empty', () => {
    expect(priorityQueue.isEmpty()).toBe(true);

    priorityQueue.enqueue(['test', 1]);
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  it('should return items with a higher priority before items with lower priority and return items in fifo', () => {
    priorityQueue.enqueue(['coin', 1]);
    priorityQueue.enqueue(['stick', 2]);
    priorityQueue.enqueue(['pencil', 1]);

    expect(priorityQueue.dequeue()).toEqual('coin');
    expect(priorityQueue.dequeue()).toEqual('pencil');
    expect(priorityQueue.dequeue()).toEqual('stick');
  });
});
