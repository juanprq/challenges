const {
  addOne,
  addX,
  add,
} = require('./index');

describe('arrayDigits', () => {
  describe('addOne', () => {
    it('should be a function', () => {
      expect(addOne).toBeInstanceOf(Function);
    });

    it('should return a [1]', () => {
      expect(addOne([0])).toEqual([1]);
    });

    it('should return a [1, 3]', () => {
      expect(addOne([1, 2])).toEqual([1, 3]);
    });

    it('should return a [2]', () => {
      expect(addOne([1])).toEqual([2]);
    });

    it('should return a [1, 0, 0, 0]', () => {
      expect(addOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });
  });

  describe('addX', () => {
    it('should be a function', () => {
      expect(addX).toBeInstanceOf(Function);
    });

    it('should return a [1]', () => {
      expect(addX([0], 1)).toEqual([1]);
    });

    it('should return a [1, 7]', () => {
      expect(addX([1, 2], 5)).toEqual([1, 7]);
    });

    it('should return a [2]', () => {
      expect(addX([1, 8 , 9], 9)).toEqual([1, 9, 8]);
    });

    it('should return a [1, 0, 0, 0]', () => {
      expect(addX([9, 9, 9], 9)).toEqual([1, 0, 0, 8]);
    });
  });

  describe('add', () => {
    it('should be a function', () => {
      expect(add).toBeInstanceOf(Function);
    });

    it('should return [5]', () => {
      expect(add([2], [3])).toEqual([5]);
    });

    it('should return [2]', () => {
      expect(add([2], [])).toEqual([2]);
    });

    it('should return [4, 2, 3]', () => {
      expect(add([2, 1, 2], [2, 1, 1])).toEqual([4, 2, 3]);
    });

    it('should return [1, 4, 2, 4, 8]', () => {
      expect(add([9, 9, 9, 9], [4, 2, 4, 9])).toEqual([1, 4, 2, 4, 8]);
    });
  });
});
