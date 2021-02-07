class Queue {
  collection = [];

  enqueue = (value) => {
    this.collection.push(value);
  }

  dequeue = () => {
    return this.collection.shift();
  }

  front = () => {
    return this.collection[0];
  }

  size = () => {
    return this.collection.length;
  }

  isEmpty = () => {
    return this.size() === 0;
  }
}

module.exports = Queue;
