"use strict";
// Type Widening
// let user: Person = {
//     name: "Zin Zin", // Type 'Zin Zin' is not assignable to type 'Crystal'
//     address: "Myanmar"
// }
let user = {
    name: "Crystal",
    address: "Myanmar"
};
function userName(user) {
    return user.name;
}
// console.log(userName(user)); // Argument of type {name: string; address:string} is not assignable to parameter of type person
let account = {
    name: "Crystal",
    address: "Myanmar"
};
console.log(userName(account));
let developer = {
    name: "Crystal"
};
console.log(userName(developer));
