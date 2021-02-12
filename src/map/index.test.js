const Map = require('./index');

describe('Map', () => {
  let map;
  beforeEach(() => {
    map = new Map();
  });

  it('should be a Map', () => {
    expect(map).toBeInstanceOf(Map);
  });

  it('should have the add method', () => {
    expect(map.add).toBeInstanceOf(Function);
  });

  it('should have the remove method', () => {
    expect(map.remove).toBeInstanceOf(Function);
  });

  it('should have the get method', () => {
    expect(map.get).toBeInstanceOf(Function);
  });

  it('should have the has method', () => {
    expect(map.has).toBeInstanceOf(Function);
  });

  it('should have the values method', () => {
    expect(map.values).toBeInstanceOf(Function);
  });

  it('should have the clear method', () => {
    expect(map.clear).toBeInstanceOf(Function);
  });

  it('should have the size method', () => {
    expect(map.size).toBeInstanceOf(Function);
  });

  it('should add items to the map', () => {
    map.add('a', 1);
    map.add('b', 2);

    expect(map.values()).toEqual([1, 2]);
  });

  it('should get items with keys', () => {
    map.add('a', 1);
    map.add('b', 2);

    expect(map.get('a')).toEqual(1);
    expect(map.get('c')).toBeUndefined();
  });

  it('should return true if item exists in map, false otherwise', () => {
    map.add('a', 1);

    expect(map.has('a')).toBe(true);
    expect(map.has('b')).toBe(false);
  });

  it('should return values', () => {
    map.add('a', 1);
    map.add('b', 2);
    map.add('c', 3);

    expect(map.values()).toEqual([1, 2, 3]);
  });

  it('should clear the map', () => {
    map.add('a', 1);
    map.add('b', 2);

    expect(map.size()).toEqual(2);
    map.clear();
    expect(map.size()).toEqual(0);
  });
});
