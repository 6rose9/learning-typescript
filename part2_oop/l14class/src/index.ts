class People {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }

    canVote(): boolean {
        return this.age >= 18;
    }
}

let person1 = new People(1, "Alice", 30);
console.log(person1.getDetails()); // Output: ID: 1, Name: Alice, Age: 30
console.log(`Can you vote? ${person1.canVote()}`); // Output: true

let person2 = new People(2, "Su San", 15);
console.log(person2.getDetails());
console.log(`Can you vote? ${person2.canVote()}`);