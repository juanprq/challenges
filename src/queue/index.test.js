const Queue = require('./index');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('should be an instance of Queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should have a enqueue method', () => {
    expect(queue.enqueue).toBeInstanceOf(Function);
  });

  it('should have a dequeue method', () => {
    expect(queue.dequeue).toBeInstanceOf(Function);
  });

  it('should have a front method', () => {
    expect(queue.front).toBeInstanceOf(Function);
  });

  it('should have a size method', () => {
    expect(queue.size).toBeInstanceOf(Function);
  });

  it('should have an isEmpty method', () => {
    expect(queue.isEmpty).toBeInstanceOf(Function);
  });

  it('should dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  it('should return front element', () => {
    queue.enqueue(1);
    expect(queue.front()).toEqual(1);
    expect(queue.front()).toEqual(1);

    queue.enqueue(2);
    expect(queue.front()).toEqual(1);

    queue.dequeue();
    expect(queue.front()).toEqual(2);
  });

  it('should return size', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toEqual(3);
    queue.enqueue(4);
    expect(queue.size()).toEqual(4);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toEqual(2);
  });

  it("should return if it's empty", () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

});
