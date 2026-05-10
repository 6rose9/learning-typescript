// assign and use
var a = "Hello World";
console.log(a);
a = 42;
console.log(a);
a = true;
console.log(a);
a = function () { return console.log("This is a function assigned to 'a'"); };
a();
a = { key: "value" };
console.log(a.key);
// -------------------------------------------------------------------------
// as a hold, not not meant for direct individual usage
var b = "Unknown Type";
console.log(b);
b = 100;
console.log(b);
b = {
    anotherKey: "anotherValue"
};
// console.log(b.anotherKey); //'b' is of type 'unknown'.
var x = "hello";
// x.toUpperCase(); // not allowed
if (typeof x === "string") {
    x.toUpperCase();
}
