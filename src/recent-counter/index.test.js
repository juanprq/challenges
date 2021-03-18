const RecentCounter = require('./index');

describe('RecentCounter', () => {
  let recentCounter;
  beforeEach(() => {
    recentCounter = new RecentCounter();
  });

  it('should be a RecentCounter instance', () => {
    expect(recentCounter).toBeInstanceOf(RecentCounter);
  });

  it('should have the ping method', () => {
    expect(recentCounter.ping).toBeInstanceOf(Function);
  });

  it('should return the correct count', () => {
    expect(recentCounter.ping(1)).toEqual(1);
    expect(recentCounter.ping(100)).toEqual(2);
    expect(recentCounter.ping(3001)).toEqual(3);
    expect(recentCounter.ping(3002)).toEqual(3);
  });
});
