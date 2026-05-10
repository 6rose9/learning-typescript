// typeof returns "function" because JavaScript gives functions their own special type label.
// But technically, functions are still objects

function greet() {
    console.log("hello");
}

console.log(typeof greet); // "function"
console.log(greet instanceof Object); // true

let obj: object = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(obj);

// obj = 123; Type 'number' is not assignable to type 'object'.

// function can assign to object type but not invokable
obj = () => console.log("Hello"); 
// obj(); 

// console.log("Name ", obj.name); Property 'name' does not exist on type 'object'.
// console.log("Name ", obj['name']);

