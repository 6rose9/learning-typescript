class NormalNumberStore {

    private datas: number[] = [];

    add(n: number) {
        this.datas.push(n);
    }

    getData(): number[] {
        return this.datas;
    }

}

let store = new NormalNumberStore();
store.add(30);
store.add(23);
store.add(54);

console.log(store.getData());

// ---------------------------------------------

class GenericStore<T> {
    private datas: T[] = [];

    add(value: T) {
        this.datas.push(value);
    }

    getData() {
        return this.datas;
    }
}

let gstore = new GenericStore<string>();
gstore.add("Su Su");
gstore.add("Hla Hla");
gstore.add("Yu Yu");
// gstore.add(4); ERROR 

console.log(gstore.getData());

class Student<T1, T2, T3> {
    constructor(
        public name: T1,
        public age: T2,
        public address: T3
    ) { }
}

let student1 = new Student<string, number, string>("John", 23, "Yangon");
// console.log(student1); Student { name: 'John', age: 23, address: 'Yangon' }

let student2 = new Student<string, string, string>("Skylar", "23 years old", "Mandalay");
// console.log(student2); Student { name: 'Skylar', age: '23 years old', address: 'Mandalay' }