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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Container_treasure;
var Container = /** @class */ (function () {
    function Container() {
        this.x = 10; // public
        this.y = 20;
        this.z = "Zin Zin";
        _Container_treasure.set(this, "💎");
    }
    Container.prototype.show = function () {
        console.log("Container show me:", this.z);
        console.log("My treasure:", __classPrivateFieldGet(this, _Container_treasure, "f"));
    };
    Object.defineProperty(Container.prototype, "treasure", {
        get: function () {
            return __classPrivateFieldGet(this, _Container_treasure, "f");
        },
        set: function (value) {
            if (value < 0)
                throw new Error("value must be greater than 0");
            for (var i = 0; i < value; i++) {
                __classPrivateFieldSet(this, _Container_treasure, __classPrivateFieldGet(this, _Container_treasure, "f") + " 💎", "f");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Container;
}());
_Container_treasure = new WeakMap();
var SpecialContainer = /** @class */ (function (_super) {
    __extends(SpecialContainer, _super);
    function SpecialContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialContainer.prototype.display = function () {
        _super.prototype.show.call(this); // Accessing protected method from subclass
        // this.show(); super or this
        console.log("SpecialContainer dispaly y is:  ".concat(this.y));
        // console.log(`Can I take private value of super ? : ${this.z}`);
    };
    return SpecialContainer;
}(Container));
var container = new Container();
container.x = 15;
console.log("Container x: ", container.x); // Output: container x : 15
// container.y = 30; Property 'y' is protected and only accessible within class 'Container' and its subclasses.
// container.show();
// container.z = "Crystal";
var special = new SpecialContainer();
special.display();
// ------------------------------------------------------
// visibility check only for compile time
var obj = container;
console.log("Container protected y => ", obj.y);
console.log("Container private z => ", obj.z);
console.log("Container private z => ", obj['z']);
console.log("Get treasure", container.treasure);
// set treasure
container.treasure = 4;
// container.#treasure = 4; // TypeScript understands that # means a JavaScript private field.
console.log("Plus 4 treasure", container.treasure);
