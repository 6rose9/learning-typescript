"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    _result = 0;
    // getter
    get result() {
        return this._result;
    }
    // setter
    set result(value) {
        this._result = value;
    }
    // calculate method
    calculate(operator, num) {
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
    reset() {
        this._result = 0;
    }
}
exports.Calculator = Calculator;
