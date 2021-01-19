const trap = require('./index');

describe('trap', () => {
  it('should be a function', () => {
    expect(trap).toBeInstanceOf(Function);
  });

  it('should return 6', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(trap(height)).toEqual(6);
  });

  it('should return 9', () => {
    const height = [4, 2, 0, 3, 2, 5];
    expect(trap(height)).toEqual(9);
  });

  it('should return 1', () => {
    const height = [4, 2, 3];
    expect(trap(height)).toEqual(1);
  });

  it('should return 1', () => {
    const height = [5, 4, 1, 2];
    expect(trap(height)).toEqual(1);
  });
});
