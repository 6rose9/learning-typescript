/*
    Forgetting to call super is an easy mistake to make in JavaScript, 
    but TypeScript will tell you when it’s necessary.
*/

class Shape {
    value!: number;
    draw() {
        console.log("Draw shape value is ", this.value);
    }
}

class Circle extends Shape {

    static readonly pi = 3.14;
    radius: number;

    constructor(radius: number) {
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        // this.value = radius;
        super();
        this.value = radius;
        this.radius = radius;
    }

    area() {
        super.draw();
        return Circle.pi * this.radius * this.radius;
    }
}

let circle = new Circle(5);
// circle.draw();
console.log('Area', circle.area());
