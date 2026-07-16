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
