"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Calculator_1 = require("./Calculator");
class App {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    calculator = new Calculator_1.Calculator();
    start() {
        console.log("===== Calculator Program =====");
        this.rl.question("Enter first number: ", (firstInput) => {
            const firstNumber = Number(firstInput);
            this.calculator.result = firstNumber;
            this.askOperator();
        });
    }
    askOperator() {
        this.rl.question("Enter operator (+ - * / %): ", (op) => {
            this.rl.question("Enter second number: ", (numInput) => {
                const number = Number(numInput);
                const answer = this.calculator.calculate(op, number);
                console.log(`Answer = ${answer}`);
                this.askOption();
            });
        });
    }
    askOption() {
        console.log("\nOptions:");
        console.log("ok       => complete program");
        console.log("new      => restart program");
        console.log("continue => continue calculation");
        this.rl.question("Choose option: ", (option) => {
            switch (option.toLowerCase()) {
                case "ok":
                    console.log("Program completed.");
                    this.rl.close();
                    break;
                case "new":
                    this.calculator.reset();
                    console.log("\nRestarting program...\n");
                    this.start();
                    break;
                case "continue":
                    this.continueCalculation();
                    break;
                default:
                    console.log("Invalid option");
                    this.askOption();
            }
        });
    }
    continueCalculation() {
        console.log(`Current Answer = ${this.calculator.result}`);
        this.rl.question("Enter operator (+ - * / %): ", (op) => {
            this.rl.question("Enter number: ", (numInput) => {
                const number = Number(numInput);
                const answer = this.calculator.calculate(op, number);
                console.log(`New Answer = ${answer}`);
                this.askOption();
            });
        });
    }
}
// create app object
const app = new App();
// start program
app.start();
