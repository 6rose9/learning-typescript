"use strict";
class Staff {
}
const staffObj = new Staff();
console.log(staffObj);
staffObj.hasnrc = true;
staffObj.hascar = false;
console.log(staffObj); // Staff { hasnrc: true, hascar: false }
class Animal {
    type = "cat";
    category = "pet";
    name = "Shwewar";
    // age = 2; ERROR: Property 'age' of type 'number' is not assignable to 'string' index type 'string'.
    // Record allows to construct an object type with specific key types (K) and value types (T).
    constructor(properties = {}) {
        Object.assign(this, properties);
    }
}
let cat = new Animal({
    name: "Shwewar",
    color: "white", // permitted by the string index signature
});
console.log(cat.name); // Shwewar
console.log(cat["color"]); // white
let elephant = new Animal({
    type: "elephant",
    category: "wildlife",
    name: "Radha",
});
console.log(elephant.name);
let mammal = new Animal({
    type: "mammal",
    class: "vertebrate",
    // characters: ["has fur or hair", "produces milk", "warm-blooded"], ERROR: Type 'string[]' is not assignable to type 'string'.
});
