// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ regular array

let colorregarrs: string[] = ["red", "green", "blue"];

let numregarrs: number[] = [10, 20, 30];

let mixregarrs: (string | number | boolean)[] = [100, 200, 300, "red", "green", "blue"];

// nest string array
let neststringarray: string[][] = [["hello", "world"], ["zin", "zin"]];

// nest number array
let nestintarray: number[][] = [[30, 20, 50], [3, 35, 2,], []];

// nest mix array
let greetregarrs: (string | boolean | number)[][] = [["aung aung"], ["age", 28], ["active", true]];

// fixed value
const productdetails: [string, number] = ["Redbull", 2500];

type NestedArray = number | NestedArray[];

let numbersone: NestedArray = 4;

let numberstwo: NestedArray = [34, 54,];

let numberstheree: NestedArray = [34, 43, [34, 45, 35]];

let unknowntypearrs: unknown[] = ["hello", 2, false, "world"];
let anytypearrs: any[] = ["hello", 2, false, "world"];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ generic array

// Array Notation => type[]
// Generic Array Notation => Array<Type>

let colorarrs: Array<string> = ["red", "green", "blue"];

let booleanarrs: Array<boolean> = [true, false, false, true];

let mixgenarrs: Array<string | number | boolean> = [200, 300, true, 3, "orange", false, 90];

// Error: "T" is not defined
// let anytypegenarrs: Array<T> = ["hello",2,false, "world"];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ nested generic array

// nest number array
let evengenarrs: Array<Array<number>> = [[30, 20, 50], [3, 35, 2,], []];

// nest mix array
let nestmixgenarrs: Array<Array<string | number | boolean>> = [["aung aung"], ["age", 28], ["active", true]];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ generic function

/**
 * syntax
 * function funname<T>(){}
 * 
 * T as a placeholder for type
 * the generic placeholder (T, U, etc.) can use generics in functions, classes, interfaces, and type aliases.
 */

// Note: not generic → strictly typed to string[]
function myfun(arr: string[]): string {
    return arr.join(' ');
}

// Note: generic function → accepts any type
function genfunone<T>(value: T): T {
    return value;
}

// Note: generic function → accepts any array type
function genfuntwo<T>(arr: T[]): string | T[] {

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

function genfunfour<T1, T2>(val1: T1, val2: T2): [T1, T2] {
    return [val1, val2];
}

// console.log(genfunfour<string, number>("Orange", 2500));
// console.log(genfunfour<string, boolean>("Do you love pets?", true));
// console.log(genfunfour<string[], unknown[]>(["If", "you", "want", ",", "try", "it"], ["more", "than", 10, "times", "."]));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Default type for Generic Function

function genfunfive<T = string>(value: T): T {
    return value;
}

// console.log(genfunfive("Hello, my love"));
// console.log(typeof genfunfive([10, 20, 30, 40, 50])); //object
// console.log(genfunfive<object>({ name: 'Learning JavaScript Design Patterns', price: '$44.99', 'author': 'Addy Osmani' }));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Generic Object Type

type Person = {
    name: string;
    gender: string;
    age: number
}


const student: Person = {
    name: "su su",
    gender: "female",
    age: 18,
}

/**
 * syntax
 * type ObjectType<T1,T2,T3> = {
 * key1:T1,
 * key2:T2,
 * key3:T3
 * }
 */

type Product<T1, T2, T3> = {
    name: T1;
    price: T2;
    category: T3;
}

let product1: Product<string, number, string> = {
    name: "Redbull",
    price: 2500,
    category: "Energy Drink"
}

let product2: Product<string, number, number> = {
    name: "Coca Cola",
    price: 1500,
    category: 1
}

let product3: Product<string, string, string> = {
    name: "Pepsi",
    price: "1500",
    category: "Soft Drink"
}

let products: Product<any, any, any>[] = [
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

let myGenSet: Set<string> = new Set(["red", "green", "blue", "red", "green"]);
console.log(myGenSet); // Set(3) { 'red', 'green', 'blue' }
console.log(myGenSet.size); // 3
console.log(myGenSet.has("green")); // true

let mixed: Set<string | number | boolean> = new Set(["red", 20, "green", true, 30, false, "blue", 20, true, 30, "red", false]);
console.log(mixed);

let addSet: Set<number> = new Set([10, 20]);
addSet.add(30);
addSet.add(10);

console.log(addSet); // Set(3) { 10, 20, 30 }

addSet.delete(20);
console.log(addSet); // Set(2) { 10, 30 }

addSet.clear();
console.log(addSet); // Set(0) {}

let colorSet: Set<string> = new Set(["red", "green", "blue"]);

for (let color of colorSet) {
    console.log(color);
}

// Generic Set with Objects

type User = {
    name: string;
    age: number;
    isActive: boolean;
}

let userSet: Set<User> = new Set([
    { name: "Alice", age: 30, isActive: true },
    { name: "Bob", age: 25, isActive: false }
]);

console.log(userSet);

userSet.add({ name: "Charlie", age: 35, isActive: true });
userSet.add({ name: "Alice", age: 20, isActive: true }); 

console.log(userSet);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ keyof, extends

type VipUser = {
    name: string;
    age: number;
    email: string;
    address: string;
    isActive: boolean;
}

type VipClient = keyof VipUser; // Extracts keys as union type: "name" | "age" | "isActive"

const normalUser = {
    name: "John Doe",
    age: 30,
    isActive: true
}

type Vendor = typeof normalUser; // Extracts type of normalUser object

const vendor: Vendor = {
    name: "Jane Smith",
    age: 25,
    isActive: false
}

type AdminUser = keyof Vendor; // Extracts keys as union type: "name" | "age" | "isActive"

let admin: AdminUser = "name"; // Valid assignment
admin = "age"; // Valid assignment
// admin = "email"; // ❌ Error: Type '"email"' is not assignable to type 'AdminUser'.

console.log(admin); // Output: "age"

function getshopinfo<T, K extends keyof T>(obj: T, info: K): T[K] {
    return obj[info];
}

let shopname = getshopinfo(vendor, "name"); // Type is string
let userage = getshopinfo(normalUser, "age"); // Type is number

console.log(shopname); // Output: "Jane Smith"
console.log(userage); // Output: 30

// ---------------------------------------------------------------------------------------------------------- Notes

// Array<string> ✅ works

let colors: Array<string> = ["red", "green"];

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