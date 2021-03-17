const getRowPascaleTriangle = require('./index');

describe('getRowPascaleTriangle', () => {
  it('should be a function', () => {
    expect(getRowPascaleTriangle).toBeInstanceOf(Function);
  });

  it('should return [1]', () => {
    expect(getRowPascaleTriangle(1)).toEqual([1]);
  });

  it('should return [1, 1]', () => {
    expect(getRowPascaleTriangle(2)).toEqual([1, 1]);
  });

  it('should return [1, 2, 1]', () => {
    expect(getRowPascaleTriangle(3)).toEqual([1, 2, 1]);
  });

  it('should return [1, 3, 3, 1]', () => {
    expect(getRowPascaleTriangle(4)).toEqual([1, 3, 3, 1]);
  });
});
