class PriorityQueue {
  collection = [];

  enqueue = ([item, priority]) => {
    this.collection.push([item, priority]);
  }

  dequeue = () => {
    const frontItem = this.front();
    let frontItemIndex;
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][0] === frontItem) {
        frontItemIndex = i;
        break;
      }
    }

    if (frontItemIndex !== undefined) {
      this.collection = this.collection.slice(0, frontItemIndex).concat(this.collection.slice(frontItemIndex + 1));
    }

    return frontItem;
  }

  size = () => {
    return this.collection.length;
  }

  front = () => {
    const [item] = this.collection
      .reduce((minPriority, current) => {
        if (current[1] < minPriority[1]) return current;
        return minPriority;
      });

    return item;
  }


  isEmpty = () => {
    return this.size() === 0;
  }
}

module.exports = PriorityQueue;
