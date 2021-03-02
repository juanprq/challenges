const Trie = require('./index');

describe('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a Trie instance', () => {
    expect(trie).toBeInstanceOf(Trie);
  });

  it('should have an add method', () => {
    expect(trie.add).toBeInstanceOf(Function);
  });

  it('should have a print method', () => {
    expect(trie.print).toBeInstanceOf(Function);
  });

  it('should have a isWord method', () => {
    expect(trie.isWord).toBeInstanceOf(Function);
  });

  it('should return all items added as strings in an array', () => {
    trie.add('hello');
    trie.add('world');
    trie.add('juan');
    trie.add('helling');

    const result = ['hello', 'world', 'juan', 'helling'].sort();
    expect(trie.print().sort()).toEqual(result);
  });

  it('should return true for only words added to the trie, false otherwise', () => {
    trie.add('hello');
    trie.add('world');

    expect(trie.isWord('hello')).toBe(true);
    expect(trie.isWord('test')).toBe(false);
    expect(trie.isWord('world')).toBe(true);
  });
});
