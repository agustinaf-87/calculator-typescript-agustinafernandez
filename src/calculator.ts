export class Calculator {
  public addition(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  public substraction(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }

  public multiplication(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo;
  }

  public division(numberOne: number, numberTwo: number) {
    if (numberTwo !== 0) {
      return numberOne / numberTwo;
    } else {
      throw new Error('Invalid Operation');
    }
  }
}
