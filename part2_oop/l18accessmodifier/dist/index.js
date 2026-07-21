"use strict";
//Modifier            Main Class          SubClass            Outside
// public              yes                 yes                 yes
// protected           yes                 yes                 no
// private             yes                  no                 no
// ----------------------------------- public (default)
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    contact(isAvailable = false) {
        return isAvailable ? "Contact Me" : "No Provided";
    }
}
let user = new User("Crystal");
console.log(user);
user.name = '';
console.log(user);
// ----------------------------------- protected 
class People {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends People {
    greeting() {
        console.log(`My name is ${this.name}`);
    }
}
let employee1 = new Employee("Kyaw Kyaw");
employee1.greeting();
// employee1.name = "Mg Kyaw"; Error: Property name is protected
// ----------------------------------- private
class BankAccount {
    name;
    balance;
    age;
    address;
    id;
    // private balance: number;
    // public name: string;
    // protected age: number;
    // address?: string;
    constructor(name, balance, age, address) {
        this.name = name;
        this.balance = balance;
        this.age = age;
        this.address = address;
        this.id = crypto.randomUUID();
        // this.name = name;
        // this.balance = balance;
        // this.age = age;
        // this.address = address;
    }
    showBalance() {
        return this.balance;
    }
}
class Customer extends BankAccount {
    getInfo() {
        console.log(`Customer Id: ${this.id}`);
        console.log(`Customer Name: ${this.name}`);
        // console.log(`Coustomer Balance: ${this.balance}`);
        console.log(`Customer Balance: ${this.showBalance}`);
        console.log(`Customer Age: ${this.age}`);
        console.log(`Customer Address: ${this.address ?? '-'}`);
    }
}
let customer = new Customer("Daw Su Su Aung", 30_500_000, 30, "Yangon");
console.log(customer);
// customer.age = 35; ERROR
console.log(customer.id);
// customer.id = "0001"; ERROR
