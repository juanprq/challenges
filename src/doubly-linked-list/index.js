class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;

  add(data) {
    const newNode = new Node(data, this.tail);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  remove(data) {
    let current = this.head;

    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) return null;

    if (current.prev) {
      current.prev.next = current.next;
    } else {
      this.head = current.next;
    }

    if (this.tail === current) {
      this.tail = current.prev;
    }

    current.next = null;
    current.prev = null;
  }
}

module.exports = DoublyLinkedList;
