class Student {
    readonly id: number | string;
    name: string;
    classname: string;
    majorSub: string[];
    minorSub?: string[];

    constructor(id: number | string, name: string, classname: string, majorSub: string[], minorSub?: string[]) {
        this.id = id;
        this.name = name;
        this.classname = classname;
        this.majorSub = majorSub;
        this.minorSub = minorSub;
    }
    
    getBio(): string {
        return `Student ID: ${this.id}, Name: ${this.name}, Class: ${this.classname}, Major Subjects: ${this.majorSub.join(", ")}, Minor Subjects: ${this.minorSub?.join(", ") || "None"}`;
    }
}

let student1 = new Student(1, "John Doe", "10th Grade", ["Math", "Science"], ["Art"]);
// console.log(student1);

student1.name = "John Smith"; // This is allowed since 'name' is not readonly
console.log(student1);

console.log(student1.getBio());

// student1.id = '0001'; Cannot assign to 'id' bcz it is readonly property