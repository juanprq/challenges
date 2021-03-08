const incidenceMatrix = [];

describe('incidenceMatrix', () => {
  it('should have 5 nodes', () => {
    expect(incidenceMatrix).toHaveLength(5);
  });

  it('should have the first edge between first and second node', () => {
    expect(incidenceMatrix[0][0]).toEqual(1);
    expect(incidenceMatrix[1][0]).toEqual(1);
    expect(incidenceMatrix[2][0]).toEqual(0);
    expect(incidenceMatrix[3][0]).toEqual(0);
    expect(incidenceMatrix[4][0]).toEqual(0);
  });

  it('should have an edge between the second and third node', () => {
    expect(incidenceMatrix[0][1]).toEqual(0);
    expect(incidenceMatrix[1][1]).toEqual(1);
    expect(incidenceMatrix[2][1]).toEqual(1);
    expect(incidenceMatrix[3][1]).toEqual(0);
    expect(incidenceMatrix[4][1]).toEqual(0);
  });

  it('should have an edge between the third and fifth node', () => {
    expect(incidenceMatrix[0][2]).toEqual(0);
    expect(incidenceMatrix[1][2]).toEqual(0);
    expect(incidenceMatrix[2][2]).toEqual(1);
    expect(incidenceMatrix[3][2]).toEqual(0);
    expect(incidenceMatrix[4][2]).toEqual(1);
  });

  it('should have an edge between the fourth and the second node', () => {
    expect(incidenceMatrix[0][3]).toEqual(0);
    expect(incidenceMatrix[1][3]).toEqual(1);
    expect(incidenceMatrix[2][3]).toEqual(0);
    expect(incidenceMatrix[3][3]).toEqual(1);
    expect(incidenceMatrix[4][3]).toEqual(0);
  });
});
