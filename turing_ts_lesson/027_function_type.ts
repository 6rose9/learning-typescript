/*
The global type Function describes properties like bind, call, apply, and 
others present on all function values in JavaScript. 

It also has the special property that values of type Function can always be called; these calls return any:

This is an untyped function call and is generally best avoided because of the unsafe any return type.
*/

let fun: Function = function () {
    console.log("This is a function assigned to 'fun'");
}

fun();

fun = (a: number, b: number) => a + b;
console.log('fun result', fun(5, 15));