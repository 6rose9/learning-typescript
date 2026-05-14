var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Point_x;
var Point = /** @class */ (function () {
    function Point(x, y, z) {
        if (z === void 0) { z = 0; }
        _Point_x.set(this, void 0); // runtime privacy
        __classPrivateFieldSet(this, _Point_x, x, "f");
        this.y = y;
        this.z = z;
    }
    Point.prototype.display = function () {
        var _a;
        console.log('x => ', __classPrivateFieldGet(this, _Point_x, "f"));
        console.log('y => ', this.y);
        console.log('z => ', this.z);
        console.log((_a = this.note) !== null && _a !== void 0 ? _a : 'Have a good day!');
        console.log("_____________________________________\n");
    };
    return Point;
}());
_Point_x = new WeakMap();
var p1 = new Point(5, 10);
p1.z = 20;
p1.display();
var p2 = new Point(34, 45, 645);
p2.note = "Careful!";
p2.display();
