let clazz = class <T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }

    display() {
        console.log(`Value: ${this.value}`)
    }
}

let box = new clazz<number>(123);
box.display();

let strbox = new clazz<string>("Hello");
strbox.display();

// let boxx = new clazz<boolean>("Hello");