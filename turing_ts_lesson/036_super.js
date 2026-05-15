/*
    Forgetting to call super is an easy mistake to make in JavaScript,
    but TypeScript will tell you when it’s necessary.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("Draw shape value is ", this.value);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        // this.value = radius;
        var _this = _super.call(this) || this;
        _this.value = radius;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        _super.prototype.draw.call(this);
        return Circle.pi * this.radius * this.radius;
    };
    Circle.pi = 3.14;
    return Circle;
}(Shape));
var circle = new Circle(5);
// circle.draw();
console.log('Area', circle.area());
