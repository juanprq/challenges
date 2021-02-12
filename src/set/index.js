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

  union(set) {
    const resultSet = new Set();
    const add = (item) => resultSet.add(item);

    this.values().forEach(add);
    set.values().forEach(add);

    return resultSet;
  }

  intersection(set) {
    const resultSet = new Set();
    this.values().forEach(value => {
      if (set.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }

  difference(set) {
    const resultSet = new Set();
    this.values().forEach(value => {
      if (!set.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }
}

module.exports = Set;
