type GenBox<T> = {
    value: T; // placeholder
}

let numBox: GenBox<number> = {
    value: 123
}
console.log('numBox ', numBox.value.toFixed());

let strBox: GenBox<string> = {
    value: "Zin Zin Thin"
}
console.log(`stringBox => My name is ${strBox.value}`);

let arr: Array<number> = [1, 3, 5];