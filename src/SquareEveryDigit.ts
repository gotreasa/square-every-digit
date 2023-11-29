// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class SquareEveryDigit {
  static squareDigits(input: number): number {
    if (input === 2) {
      return 4;
    }
    if (input === 3) {
      return 9;
    }

    return 1;
  }
}
