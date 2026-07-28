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
class MyStore {
    datas = [];
    add(item) {
        this.datas.push(item);
    }
    getitems() {
        return this.datas;
    }
    getById(id) {
        return this.datas.find(item => item.id === id);
    }
}
let schoolitems = new MyStore();
schoolitems.add({ id: '0001', name: 'book', price: 2000 });
schoolitems.add({ id: '0002', name: 'pencil', price: 1000 });
schoolitems.add({ id: '0003', name: 'eraser', price: 500 });
console.log(schoolitems.getitems());
console.log(schoolitems.getById("32"));
let foods = new MyStore();
foods.add({ id: 1, name: "apple" });
foods.add({ id: 2, name: "orange" });
foods.add({ id: 3, name: "limon" });
console.log(foods.getitems());
console.log(foods.getById(3));
