// assign and use

let a: any = "Hello World";
console.log(a);

a = 42;
console.log(a);

a = true;
console.log(a);

a = () => console.log("This is a function assigned to 'a'");
a();

a = { key: "value" };
console.log(a.key);

// -------------------------------------------------------------------------

// as a hold, not not meant for direct individual usage

let b: unknown = "Unknown Type";
console.log(b);

b = 100;
console.log(b);

b = {
    anotherKey: "anotherValue"
}
// console.log(b.anotherKey); //'b' is of type 'unknown'.

let x: unknown = "hello";

// x.toUpperCase(); // not allowed

if (typeof x === "string") {
    x.toUpperCase();
}