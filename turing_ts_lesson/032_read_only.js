var person = {
    name: "John",
    age: 25,
    address: {
        city: "Yangon",
    }
};
console.log('Person:', person);
person.age = 26;
// person.name = "Zin Zin"; Cannot assign to 'name' because it is a read-only property.
// person.address = {}; Cannot assign to 'address' because it is a read-only property.
person.address.city = "Thaton";
console.log('Updated Person:', person);
