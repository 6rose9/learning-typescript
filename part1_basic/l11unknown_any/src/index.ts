// unknown & any

// Feature                        unknown                           any
// Type Safety                   ✅ Type-safe                     ❌ Not type-safe
// Assign to other types         ❌ Not allowed without checking  ✅ Allowed (even if wrong)

// => unknown

let sayhi: unknown = "Hello World";
let age: unknown = 30;

console.log(typeof age); // number

// let getage: number = age; Error: unknown type can't not assign to number type

// ------------------ exe 1

let getage: number = typeof age === "number" ? age : 20;
console.log(getage);

// ------------------ exe 2

let phone: unknown = "091345454645";
console.log(typeof phone); // string

let getphone = typeof phone === "number" ? phone : 199;
console.log(typeof getphone); // number

let myphone;
console.log(typeof myphone); // undefined

let yourphone: string;
// console.log(typeof yourphone); Variable 'yourphone' is used before assign
yourphone = "09345789567";

// ------------------ exe 3

let myvalue: unknown;
myvalue = 100;
myvalue = "100";
myvalue = null;
myvalue = true;

myvalue = {
    name: "Crystal",
    address: "Myanmar"
};

// console.log(myvalue.name); // Error: myvalue is of type unknown

// ------------------// ------------------// ------------------// ------------------// ------------------

// NOT RECOMMENDED
let brand: unknown = "Redbull";
let price: any = brand;

let fee: number = price; // Beware: string is working in number
console.log(fee); // Redbull

// RECOMMENDED
let brandname: any = "Sponsor";
let ordinaryprice: unknown = brandname;

// let sellprice: number = ordinaryprice; Error: Type 'unknown' cannot assign to number
let sellprice: number = typeof ordinaryprice === 'number' ? ordinaryprice : 100;
console.log(sellprice); // 100

// ------------------// ------------------// ------------------// ------------------// ------------------

// unknown in union (|) and intersection (&) type

let value: unknown | string = "apple"; 
// let fruit: string = value; Error: 'unknown is not assignable to type string'

let p: unknown | number = 200;
// let q: number = p; Error
// q: unknown = p; Error

let productname: unknown & string = "Coffee"; 
let itemname: string = productname;

// let test: boolean = productname; Error
let test: unknown = productname;