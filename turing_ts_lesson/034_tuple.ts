function div(a: number, b: number): [number, Error | null] {
    if (b === 0) {
        return [0, new Error("Division by zero")];
    }
    return [a / b, null];
}

let [result, error] = div(10, 2);

if (error) {
    console.log("Error:", error);
} else {
    console.log("Result:", result); // output: Result:5
}

type StringNumberTuple = [string, number];
let tuple: StringNumberTuple = ["Age", 30];
console.log('Tuple:', tuple[0], 'Age ', tuple[1]);

type Pair = [number, string];

let pair: Pair = [1, "Zin Zin"];
// console.log(pair[0].toUpperCase(),pair[1].toUpperCase());
console.log(pair[0].toFixed(), pair[1].toUpperCase());

let another: [number, string, boolean] = [2, "Crystal", true];
console.log('Another:', another[0], another[1], another[2]);

let [age, studentName, isStudent] = another;
console.log('Destructured:', age, studentName.toUpperCase(), isStudent);

let someTuple: readonly [number, string] = [3, "Smith"];
console.log('Readonly Tuple:', someTuple[0], someTuple[1]);
// someTuple[0] = 4;  