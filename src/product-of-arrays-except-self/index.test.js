const productExceptSelf = require('./index');

const tests = [
  {
    input: [1, 2, 3, 4],
    result: [24, 12, 8, 6],
  },
  {
    input: [-1, 1, 0, -3, 3],
    result: [0, 0, 9, 0, 0],
  },
];

describe('productExceptSelf', () => {
  it('should be a function', () => {
    expect(productExceptSelf).toBeInstanceOf(Function);
  });

  tests.forEach(({ input, result }) => {
    it(`input ${JSON.stringify(input)} should return: ${result}`, () => {
      expect(productExceptSelf(input)).toEqual(result);
    });
  });
});
