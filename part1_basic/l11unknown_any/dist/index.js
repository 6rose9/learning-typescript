"use strict";
// unknown & any
// Feature                        unknown                           any
// Type Safety                   ✅ Type-safe                     ❌ Not type-safe
// Assign to other types         ❌ Not allowed without checking  ✅ Allowed (even if wrong)
// => unknown
let sayhi = "Hello World";
let age = 30;
console.log(typeof age); // number
// let getage: number = age; Error: unknown type can't not assign to number type
// ------------------ exe 1
let getage = typeof age === "number" ? age : 20;
console.log(getage);
// ------------------ exe 2
let phone = "091345454645";
console.log(typeof phone); // string
let getphone = typeof phone === "number" ? phone : 199;
console.log(typeof getphone); // number
let myphone;
console.log(typeof myphone); // undefined
let yourphone;
// console.log(typeof yourphone); Variable 'yourphone' is used before assign
yourphone = "09345789567";
// ------------------ exe 3
let myvalue;
myvalue = 100;
myvalue = "100";
myvalue = null;
myvalue = true;
myvalue = {
    name: "Crystal",
    address: "Myanmar"
};
// console.log(myvalue.name); // Error: myvalue is of type unknown
