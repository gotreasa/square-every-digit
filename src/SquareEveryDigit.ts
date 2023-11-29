const squareIndividualDigits = (input: number): number[] => {
  const digits: string[] = input.toString().split('');
  const squareDigits = digits.map((digit: string) => {
    return parseInt(digit, 10) ** 2;
  });

  return squareDigits;
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class SquareEveryDigit {
  static squareDigits(input: number): number {
    const squareDigits: number[] = squareIndividualDigits(input);

    return parseInt(squareDigits.join(''), 10);
  }
}
