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

// ---------------------------------------------

interface SetId {
    id: number | string;
}

class MyStore<T extends SetId> {
    private datas: T[] = [];
    add(item: T) {
        this.datas.push(item);
    }
    getitems() {
        return this.datas;
    }

    getById(id: number | string): T | undefined {
        return this.datas.find(item => item.id === id)
    }
}

let schoolitems = new MyStore<{ id: string, name: string, price: number }>();
schoolitems.add({ id: '0001', name: 'book', price: 2000 });
schoolitems.add({ id: '0002', name: 'pencil', price: 1000 });
schoolitems.add({ id: '0003', name: 'eraser', price: 500 });
console.log(schoolitems.getitems());
console.log(schoolitems.getById("32"));

let foods = new MyStore<{ id: number, name: string }>();
foods.add({ id: 1, name: "apple" });
foods.add({ id: 2, name: "orange" });
foods.add({ id: 3, name: "limon" });
console.log(foods.getitems());
console.log(foods.getById(3));