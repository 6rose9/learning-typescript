"use strict";
class Employee {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    showinfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`${this.getrole()}`);
    }
}
// let test = new Employee(); Cannot create an instance of an abstract class.
class Staff extends Employee {
    role;
    constructor(name, address, role) {
        super(name, address);
        this.role = role;
    }
    getrole() {
        return `Role: ${this.role}`;
    }
    work(department) {
        return `${this.name} is currently working as ${this.role} role in ${department} department.`;
    }
}
let staff1 = new Staff("U Tint Tun", "Yangon", "Executive");
staff1.showinfo();
// console.log(staff1.getrole()); Role: Executive
console.log(staff1.work("Cybersecurity & Information Security"));
