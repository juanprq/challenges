const removeCoveredIntervals = require('./index');

describe('removeCoveredIntervals', () => {
  it('should be a function', () => {
    expect(removeCoveredIntervals).toBeInstanceOf(Function);
  });

  it('should return 2 intervals', () => {
    const intervals = [[1, 4], [3, 6], [2,8]];

    expect(removeCoveredIntervals(intervals)).toEqual(2);
  });

  it('should return 1 interval', () => {
    const intervals = [[1, 4], [2, 3]];

    expect(removeCoveredIntervals(intervals)).toEqual(1);
  });

  it('should return 2 intervals', () => {
    const intervals = [[0, 10], [5, 12]];

    expect(removeCoveredIntervals(intervals)).toEqual(2);
  });

  it('should return 2 intervals', () => {
    const intervals = [[3, 10], [4, 10], [5, 11]];

    expect(removeCoveredIntervals(intervals)).toEqual(2);
  });

  it('should return 1 interval', () => {
    const intervals = [[1, 2], [1, 4], [3, 4]];

    expect(removeCoveredIntervals(intervals)).toEqual(1);
  });
});
