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
});
