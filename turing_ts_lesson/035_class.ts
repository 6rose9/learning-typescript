class Point {
    private y: number; // compile-time privacy
    #x: number;        // runtime privacy
    z: number;
    note!: string;

    constructor(x: number, y: number, z: number = 0) {
        this.#x = x;
        this.y = y;
        this.z = z;
    }

    display() {
        console.log('x => ', this.#x);
        console.log('y => ', this.y);
        console.log('z => ', this.z);
        console.log(this.note ?? 'Have a good day!');
        console.log("_____________________________________\n")
    }
}

let p1 = new Point(5, 10);
p1.z = 20;
p1.display();

let p2 = new Point(34, 45, 645);
p2.note = "Careful!"
p2.display();



