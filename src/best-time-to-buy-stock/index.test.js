const maxProfit = require('./index');

const tests = [
  {
    input: [7, 1, 5, 3, 6, 4],
    result: 5,
  },
  {
    input: [7, 6, 4, 3, 1],
    result: 0,
  },
];

describe('maxProfit', () => {
  it('should be a function', () => {
    expect(maxProfit).toBeInstanceOf(Function);
  });

  tests.forEach(({ input, result }) => {
    it(`input: ${JSON.stringify(input)} should return: ${result}`, () => {
      expect(maxProfit(input)).toEqual(result);
    });
  });
});
