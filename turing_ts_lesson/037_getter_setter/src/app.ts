import * as readline from "readline";
import { Calculator } from "./Calculator";

class App {
  
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  private calculator = new Calculator();

  public start(): void {
    console.log("===== Calculator Program =====");

    this.rl.question("Enter first number: ", (firstInput) => {
      const firstNumber = Number(firstInput);

      this.calculator.result = firstNumber;

      this.askOperator();
    });
  }

  private askOperator(): void {
    this.rl.question("Enter operator (+ - * / %): ", (op) => {
      this.rl.question("Enter second number: ", (numInput) => {
        const number = Number(numInput);

        const answer = this.calculator.calculate(op, number);

        console.log(`Answer = ${answer}`);

        this.askOption();
      });
    });
  }

  private askOption(): void {
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

  private continueCalculation(): void {
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