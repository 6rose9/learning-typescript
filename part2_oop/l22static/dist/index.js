"use strict";
// instance
class People {
    name;
    constructor(name) {
        this.name = name;
    }
    getintro() {
        return `I\'m ${this.name}`;
    }
    static over18(age) {
        return age > 18;
    }
}
let girl = new People("Crystal");
console.log(girl); // People { name: 'Crystal' }
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static square(n) {
        return n * n;
    }
}
console.log(Calculator.square(2));
console.log(Calculator.add(5, 6));
