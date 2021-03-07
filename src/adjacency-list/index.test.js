const adjacencyList = {
  James: [],
  Jill: ['Jenny'],
  Jenny: [],
  Jeff: ['James', 'Jenny'],
};

describe('adjacencyList', () => {
  it('should only cointain four nodes', () => {
    expect(Object.keys(adjacencyList)).toHaveLength(4);
  });

  it('should be an edge between Jeff and James', () => {
    expect(adjacencyList.Jeff).toContainEqual('James');
  });

  it('should be an edge between Jill and Jenny', () => {
    expect(adjacencyList.Jill).toContainEqual('Jenny');
  });

  it('should bbe an edge between Jeff and Jenny', () => {
    expect(adjacencyList.Jeff).toContainEqual('Jenny');
  });
});
