const HashTable = require('./index');

describe('HashTable', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should be a HashTable', () => {
    expect(hashTable).toBeInstanceOf(HashTable);
  });

  it('should have a add method', () => {
    expect(hashTable.add).toBeInstanceOf(Function);
  });

  it('should have a remove method', () => {
    expect(hashTable.remove).toBeInstanceOf(Function);
  });

  it('should have a lookup method', () => {
    expect(hashTable.lookup).toBeInstanceOf(Function);
  });

  it('it should add items and lookup values', () => {
    hashTable.add('a', 1);
    hashTable.add('b', 2);
    hashTable.add('c', 3);

    expect(hashTable.lookup('a')).toEqual(1);
    expect(hashTable.lookup('b')).toEqual(2);
    expect(hashTable.lookup('c')).toEqual(3);
  });

  it('should remove items', () => {
    hashTable.add('a', 1);
    expect(hashTable.lookup('a')).toEqual(1);

    hashTable.remove('a');
    expect(hashTable.lookup('a')).toBe(null);
  });
});
