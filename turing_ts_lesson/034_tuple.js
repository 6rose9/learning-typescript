function div(a, b) {
    if (b === 0) {
        return [0, new Error("Division by zero")];
    }
    return [a / b, null];
}
var _a = div(10, 2), result = _a[0], error = _a[1];
if (error) {
    console.log("Error:", error);
}
else {
    console.log("Result:", result); // output: Result:5
}
var tuple = ["Age", 30];
console.log('Tuple:', tuple[0], 'Age ', tuple[1]);
var pair = [1, "Zin Zin"];
// console.log(pair[0].toUpperCase(),pair[1].toUpperCase());
console.log(pair[0].toFixed(), pair[1].toUpperCase());
var another = [2, "Crystal", true];
console.log('Another:', another[0], another[1], another[2]);
var age = another[0], studentName = another[1], isStudent = another[2];
console.log('Destructured:', age, studentName.toUpperCase(), isStudent);
var someTuple = [3, "Smith"];
console.log('Readonly Tuple:', someTuple[0], someTuple[1]);
// someTuple[0] = 4;  
