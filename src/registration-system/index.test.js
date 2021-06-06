const registrationSystem = require('./index');

describe('registrationSystem', () => {
  it('should be a function', () => {

  });

  it('should return the log', () => {
    const input = [
      'abacaba',
      'acaba',
      'abacaba',
      'acab',
    ];
    const response = [
      'OK',
      'OK',
      'abacaba1',
      'OK',
    ];

    expect(registrationSystem(input)).toEqual(response);
  });

  it('should return the log', () => {
    const input = [
      'first',
      'first',
      'second',
      'second',
      'third',
      'third',
    ];
    const response = [
      'OK',
      'first1',
      'OK',
      'second1',
      'OK',
      'third1',
    ];

    expect(registrationSystem(input)).toEqual(response);
  });
});
