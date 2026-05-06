function doSomething() {
    console.log("doSomething called");
}
doSomething.description = "This function does something important";
var fun = doSomething;
console.log('fun.description ', fun.description);
console.log(typeof doSomething); // function
