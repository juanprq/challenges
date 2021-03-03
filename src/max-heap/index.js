class MaxHeap {
  values = [null];

  insert(value) {
    let index = this.values.length;
    let parentIndex = Math.floor(index / 2);
    this.values.push(value);

    while (parentIndex > 0 && this.values[parentIndex] < value) {
      const aux = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = aux;

      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  print() {
    return this.values.slice(1);
  }
}

module.exports = MaxHeap;
