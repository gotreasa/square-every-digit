import SquareEveryDigit from '../src/SquareEveryDigit';

describe('Square Every Digit', () => {
  test('should return 1 for input 1', () => {
    expect(SquareEveryDigit.squareDigits(1)).toBe(1);
  });

  test('should return 4 for input 2', () => {
    expect(SquareEveryDigit.squareDigits(2)).toBe(4);
  });

  test('should return 9 for input 3', () => {
    expect(SquareEveryDigit.squareDigits(3)).toBe(9);
  });

  test('should return 91 for input 31', () => {
    expect(SquareEveryDigit.squareDigits(31)).toBe(91);
  });

  test('should return 99 for input 33', () => {
    expect(SquareEveryDigit.squareDigits(33)).toBe(99);
  });

  test('should return 1636 for input 46', () => {
    expect(SquareEveryDigit.squareDigits(46)).toBe(1636);
  });

  test('should return 811181 for input 9119', () => {
    expect(SquareEveryDigit.squareDigits(9119)).toBe(811181);
  });
});
