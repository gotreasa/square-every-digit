import SquareEveryDigit from '../src/SquareEveryDigit';

describe('Square Every Digit', () => {
  test('should return 1 for input 1', () => {
    expect(SquareEveryDigit.squareDigits(1)).toBe(1);
  });

  test('should return 4 for input 2', () => {
    expect(SquareEveryDigit.squareDigits(2)).toBe(4);
  });
});
