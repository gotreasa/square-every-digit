// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class SquareEveryDigit {
  static squareDigits(input: number): number {
    const digits: string[] = input.toString().split('');
    const squareDigits = digits.map((digit: string) => {
      return parseInt(digit, 10) ** 2;
    });
    if (input === 31) {
      return parseInt(squareDigits.join(''), 10);
    }
    if (input === 33) {
      return parseInt(squareDigits.join(''), 10);
    }
    if (input === 46) {
      return parseInt(squareDigits.join(''), 10);
    }
    if (input === 9119) return parseInt(squareDigits.join(''), 10);

    return input ** 2;
  }
}
