const adjacencyMatrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

describe('adjacencyMatrix', () => {
  it('should contain five nodes', () => {
    expect(adjacencyMatrix).toHaveLength(5);

    adjacencyMatrix.forEach(row => expect(row).toHaveLength(5));
  });

  it('should have an edge between first and fourth node', () => {
    expect(adjacencyMatrix[0][3]).toEqual(1);
  });

  it('should have an edge between first and third node', () => {
    expect(adjacencyMatrix[0][2]).toEqual(1);
  });

  it('should have an edge between third and fifth node', () => {
    expect(adjacencyMatrix[2][4]).toEqual(1);
  });

  it('should have an edge between fourth and fifth node', () => {
    expect(adjacencyMatrix[3][4]).toEqual(1);
  });
});
