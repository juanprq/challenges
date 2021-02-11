const Set = require('./index');

describe('Set', () => {
  let set;

  beforeEach(() => {
    set = new Set();
  });

  it('should be a Set', () => {
    expect(set).toBeInstanceOf(Set);
  });

  it('should have the add method', () => {
    expect(set.add).toBeInstanceOf(Function);
  });

  it('should have values method', () => {
    expect(set.values).toBeInstanceOf(Function);
  });

  it('should have the remove method', () => {
    expect(set.remove).toBeInstanceOf(Function);
  });

  it('should have a size method', () => {
    expect(set.size).toBeInstanceOf(Function);
  });

  it('should have a has method', () => {
    expect(set.has).toBeInstanceOf(Function);
  });

  it('should have the union method', () => {
    expect(set.union).toBeInstanceOf(Function);
  });

  it('should have the intersection method', () => {
    expect(set.intersection).toBeInstanceOf(Function);
  });

  it('should not add duplicate values', () => {
    set.add(1);
    set.add(1);

    expect(set.values()).toEqual([1]);
  });

  it('should return true when an item is successfully added', () => {
    expect(set.add(1)).toBe(true);
  });

  it('should return false when an item is duplicated', () => {
    set.add(1);
    expect(set.add(1)).toBe(false);
  });


  it('should remove only items present', () => {
    set.add(1);
    set.add(2);

    expect(set.remove(1)).toBe(true);
    expect(set.remove(3)).toBe(false);
  });

  it('should remove the item from the set', () => {
    set.add(1);
    set.add(2)

    set.remove(1);
    expect(set.values()).toEqual([2]);
  });


  it('should return the correct size of the set', () => {
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toEqual(3);
  });

  it('should make a union of two sets', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const set2 = new Set();
    set2.add('c');
    set2.add('d');

    expect(set.union(set2).values()).toEqual(['a', 'b', 'c', 'd']);
  });


  it('should make an intersection of two sets', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const set2 = new Set();
    set2.add('a');
    set2.add('b');
    set2.add('d');
    set2.add('e');

    expect(set.intersection(set2).values()).toEqual(['a', 'b']);
  });
});
