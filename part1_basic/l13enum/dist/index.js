"use strict";
// Enum 
// Numeric Enum (default, auto increment from 0)
// String Enum
// Reverse Mapping (only works with numeric enums)
// Use PascalCase for enum
// camelCase
// snake_case
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
console.log(Gender);
// {
//   '0': 'Female',
//   '1': 'Male',
//   '2': 'Other',
//   Female: 0,
//   Male: 1,
//   Other: 2
// }
console.log(Gender.Female); // 0
console.log(Gender['Female']); // 0
console.log(Gender[0]); // Female
console.log(0 /* Status.Pending */); // 0
// console.log(Status); Error: const enums can only used in property or index access expression or import / export , type query
// console.log(Status[2]); 'Error: A const enum member can only be accessed using a string literal'
// let enum Stack1 { Error: Variable declaration not allowed at this location'
//     FrontEnd,
//     Backend,
//     FullStack
// }
// var enum Stack2 { Error: enum is not allowed as a variable declaration name
//     FrontEnd,
//     Backend,
//     FullStack
// }
var Numbers;
(function (Numbers) {
    Numbers[Numbers["num1"] = 10] = "num1";
    Numbers[Numbers["num2"] = 11] = "num2";
    Numbers[Numbers["num3"] = 12] = "num3";
    Numbers[Numbers["num4"] = 13] = "num4";
    Numbers[Numbers["num5"] = 100] = "num5";
})(Numbers || (Numbers = {}));
console.log(Numbers);
// {
//   '10': 'num1',
//   '11': 'num2',
//   '12': 'num3',
//   '13': 'num4',
//   '100': 'num5',
//   num1: 10,
//   num2: 11,
//   num3: 12,
//   num4: 13,
//   num5: 100
// }
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthenticated"] = 401] = "Unauthenticated";
    HttpCode[HttpCode["Unauthorized"] = 403] = "Unauthorized";
    HttpCode[HttpCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
})(HttpCode || (HttpCode = {}));
console.log(HttpCode.OK);
let success = HttpCode.OK;
console.log(success);
var MyType;
(function (MyType) {
    MyType[MyType["TypeOne"] = 123] = "TypeOne";
    MyType["TypeTwo"] = "hello";
    // TypeThree = true, 
})(MyType || (MyType = {}));
// ------------------------------------------- Enum Merging
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    // White, In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element.
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Yellow"] = 2] = "Yellow";
    // Blue, Duplicate identifier 'Blue'
})(Color || (Color = {}));
console.log(Color);
// {
//   '0': 'White',
//   '1': 'Black',
//   '2': 'Yellow',
//   Red: 0,
//   Green: 1,
//   Blue: 2,
//   White: 0,
//   Black: 1,
//   Yellow: 2
// }
console.log(Color.Green); // 1
console.log(Color[1]); // Black
console.log(Color.Blue); // 2
console.log(Color[2]); // Yellow
console.log(Color[10]); // undefined
// ----------------------------------------------   With Function
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["North"] = 2] = "North";
    Direction[Direction["Souht"] = 3] = "Souht";
})(Direction || (Direction = {}));
function move(dir) {
    console.log(`You are moving to ${Direction[dir]}`);
}
move(1); // You are moving to West
move(Direction.East); // You are moving to East
var CarEngine;
(function (CarEngine) {
    CarEngine[CarEngine["Stopped"] = 0] = "Stopped";
    CarEngine[CarEngine["Started"] = 1] = "Started";
})(CarEngine || (CarEngine = {}));
function isRunning(state) {
    return state === CarEngine.Started;
}
console.log(isRunning(1));
