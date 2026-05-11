var f1 = function () {
    return 12;
};
console.log(f1().toFixed()); //Property 'toFixed' does not exist on type 'voidFunc'. // only for ts
var f2 = function () { return true; };
var f3 = function () {
    return "Hello";
};
