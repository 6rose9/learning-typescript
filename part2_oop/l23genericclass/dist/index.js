"use strict";
class NormalNumberStore {
    datas = [];
    add(n) {
        this.datas.push(n);
    }
    getData() {
        return this.datas;
    }
}
let store = new NormalNumberStore();
store.add(30);
store.add(23);
store.add(54);
console.log(store.getData());
// ---------------------------------------------
class GenericStore {
    datas = [];
    add(value) {
        this.datas.push(value);
    }
    getData() {
        return this.datas;
    }
}
let gstore = new GenericStore();
gstore.add("Su Su");
gstore.add("Hla Hla");
gstore.add("Yu Yu");
// gstore.add(4); ERROR 
console.log(gstore.getData());
class Student {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let student1 = new Student("John", 23, "Yangon");
// console.log(student1); Student { name: 'John', age: 23, address: 'Yangon' }
let student2 = new Student("Skylar", "23 years old", "Mandalay");
// console.log(student2); Student { name: 'Skylar', age: '23 years old', address: 'Mandalay' }
