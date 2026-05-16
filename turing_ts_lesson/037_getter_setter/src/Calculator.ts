export class Calculator {
  private _result: number = 0;

  // getter
  public get result(): number {
    return this._result;
  }

  // setter
  public set result(value: number) {
    this._result = value;
  }

  // calculate method
  public calculate(operator: string, num: number): number {
    switch (operator) {
      case "+":
        this._result += num;
        break;

      case "-":
        this._result -= num;
        break;

      case "*":
        this._result *= num;
        break;

      case "/":
        this._result /= num;
        break;

      case "%":
        this._result %= num;
        break;

      default:
        console.log("Invalid operator");
    }

    return this._result;
  }

  // reset calculator
  public reset(): void {
    this._result = 0;
  }
}