class Map {
  collection = {}

  add(key, value) {
    this.collection[key] = value;
  }

  remove(key) {
    delete this.collection[key];
  }

  get(key) {
    return this.collection[key];
  }

  has(key) {
    return !!this.collection[key];
  }

  values() {
    return Object.values(this.collection);
  }

  clear() {
    this.collection = {};
  }

  size() {
    return Object.values(this.collection).length;
  }
};

module.exports = Map;
