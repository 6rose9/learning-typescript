"use strict";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ regular array
Object.defineProperty(exports, "__esModule", { value: true });
let colorregarrs = ["red", "green", "blue"];
let numregarrs = [10, 20, 30];
let mixregarrs = [100, 200, 300, "red", "green", "blue"];
// nest string array
let neststringarray = [["hello", "world"], ["zin", "zin"]];
// nest number array
let nestintarray = [[30, 20, 50], [3, 35, 2,], []];
// nest mix array
let greetregarrs = [["aung aung"], ["age", 28], ["active", true]];
// fixed value
const productdetails = ["Redbull", 2500];
let numbersone = 4;
let numberstwo = [34, 54,];
let numberstheree = [34, 43, [34, 45, 35]];
let unknowntypearrs = ["hello", 2, false, "world"];
let anytypearrs = ["hello", 2, false, "world"];
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ generic array
// Array Notation => type[]
// Generic Array Notation => Array<Type>
let colorarrs = ["red", "green", "blue"];
let booleanarrs = [true, false, false, true];
let mixgenarrs = [200, 300, true, 3, "orange", false, 90];
// Error: "T" is not defined
// let anytypegenarrs: Array<T> = ["hello",2,false, "world"];
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ nested generic array
// nest number array
let evengenarrs = [[30, 20, 50], [3, 35, 2,], []];
// nest mix array
let nestmixgenarrs = [["aung aung"], ["age", 28], ["active", true]];
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ generic function
/**
 * syntax
 * function funname<T>(){}
 *
 * T as a placeholder for type
 * the generic placeholder (T, U, etc.) can use generics in functions, classes, interfaces, and type aliases.
 */
// Note: not generic → strictly typed to string[]
function myfun(arr) {
    return arr.join(' ');
}
// Note: generic function → accepts any type
function genfunone(value) {
    return value;
}
// Note: generic function → accepts any array type
function genfuntwo(arr) {
    if (arr.some(v => typeof v === "string")) {
        return arr.join(' ');
    }
    return arr;
}
// Note: error -> type parameter name can not be string
// function genfunthree<string>(value: string) {
//     console.log(value);
// }
// console.log(myfun(['I', 'am', 'trying', 'my', 'best!',]));
// console.log(genfunone("All is well"));
// console.log(genfunone(["You", "can", "do", "this"]));
// console.log(genfunone([..."red", 30, "blue", ...[50, 20, "green", false],]));
// console.log(genfunone<string>('Hello World'));
// console.log(genfunone<string[]>(['I', 'am', 'trying', 'my', 'best!',]));
// console.log(genfunone<((string|number))[]>([10, 'girls', 'and', 5, 'boys']));
// console.log(genfuntwo(['I', 'am', 'trying', 'my', 'best!',]));
// console.log(genfuntwo([10, 'girls', 'and', 5, 'boys']));
// console.log(genfuntwo([30, 50, true, 200, false]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Function with two Generic Types
function genfunfour(val1, val2) {
    return [val1, val2];
}
// console.log(genfunfour<string, number>("Orange", 2500));
// console.log(genfunfour<string, boolean>("Do you love pets?", true));
// console.log(genfunfour<string[], unknown[]>(["If", "you", "want", ",", "try", "it"], ["more", "than", 10, "times", "."]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Default type for Generic Function
function genfunfive(value) {
    return value;
}
const student = {
    name: "su su",
    gender: "female",
    age: 18,
};
let product1 = {
    name: "Redbull",
    price: 2500,
    category: "Energy Drink"
};
let product2 = {
    name: "Coca Cola",
    price: 1500,
    category: 1
};
let product3 = {
    name: "Pepsi",
    price: "1500",
    category: "Soft Drink"
};
let products = [
    product1,
    product2,
    product3
];
console.log(products);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Generic Set
let myset = new Set([2, 5, 6, 3, 2, 5, 60, 30, 50, 25, 17, 20]);
console.log(myset); // Set(10) { 2, 5, 6, 3, 60, 30, 50, 25, 17, 20 }
console.log(myset.size); // 10
console.log(myset.has(5)); // true
let myGenSet = new Set(["red", "green", "blue", "red", "green"]);
console.log(myGenSet); // Set(3) { 'red', 'green', 'blue' }
console.log(myGenSet.size); // 3
console.log(myGenSet.has("green")); // true
let mixed = new Set(["red", 20, "green", true, 30, false, "blue", 20, true, 30, "red", false]);
console.log(mixed);
let addSet = new Set([10, 20]);
addSet.add(30);
addSet.add(10);
console.log(addSet); // Set(3) { 10, 20, 30 }
addSet.delete(20);
console.log(addSet); // Set(2) { 10, 30 }
addSet.clear();
console.log(addSet); // Set(0) {}
let colorSet = new Set(["red", "green", "blue"]);
for (let color of colorSet) {
    console.log(color);
}
let userSet = new Set([
    { name: "Alice", age: 30, isActive: true },
    { name: "Bob", age: 25, isActive: false }
]);
console.log(userSet);
userSet.add({ name: "Charlie", age: 35, isActive: true });
userSet.add({ name: "Alice", age: 20, isActive: true });
console.log(userSet);
const normalUser = {
    name: "John Doe",
    age: 30,
    isActive: true
};
const vendor = {
    name: "Jane Smith",
    age: 25,
    isActive: false
};
let admin = "name"; // Valid assignment
admin = "age"; // Valid assignment
// admin = "email"; // ❌ Error: Type '"email"' is not assignable to type 'AdminUser'.
console.log(admin); // Output: "age"
function getshopinfo(obj, info) {
    return obj[info];
}
let shopname = getshopinfo(vendor, "name"); // Type is string
let userage = getshopinfo(normalUser, "age"); // Type is number
console.log(shopname); // Output: "Jane Smith"
console.log(userage); // Output: 30
// ---------------------------------------------------------------------------------------------------------- Notes
// Array<string> ✅ works
let colors = ["red", "green"];
// let arr: Array<T> = [1, 2, 3]; // ❌ Error: T not defined
// Here, Array<string> is a generic type provided by TypeScript.
// You are applying the generic to a concrete type (string).
// string is not a placeholder — it’s a real type.
// function funname<string>() {} ❌ doesn’t work
// Here, you are trying to declare a generic placeholder called string.
// string is a reserved keyword, not a placeholder name.
// Generic placeholders must be new, valid identifiers like T, U, K, etc.
// Quick rules:
// T[] and Array<type> are interchangeable, pick whichever looks cleaner.
// Use union types (T | U)[] for mixed-type arrays.
// Use ReadonlyArray<T> if you don’t want the array to be mutated.
// Use tuples [T1, T2, …] for fixed-length arrays with different types.
//# sourceMappingURL=l7generic.js.map