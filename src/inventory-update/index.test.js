const updateInventory = require('./index');

describe('updateInventory', () => {
  it('should be a function', () => {
    expect(updateInventory).toBeInstanceOf(Function);
  });

  it('should return ', () => {
    const currentInventory = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ];
    const newInventory = [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ];
    const result = [
      [88, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [3, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [5, 'Microphone'],
      [7, 'Toothpaste'],
    ];

    expect(updateInventory(currentInventory, newInventory)).toEqual(result);
  });

  it('should return ', () => {
    const currentInventory = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ];
    const newInventory = [];
    const result = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ];

    expect(updateInventory(currentInventory, newInventory)).toEqual(result);
  });

  it('should return ', () => {
    const currentInventory = [];
    const newInventory = [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ];
    const result = [
      [67, 'Bowling Ball'],
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [7, 'Toothpaste'],
    ];

    expect(updateInventory(currentInventory, newInventory)).toEqual(result);
  });

  it('should return ', () => {
    const currentInventory = [
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone'],
    ];
    const newInventory = [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste'],
    ];
    const result = [
      [1, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [0, 'Microphone'],
      [1, 'Toothpaste'],
    ];

    expect(updateInventory(currentInventory, newInventory)).toEqual(result);
  });
});
