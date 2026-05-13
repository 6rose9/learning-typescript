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
