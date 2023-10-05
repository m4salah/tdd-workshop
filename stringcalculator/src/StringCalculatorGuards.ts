import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard {
  static checkIfMoreThan2Number(arr: number[]) {
    if (arr.length > 2) {
      throw new InvalidInputError(ErrorMessages.moreThan2Number);
    }
  }
  static checkIfNaN(n: number) {
    if (isNaN(n)) {
      throw new InvalidInputError(ErrorMessages.notANumber);
    }
  }
  static checkIfArrayOfNumbersHaveNgetiveNumbers(numbers: number[]) {
    const negatives: number[] = [];
    numbers.forEach((number) => {
      if (number < 0) {
        negatives.push(number);
      }
    });
    if (negatives.length > 0) {
      throw new InvalidInputError(ErrorMessages.negativeNotallowed + negatives);
    }
  }
}
