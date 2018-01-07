const { removeAllEqualValues, solution } = require('./index.js');

describe('index.js', () => {
  describe('removeAllEqualValues', () => {
    it('basic', () => {
      const input = [1, 2, 3];
      expect(removeAllEqualValues(input)).toBe(1);
      expect(input).toEqual([1, 2]);
    });

    it('one value', () => {
      const input = [0];
      expect(removeAllEqualValues(input)).toBe(1);
      expect(input).toEqual([]);
    });

    it('remove duplicates', () => {
      const input = [1, 2, 3, 3, 2, 2];
      expect(removeAllEqualValues(input)).toBe(2);
      expect(input).toEqual([1, 2, 3, 3]);
    });

    it('remove duplicates 2', () => {
      const input = [7, 7, 7, 7, 7];
      expect(removeAllEqualValues(input)).toBe(5);
      expect(input).toEqual([]);
    });
  });

  describe('solution', () => {
    it('case 1', () => {
      expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);
    });
    it('case 2', () => {
      expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(9);
    });
    it('case 3', () => {
      expect(solution([2, 3, 2])).toBe(2);
    });
    it('case 4', () => {
      expect(solution([1, 2, 3, 2, 1])).toBe(3);
    });
    it('case 5', () => {
      expect(solution([1, 2, 3, 1])).toBe(3);
    });
    it('case 6', () => {
      expect(solution([1, 2, 3, 4, 1, 2, 3, 4])).toBe(7);
    });
    it('case 7', () => {
      expect(solution([1, 2, 4, 3, 1])).toBe(4);
    });
    it('case 8', () => {
      expect(solution([1, 2, 3, 2, 1, 2, 3])).toBe(5);
    });
    it('case 9', () => {
      expect(solution([1, 2, 3, 4, 2, 3, 4])).toBe(6);
    });
  });
});
