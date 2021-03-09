const bfs = require('./index');

describe('bfs', () => {
  it('should return the correct length', () => {
    const input = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];

    expect(bfs(input, 1))
      .toEqual({
        0: 1,
        1: 0,
        2: 1,
        3: 2,
      });
  });


  it('should return the correct length', () => {
    const input = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(bfs(input, 1))
      .toEqual({
        0: 1,
        1: 0,
        2: 1,
        3: Infinity,
      });
  });

  it('should return the correct length', () => {
    const input = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];

    expect(bfs(input, 0))
      .toEqual({
        0: 0,
        1: 1,
        2: 2,
        3: 3,
      });
  });

  it('should return the correct length', () => {
    const input = [
      [0, 1],
      [1, 0],
    ];

    expect(bfs(input, 0))
      .toEqual({
        0: 0,
        1: 1,
      });
  });
});
