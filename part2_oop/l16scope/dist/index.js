"use strict";
// ------------------------------------------------- Global Scope
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";
function showGlobalValue() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
showGlobalValue();
// ------------------------------------------------- Local Scope
function showLocalValue() {
    var localVar = "I am local var";
    let localLet = "I am local let";
    const localConst = "I am local const";
    console.log(localVar);
    console.log(localLet);
    console.log(localConst);
}
showLocalValue();
// console.log(localVar); // ERROR : can't find ...
// console.log(localLet);
// console.log(localConst);
// ------------------------------------------------- Block Scope
function showBlockValue() {
    if (true) {
        var blockVar = "I am block var";
        let blockLet = "I am block let";
        const blockConst = "I am block const";
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(blockVar);
    // console.log(blockLet); // ERROR: can't find ...
    // console.log(blockConst);
}
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);
