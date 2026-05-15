class Point {
    y; // compile-time privacy
    #x; // runtime privacy
    z;
    note;
    constructor(x, y, z = 0) {
        this.#x = x;
        this.y = y;
        this.z = z;
    }
    display() {
        console.log('x => ', this.#x);
        console.log('y => ', this.y);
        console.log('z => ', this.z);
        console.log(this.note ?? 'Have a good day!');
        console.log("_____________________________________\n");
    }
    move(dx = 0, dy = 0) {
        this.#x += dx;
        this.y += dy;
    }
}
let p1 = new Point(5, 10);
p1.z = 20;
p1.display();
let p2 = new Point(34, 45, 645);
p2.note = "Careful!";
p2.display();
p2.move(0, -5);
p2.display();
