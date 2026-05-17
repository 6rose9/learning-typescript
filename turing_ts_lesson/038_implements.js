var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Bird is flying...");
    };
    return Bird;
}());
var bird = new Bird();
bird.fly();
