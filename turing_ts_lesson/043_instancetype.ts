class Point {
    createdAt: string;
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.createdAt = new Date().toLocaleString();
    }

    draw() {
        console.log('..................... Drawing')
        console.log('x => ', this.x);
        console.log('y => ', this.y);
        console.log('created at => ', this.createdAt);
    }
}

type PointInstace = InstanceType<typeof Point>;

function moveRight(point: PointInstace) {
    point.x += 5;
    point.y += 5;
}

const point = new Point(3, 10);
moveRight(point);
point.x = 9;
point.draw();