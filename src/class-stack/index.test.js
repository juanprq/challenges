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

  it('should have a clear method', () => {
    expect(stack.clear).toBeInstanceOf(Function);
  });

  it('should return the top element #peek', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);

    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  it('should return the top element #pop', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });


  it('should clear all elements in stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
