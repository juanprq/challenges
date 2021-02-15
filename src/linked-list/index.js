class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
};

class LinkedList {
  length = 0;
  cHead = null;

  head() {
    return this.cHead;
  }

  size() {
    return this.length;
  }

  add(element) {
    this.length++;
    const newNode = new Node(element);

    if (!this.cHead) {
      this.cHead = newNode;
    } else {
      let currentNode = this.cHead;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  remove(element) {
    if (element === this.head().element) {
      this.cHead = this.head().next;
      this.length--;
    } else {
      let prev = this.head();
      let current = prev.next;

      while(current !== null && current.element !== element) {
        prev = current;
        current = current.next;
      }

      if (current) {
        this.length--;
        prev.next = current.next;
      }
    }
  }
}

module.exports = LinkedList;
