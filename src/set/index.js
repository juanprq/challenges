class Set {
  constructor() {
    this.dictionary = {};
  }

  has(item) {
    return this.dictionary[item] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(item) {
    if (this.has(item)) {
      return false;
    } else {
      this.dictionary[item] = item;
      return true;
    }
  }

  remove(item) {
    if (this.has(item)) {
      delete this.dictionary[item];
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.values().length;
  }
}

module.exports = Set;
