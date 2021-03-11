const dfs = require('./index');

describe('depthFirstSearch', () => {
  it('should be a function', () => {
    expect(dfs).toBeInstanceOf(Function);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 1;

    expect(dfs(graph, root).sort()).toEqual([0, 1, 2, 3]);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 1;

    expect(dfs(graph, root)).toHaveLength(4);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ];
    const root = 3;

    expect(dfs(graph, root)).toEqual([3]);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ];
    const root = 3;

    expect(dfs(graph, root)).toHaveLength(1);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 3;

    expect(dfs(graph, root).sort()).toEqual([2, 3]);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 3;

    expect(dfs(graph, root)).toHaveLength(2);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 0;

    expect(dfs(graph, root)).toEqual([0, 1]);
  });

  it('should return the reachable nodes', () => {
    const graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ];
    const root = 0;

    expect(dfs(graph, root)).toHaveLength(2);
  });
});
