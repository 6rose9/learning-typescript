// instance

class People {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getintro() {
        return `I\'m ${this.name}`;
    }

    static isOver18(age: number): boolean {
        return age > 18;
    }
}

let girl = new People("Crystal");
console.log(girl); // People { name: 'Crystal' }
console.log(People.isOver18(20));

class Calculator {

    static num: number = 0;

    static add(a: number, b: number) {
        return a + b;
    }

    static square(n: number) {
        return n * n;
    }

    static increment() {
        return ++Calculator.num;
    }

    static decrement() {
        return --Calculator.num;
    }

    showNumber() {
        console.log(`Current Number is ${Calculator.num}`);
    }
}

console.log(Calculator.square(2));
console.log(Calculator.add(5, 6));

Calculator.increment();
Calculator.increment();
Calculator.decrement();

let calculator = new Calculator();
calculator.showNumber();

class Staff {
    static total: number = 0;

    constructor(public name: string) {
        Staff.total++;
    }

    static totalStaff(): void {
        console.log(`Total staff is ${Staff.total}`);
    }
}

let staff1 = new Staff("Daw Su Su");
let staff2 = new Staff("U Ba Aye");

Staff.totalStaff();