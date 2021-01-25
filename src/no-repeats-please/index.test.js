const permAlone = require('./index');

describe('permAlone', () => {
  it('should be a function', () => {
    expect(permAlone).toBeInstanceOf(Function);
  });

  it('should return 2', () => {
    expect(permAlone('aab')).toEqual(2);
  });

  it('should return 0', () => {
    expect(permAlone('aaa')).toEqual(0);
  });

  it('should return 8', () => {
    expect(permAlone('aabb')).toEqual(8);
  });

  it('should return 3600', () => {
    expect(permAlone('abcdefa')).toEqual(3600);
  });

  it('should return 2640', () => {
    expect(permAlone('abfdefa')).toEqual(2640);
  });

  it('should return 0', () => {
    expect(permAlone('zzzzzzzz')).toEqual(0);
  });

  it('should return 1', () => {
    expect(permAlone('a')).toEqual(1);
  });

  it('should return 0', () => {
    expect(permAlone('aaab')).toEqual(0);
  });

  it('should return 12', () => {
    expect(permAlone('aaabb')).toEqual(12);
  });
});
