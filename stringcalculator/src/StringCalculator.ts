import { StringCalculatorGuard } from "./StringCalculatorGuards";

export class StringCalculator {
  private static roundToOneDecimal(n: number): number {
    return Math.round(n * 10) / 10;
  }

  static add(numberString: string): number {
    const customDelimiterPattern: RegExp = new RegExp("//.+\n");
    const match = numberString.match(customDelimiterPattern);
    let sperator: string = ",";
    if (match) {
      sperator = numberString[2];
      numberString = numberString.substring(match[0].length);
    }
    const numbers = numberString.split(sperator).map((numberStringOne) => {
      const n = +numberStringOne;
      StringCalculatorGuard.checkIfNaN(n);
      return n;
    });
    StringCalculatorGuard.checkIfArrayOfNumbersHaveNgetiveNumbers(numbers);
    const sum = numbers.reduce((prev, curr) => curr + prev, 0);
    return this.roundToOneDecimal(sum);
  }
}
