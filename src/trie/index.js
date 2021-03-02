class Node {
  keys = new Map();
  end = false;

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  root = new Node();

  add(word) {
    const letters = word.split('');

    let current = this.root;
    letters.forEach((letter, i) => {
      let node = current.keys.get(letter);
      if (!node) {
        node = new Node();
        current.keys.set(letter, node);
      }

      if (i === letters.length - 1) node.setEnd();
      current = node;
    });
  }

  print() {
    const result = [];
    const fn = (currentNode = this.root, accum = '') => {
      if (!currentNode) return;
      if (currentNode.isEnd()) result.push(accum);

      currentNode.keys.forEach((value, key) => {
        fn(value, accum + key);
      });
    };
    fn();

    return result;
  }

  isWord(word) {
    const letters = word.split('');
    let current = this.root;

    for (let i = 0; i < letters.length; i++) {
      if (!current) return false;
      current = current.keys.get(letters[i]);
    }

    return current.isEnd();
  }
}

module.exports = Trie;
