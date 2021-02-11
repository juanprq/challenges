const Set = require('./index');

describe('Set', () => {
  let set;
  beforeEach(() => {
    set = new Set();
  });

  it('should be a instance of a Set', () => {
    expect(set).toBeInstanceOf(Set);
  });

  it('should have the union method', () => {
    expect(set.union).toBeInstanceOf(Function);
  });

  it('should make a union of two sets', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    const set2 = new Set();
    set2.add('c');
    set2.add('d');

    expect(set.union(set2).print()).toEqual(['a', 'b', 'c', 'd']);
  });
});
