const Stack = require('./index');

describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should be an instance of Stack', () => {
    expect(stack).toBeInstanceOf(Stack);
  });

  it('should have a push method', () => {
    expect(stack.push).toBeInstanceOf(Function);
  });

  it('should have a pop method', () => {
    expect(stack.pop).toBeInstanceOf(Function);
  });

  it('should have a peek method', () => {
    expect(stack.peek).toBeInstanceOf(Function);
  });

  it('should have a isEmpty method', () => {
    expect(stack.isEmpty).toBeInstanceOf(Function);
  });
});
