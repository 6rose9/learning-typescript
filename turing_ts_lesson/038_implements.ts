interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Bird is flying...");
    }
}

let bird = new Bird();
bird.fly();