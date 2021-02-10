class CircularQueue {
  constructor(size) {
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    this.queue = new Array(size).fill(null);
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;

      this.write = (this.write + 1) % (this.max + 1);
      return item;
    }

    return null;
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = (this.read + 1) % (this.max + 1);

      return item;
    }

    return null;
  }

  print() {
    return this.queue;
  }
}

module.exports = CircularQueue;
