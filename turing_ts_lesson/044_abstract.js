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
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, specialization) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.specialization = specialization;
        return _this;
    }
    Teacher.prototype.work = function () {
        console.log("".concat(this.name, " is teaching ").concat(this.specialization));
    };
    return Teacher;
}(Human));
// let human = new Human("John"); Cannot create an instance of an abstract class.
var teacher1 = new Teacher("John", "Math");
teacher1.work();
