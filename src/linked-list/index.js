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

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
    let current = this.head();
    let index = 0;

    while(current !== null && current.element !== element) {
      current = current.next
      index++;
    }

    return current ? index : -1;
  }

  elementAt(index) {
    let current = this.head();
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current ? current.element : undefined;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;

    this.length--;
    let currentIndex = 0;
    let current = this.head();
    let prev;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    const { element } = current;
    if (current === this.head()) {
      this.cHead = current.next;
    } else {
      prev.next = current.next;
    }

    return element;
  }

  addAt(index, element) {
    if (index < 0 || index >= this.size()) return false;

    this.length++;
    let currentIndex = 0;
    let current = this.head();
    let prev;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    const newElement = new Node(element);
    if (prev) {
      prev.next = newElement;
      newElement.next = current;
    } else {
      newElement.next = this.head();
      this.cHead = newElement;
    }

    return true;
  }
}

module.exports = LinkedList;
