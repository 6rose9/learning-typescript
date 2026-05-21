// typescript allows Structural typing
// Point1, Point2 and Point4 same structure

class Point1 {
    x = 0;
    y = 0;
}

class Point2 {
    x = 0;
    y = 0;
}

class Point3 {
    x = 0;
    y: string = "";
}

class Point4 {
    x = 0;
    y = 0;
    z: string = "";
}

let p: Point1 = new Point2();
// p = new Point3(); // Type 'Point3' is not assignable to type 'Point1'.

p = new Point4();
console.log(p);
console.log(typeof p); // object

// let p4: Point4 = new Point2();