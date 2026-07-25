// instance

class People {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getintro() {
        return `I\'m ${this.name}`;
    }

    static over18(age: number): boolean {
        return age > 18;
    }
}

let girl = new People("Crystal");
console.log(girl); // People { name: 'Crystal' }

class Calculator {

    static add(a: number, b: number) {
        return a + b;
    }

    static square(n: number) {
        return n * n;
    }
}

console.log(Calculator.square(2));
console.log(Calculator.add(5, 6));