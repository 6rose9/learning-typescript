abstract class Human {
    constructor(protected name: string) { }
    abstract work(): void;
}

class Teacher extends Human {

    constructor(protected name: string, public specialization: string) {
        super(name);
    }

    work() {
        console.log(`${this.name} is teaching ${this.specialization}`);
    }
}

// let human = new Human("John"); Cannot create an instance of an abstract class.

let teacher1 = new Teacher("John", "Math");
teacher1.work();