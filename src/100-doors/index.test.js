const getFinalOpenedDoors = require('./index');

describe('getFinalOpenedDoors', () => {
  it('should be a function', () => {
    expect(getFinalOpenedDoors).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getFinalOpenedDoors(100)).toBeInstanceOf(Array);
  });

  it('should return the correct toggled doors', () => {
    const result = [1,  4,  9, 16,  25, 36, 49, 64, 81, 100];
    expect(getFinalOpenedDoors(100)).toEqual(result);
  });

});
