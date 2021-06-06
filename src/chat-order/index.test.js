const chatOrder = require('./index');

describe('chatOrder', () => {
  it('should be a function', () => {
    expect(chatOrder).toBeInstanceOf(Function);
  });

  it('should return the list', () => {
    const input = [
      'alina',
      'maria',
      'ekaterina',
      'darya',
      'darya',
      'ekaterina',
      'maria',
      'alina',
    ];
    const response = [
      'alina',
      'maria',
      'ekaterina',
      'darya',
    ];

    expect(chatOrder(input)).toEqual(response);
  });

  it('should return the list', () => {
    const input = ['alex', 'ivan', 'roman', 'ivan'];
    const response = ['ivan', 'roman', 'alex'];

    expect(chatOrder(input)).toEqual(response);
  });
});
