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

  remove() {
    const result = this.values[1];
    this.values[1] = this.values[this.values.length - 1];
    this.values.pop();

    let index = 1;
    while (
      index < this.values.length - 1
      && (
        this.values[index * 2] > this.values[index]
        || this.values[index * 2 + 1] > this.values[index]
      )
    ) {
      const aux = this.values[index];
      let childIndex = index * 2;
      if (this.values[childIndex] < this.values[childIndex + 1]) childIndex++;

      this.values[index] = this.values[childIndex];
      this.values[childIndex] = aux;

      index = childIndex;
    }

    return result;
  }

  print() {
    return this.values.slice(1);
  }
}

module.exports = MaxHeap;
