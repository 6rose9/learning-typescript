type voidFunc = () => void;

const f1: voidFunc = () => {
    return 12;
}

// console.log(f1().toFixed()); //Property 'toFixed' does not exist on type 'voidFunc'. // only for ts

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return "Hello";
}