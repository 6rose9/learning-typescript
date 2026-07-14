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

// ----------------------------------------------------------------------

type PhoneBooks = {
    [name: string]: string
}

let myContacts: PhoneBooks = {
    mother: "093435355354",
    father: "53536336",
    mylove: "343536464"
}

// ----------------------------------------------------------------------

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