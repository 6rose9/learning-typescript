class Container {
    x = 10; // public
    protected y = 20;
    private z = "Zin Zin";

    #treasure: string = "💎";

    protected show() {
        console.log("Container show me:", this.z);
        console.log("My treasure:", this.#treasure);
    }

    public set treasure(value: number) {
        if (value < 0) throw new Error("value must be greater than 0");
        for (let i = 0; i < value; i++) {
            this.#treasure += " 💎";
        }
    }

    public get treasure(): string {
        return this.#treasure;
    }
}

class SpecialContainer extends Container {
    display(): void {
        super.show(); // Accessing protected method from subclass
        // this.show(); super or this

        console.log(`SpecialContainer dispaly y is:  ${this.y}`);
        // console.log(`Can I take private value of super ? : ${this.z}`);
    }
}

let container = new Container();
container.x = 15;
console.log("Container x: ", container.x); // Output: container x : 15

// container.y = 30; Property 'y' is protected and only accessible within class 'Container' and its subclasses.
// container.show();
// container.z = "Crystal";

let special = new SpecialContainer();
special.display();

// ------------------------------------------------------

// visibility check only for compile time

let obj: any = container;
console.log("Container protected y => ", obj.y);
console.log("Container private z => ", obj.z);
console.log("Container private z => ", obj['z']);

console.log("Get treasure", container.treasure);

// set treasure
container.treasure = 4;
// container.#treasure = 4; // TypeScript understands that # means a JavaScript private field.

console.log("Plus 4 treasure", container.treasure);