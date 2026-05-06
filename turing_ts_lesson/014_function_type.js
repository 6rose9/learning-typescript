// function processFun(callback: (x: number) => void) {
//     console.log('---------------------- > Start processing');
//     callback(100);
//     console.log('---------------------- > End processing\n');
// }
function processFun(callback) {
    console.log('---------------------- > Start processing');
    callback(100);
    console.log('---------------------- > End processing\n');
}
processFun(function (x) { return console.log("Callback number ".concat(x)); });
function callBackFun(x) {
    console.log('Second callback', x);
}
processFun(callBackFun);
function add(a, b) {
    return a + b;
}
var fun = add;
console.log('Result', fun(10, 20));
fun = function (a, b) { return a * b; };
console.log('Result ', fun(10, 20));
