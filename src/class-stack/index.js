class Stack {
  collection = [];

  print() {
    console.log(this.collection);
  }

  push(element) {
    this.collection.push(element);
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  clear() {
    this.collection = [];
  }
}

module.exports = Stack;
