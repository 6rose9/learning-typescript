// optional parameters are usually placed on the right/end of the parameter list
function demo(x) {
    console.log('demo', x);
}
demo();
demo(5);
function defaultDemo(x) {
    if (x === void 0) { x = 0; }
    console.log('default Demo ', x);
}
defaultDemo();
defaultDemo(20);
