class Student {
    static headmaster = "U Thaung Naing";

    static {
        console.log(`I am static block for initial static members`);
    }

    static {
        console.log(`static block may be more than one and execute before constructor`);
    }

    constructor(protected name: string, protected age: number) { }

    display() {
        console.log(`I am ${this.name}. I am ${this.age} years old. My headmaster is ${Student.headmaster}.`);
    }

    static greeting(object: Student) {
        // static method can't access instance properties/methods
        console.log(`Hello ${object.name}`);
    }
}

let student1 = new Student("Ma Su Su Hlaing", 12);
student1.display();
Student.greeting(student1);

let student2 = new Student("Mg Kaung Myat Lin", 15);
student2.display();
Student.greeting(student2);