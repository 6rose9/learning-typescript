"use strict";
// => conditional narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function myFun(val) {
    if (typeof val === 'string')
        console.log(`String value ${val.toLocaleUpperCase()}`);
    else
        console.log(`Number value : ${val}`);
}
myFun('Hello, Crystal!');
myFun(50);
const getLaptopFun = (item) => {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.brandname;
    }
};
console.log(`Laptop Brance is`, getLaptopFun({ brandname: 'Dell' }));
console.log(`How many laptop are there?`);
console.log(getLaptopFun([
    {
        brandname: "Dell",
        price: 40_000_000
    },
    {
        brandname: "HP",
        price: 35_000_000
    },
]));
const post = {
    title: "Greeting",
    content: "Good Morning",
    public: true,
    user_id: '00001',
};
console.log(post.title);
let topic = post;
console.log(topic);
// {
//   title: 'Greeting',
//   content: 'Good Morning',
//   public: true,
//   user_id: '00001'
// }
console.log(topic.title); // Greeting
// console.log(topic.content); Error: content property doesn't exit.
