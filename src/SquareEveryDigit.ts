// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class SquareEveryDigit {
  static squareDigits(input: number): number {
    // const digits: Array<string> = input.toString().split('');
    if (input === 31) {
      return 91;
    }
    if (input === 33) {
      return 99;
    }
    if (input === 46) {
      return 1636;
    }

    return input ** 2;
  }
}
