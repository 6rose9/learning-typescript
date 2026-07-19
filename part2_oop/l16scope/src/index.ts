// ------------------------------------------------- Global Scope
var globalVar: string = "I am global var";
let globalLet: string = "I am global let";
const globalConst: string = "I am global const";

function showGlobalValue() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

showGlobalValue();

// ------------------------------------------------- Local Scope
function showLocalValue() {
    var localVar: string = "I am local var";
    let localLet: string = "I am local let";
    const localConst: string = "I am local const";
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
        var blockVar: string = "I am block var";
        let blockLet: string = "I am block let";
        const blockConst: string = "I am block const";
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