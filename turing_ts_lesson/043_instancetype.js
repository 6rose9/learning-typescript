var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.createdAt = new Date().toLocaleString();
    }
    Point.prototype.draw = function () {
        console.log('..................... Drawing');
        console.log('x => ', this.x);
        console.log('y => ', this.y);
        console.log('created at => ', this.createdAt);
    };
    return Point;
}());
function moveRight(point) {
    point.x += 5;
    point.y += 5;
}
var point = new Point(3, 10);
moveRight(point);
point.x = 9;
point.draw();
