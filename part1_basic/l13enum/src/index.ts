// Enum 

// Numeric Enum (default, auto increment from 0)
// String Enum

// Reverse Mapping (only works with numeric enums)

// Use PascalCase for enum

// camelCase
// snake_case

enum Gender {
    Female,
    Male,
    Other
};

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
// console.log(Gender.0);

const enum Status {
    Pending,
    Completed,
    Failed
}

console.log(Status.Pending); // 0

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

enum Numbers {
    num1 = 10, 
    num2,
    num3,
    num4,
    num5 = 100
}

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

enum HttpCode {
    OK = 200,
    BadRequest = 400,
    Unauthenticated = 401,
    Unauthorized  = 403,
    UnprocessableEntity = 422
}

console.log(HttpCode.OK);