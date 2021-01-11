const search = require('./index');

describe('search', () => {
  it('should be a function', () => {
    expect(search).toBeInstanceOf(Function);
  });

  it('should return 4', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  });

  it('should return -1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  });

  it('should return -1', () => {
    expect(search([1], 0)).toEqual(-1);
  });
});
