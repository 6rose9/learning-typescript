// typescript allows Structural typing
// Point1, Point2 and Point4 same structure
var Point1 = /** @class */ (function () {
    function Point1() {
        this.x = 0;
        this.y = 0;
    }
    return Point1;
}());
var Point2 = /** @class */ (function () {
    function Point2() {
        this.x = 0;
        this.y = 0;
    }
    return Point2;
}());
var Point3 = /** @class */ (function () {
    function Point3() {
        this.x = 0;
        this.y = "";
    }
    return Point3;
}());
var Point4 = /** @class */ (function () {
    function Point4() {
        this.x = 0;
        this.y = 0;
        this.z = "";
    }
    return Point4;
}());
var p = new Point2();
// p = new Point3(); // Type 'Point3' is not assignable to type 'Point1'.
p = new Point4();
console.log(p);
console.log(typeof p); // object
// let p4: Point4 = new Point2();
