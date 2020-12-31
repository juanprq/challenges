const maxArea = require('./index');

describe('maxArea', () => {

  it('should be a function', () => {
    expect(maxArea).toBeInstanceOf(Function);
  });

  it('should return 49', () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = 49;

    expect(maxArea(input)).toEqual(result);
  });

  it('should return 1', () => {
    const input = [1, 1];
    const result = 1;

    expect(maxArea(input)).toEqual(result);
  });

  it('should return 16', () => {
    const input = [4, 3, 2, 1, 4];
    const result = 16;

    expect(maxArea(input)).toEqual(result);
  });

  it('should return 2', () => {
    const input = [1, 2, 1];
    const result = 2;

    expect(maxArea(input)).toEqual(result);
  });

});
