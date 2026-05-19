var clazz = /** @class */ (function () {
    function class_1(value) {
        this.value = value;
    }
    class_1.prototype.display = function () {
        console.log("Value: ".concat(this.value));
    };
    return class_1;
}());
var box = new clazz(123);
box.display();
var strbox = new clazz("Hello");
strbox.display();
// let boxx = new clazz<boolean>("Hello");
