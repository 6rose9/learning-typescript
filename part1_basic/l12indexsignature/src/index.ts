// Index Signature

// type Desktop = {
//     productname: string;
//     name: string;
// }

// let product1: Desktop = {
//     productname: "HP",
// }

// let product2: Desktop = {
//     productname: "Dell",
//     name: "0001",
//     model: "954957",
// }

type Product = {
    [key: string]: string
}

let product2: Product = {
    productname: "Dell",
    name: "0001",
    model: "954957",
}

let product3: Product = {
    productname: "Dell",
    name: "0001",
    model: "954957",
    // price : 8000000, Error: must be string type
}

// ---------------------------

type PhoneBooks = {
    [name: string]: string
}

let myContacts: PhoneBooks = {
    mother: "093435355354",
    father: "53536336",
    mylove: "343536464"
}

// ----------------------------------//------------------------------------

type Student = {
    [key: string]: string;
    // grade: number; Error: number type is not assignable to index string type
    grade: string;
}

let student1: Student = {
    name: "John",
    grade: "12",
    address: "Yangon"
}

let student2: Student = {
    grade: "10"
}

// ---------------------------

type Numbers = {
    [key: number]: string;
}

let numbers: Numbers = {
    1: "One",
    '2': "Two",
}

console.log(numbers);

// ----------------------------------//------------------------------------

type PC = {
    name: string;
    price: number;
}

type MiniPC = {
    // [k: string]: {
    //     name: string;
    //     price: number;
    // }
    [k: string]: PC
}

let officePC: MiniPC = {
    pc1: {
        name: "HP",
        price: 5_000_000
    },
    // pc2: {
    //     name: "HP",
    // },
    // note: "Test", ERROR
    pc2: {
        name: "DELL",
        price: 5_000_000
    },
}

type User = {
    [k: string]: string | number;
}

let user: User = {
    name: "John",
    age: 20
}

// ----------------------------------//------------------------------------

// index access type

type Phone = {
    brandname: string;
    price: number;
    model: {
        name: string;
        serialnumber: string;
    }
}

type Brand = Phone["brandname"]; // can't use dot (.) notation bcz it is type

let apple: Brand = "Iphone 17 pro max";
console.log(apple);

type SerialNumber = Phone["model"]["serialnumber"];
let serial: SerialNumber = "09589375938573985";

type PhoneKey = "brandname" | "price" | "model";
type PhoneType = Phone[PhoneKey];

let myPhone: PhoneType = "Samsung";
let phonePrice: PhoneType = "5000000";