type StringOrNumber = string | number;

let a: StringOrNumber = "Hello";
console.log(a.toLocaleLowerCase());

a = 123;
// console.log('a ', a.toUpperCase()); // Property 'toUpperCase' does not exist on type 'number'.

// narrowing
function print(id: StringOrNumber) {
  // console.log(id.toUpperCase());
  if (typeof id === "string") {
    console.log("id ", id.toUpperCase());
  } else {
      console.log('id ', id.toFixed());
  }
}

print("Hello");
print(123);