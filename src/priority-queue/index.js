class PriorityQueue {
  collection = [];

  enqueue = ([item, priority]) => {
    const index = this.collection.findIndex(([, currentPriority]) => currentPriority > priority);
    if (index !== -1) {
      this.collection.splice(index, 0, [item, priority]);
    } else {
      this.collection.push([item, priority]);
    }
  }

  dequeue = () => {
    const item = this.collection.shift();
    if (item) return item[0];
    return null;
  }

  size = () => {
    return this.collection.length;
  }

  front = () => {
    const item = this.collection[0];
    if (item) return item[0];
    return null;
  }


  isEmpty = () => {
    return this.size() === 0;
  }
}

module.exports = PriorityQueue;
