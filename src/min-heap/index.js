class MinHeap {
  heap = [null];

  insert(value) {
    let index = this.heap.length;
    let parentIndex = Math.floor(index / 2);
    this.heap.push(value);

    while (index > 1 && this.heap[parentIndex] > this.heap[index]) {
      const aux = this.heap[index];
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = aux;

      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) return null;

    const result = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let index = 1;
    let test = 1;
    while (
      index * 2 < this.heap.length
      && (
        this.heap[index * 2] < this.heap[index]
        || this.heap[index * 2 + 1] < this.heap[index]
      )
    ) {
      const childIndex = this.heap[index * 2] < (this.heap[index * 2 + 1] || Infinity) ?
        index * 2 : index * 2 + 1;

      const aux = this.heap[index];
      this.heap[index] = this.heap[childIndex];
      this.heap[childIndex] = aux;

      index = childIndex;

      test++;

      if (test > 10) throw new Error('dry!');
    }

    return result;
  }

  sort() {
    const result = [];
    while (this.heap.length > 1) {
      result.push(this.remove());
    }

    return result;
  }
}

module.exports = MinHeap;
