abstract class Employee {
    constructor(
        public name: string,
        public address: string
    ) { }

    abstract getrole(): string;

    showinfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`${this.getrole()}`);
    }
}

// let test = new Employee(); Cannot create an instance of an abstract class.

class Staff extends Employee {
    constructor(
        name: string,
        address: string,
        protected role: string
    ) {
        super(name, address);
    }

    getrole(): string {
        return `Role: ${this.role}`;
    }

    work(department: string): string {
        return `${this.name} is currently working as ${this.role} role in ${department} department.`;
    }
}

let staff1 = new Staff("U Tint Tun", "Yangon", "Executive");
staff1.showinfo();
// console.log(staff1.getrole()); Role: Executive
console.log(staff1.work("Cybersecurity & Information Security"));