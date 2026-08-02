// Record Types

// Record<key, value>

// exe 1

const countryObj: Record<string, string> = {
    MM: "Myanmar",
    TH: "Thailand",
    SLK: "Srilanka",
}

console.log(countryObj.MM);
console.log(countryObj.TH);

// exe 2

type UserType = "Admin" | "User" | "Guest";

const permissionObj: Record<UserType, string> = {
    Admin: "Full Access",
    User: "Limited Access",
    Guest: "ReadOnly"
}

console.log(permissionObj.Guest);

// exe 3

// In TypeScript, object property keys can only be primitive types (string, number, or symbol).
// type Job = {
//     name: string,
//     skill: string[],
// };

type Staff = {
    id: string,
    name: string,
    age: number,
    email?: string
}

type Role = "Frontend Developer" | "Backend Developer" | "FullStack Developer";

let team: Record<Role, Staff> = {
    "Frontend Developer": {
        id: "0001",
        name: "U Aung San Win",
        age: 29,
        email: "aungsanwin@gmail.com"
    },
    "Backend Developer": {
        id: "0034",
        name: "Daw Chaw Su",
        age: 28,
    },
    "FullStack Developer": {
        id: "0023",
        name: "U Kyaw Thu",
        age: 30,
        email: "kyawthu353@gmail.com"
    }
}

// exe 4

// key is Myanmar and value is 0 by default
// enum Language {
//     Myanmar
//     English
//     Thailand
// }

enum Language {
    Myanmar = "mm",
    English = "en",
    Thailand = "th"
}

console.log(Language);

const greetingObj: Record<Language, string> = {
    "mm": "Mingalarpar",
    "en": "Hello",
    "th": "Sawasdee",
    // "japan": "Konnichiwa" 
}

type OperationType = "add" | "subtract";

const calculateObj: Record<OperationType, (num1: number, num2: number) => number> = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
}

console.log(calculateObj.add(30, 40)); // 70
console.log(calculateObj.subtract(30, 40)); // -10

// exe 6 (Nested Record Type)

type CategoryType = "Fruits" | "Snacks";
type ItemType = "Apple" | "Orange" | "Jelly";

const inventoryObj: Record<CategoryType, Record<ItemType, number>> = {
    Fruits: {
        Apple: 10,
        Jelly: 35,
        Orange: 34,
    },
    Snacks: {
        Apple: 34,
        Orange: 43,
        Jelly: 34
    }
}

console.log(inventoryObj.Fruits.Apple); // 10
console.log(inventoryObj.Snacks.Apple); // 34