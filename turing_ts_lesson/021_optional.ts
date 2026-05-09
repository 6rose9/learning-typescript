// optional parameters are usually placed on the right/end of the parameter list
function demo(x?: number) {
    console.log('demo', x);
}

demo();
demo(5);

function defaultDemo(x: number = 0) {
    console.log('default Demo ', x);
}

defaultDemo();
defaultDemo(20);