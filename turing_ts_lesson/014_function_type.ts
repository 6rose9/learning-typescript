// function processFun(callback: (x: number) => void) {
//     console.log('---------------------- > Start processing');
//     callback(100);
//     console.log('---------------------- > End processing\n');
// }

type Callback = (x: number) => void;

function processFun(callback: Callback) {
    console.log('---------------------- > Start processing');
    callback(100);
    console.log('---------------------- > End processing\n');
}

processFun((x: number) => console.log(`Callback number ${x}`));

function callBackFun(x: number) {
    console.log('Second callback', x);
}

processFun(callBackFun);

type BinaryFun = (a: number, b: number) => number;

function add(a: number, b: number): number {
    return a + b;
}

let fun: BinaryFun = add;
console.log('Result', fun(10, 20));

fun = (a: number, b: number) => a * b;
console.log('Result ', fun(10, 20));