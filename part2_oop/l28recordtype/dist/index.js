"use strict";
// Record Types
// Record<key, value>
// exe 1
const countryObj = {
    MM: "Myanmar",
    TH: "Thailand",
    SLK: "Srilanka",
};
console.log(countryObj.MM);
console.log(countryObj.TH);
const permissionObj = {
    Admin: "Full Access",
    User: "Limited Access",
    Guest: "ReadOnly"
};
console.log(permissionObj.Guest);
let team = {
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
};
// exe 4
// key is Myanmar and value is 0 by default
// enum Language {
//     Myanmar
//     English
//     Thailand
// }
var Language;
(function (Language) {
    Language["Myanmar"] = "mm";
    Language["English"] = "en";
    Language["Thailand"] = "th";
})(Language || (Language = {}));
console.log(Language);
const greetingObj = {
    "mm": "Mingalarpar",
    "en": "Hello",
    "th": "Sawasdee",
    // "japan": "Konnichiwa" 
};
const calculateObj = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
};
console.log(calculateObj.add(30, 40)); // 70
console.log(calculateObj.subtract(30, 40)); // -10
const inventoryObj = {
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
};
console.log(inventoryObj.Fruits.Apple); // 10
console.log(inventoryObj.Snacks.Apple); // 34
