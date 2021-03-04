class MaxHeap {
  heap = [null];

  insert(value) {
    let index = this.heap.length;
    let parentIndex = Math.floor(index / 2);
    this.heap.push(value);

    while (parentIndex > 0 && this.heap[parentIndex] < value) {
      const aux = this.heap[index];
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = aux;

      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  remove() {
    const result = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let index = 1;
    while (
      index < this.heap.length - 1
      && (
        this.heap[index * 2] > this.heap[index]
        || this.heap[index * 2 + 1] > this.heap[index]
      )
    ) {
      const aux = this.heap[index];
      let childIndex = index * 2;
      if (this.heap[childIndex] < this.heap[childIndex + 1]) childIndex++;

      this.heap[index] = this.heap[childIndex];
      this.heap[childIndex] = aux;

      index = childIndex;
    }

    return result;
  }

  print() {
    return this.heap.slice(1);
  }
}

module.exports = MaxHeap;
