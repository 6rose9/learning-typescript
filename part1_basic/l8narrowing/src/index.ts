// => conditional narrowing

function myFun(val: string | number) {
    if (typeof val === 'string') console.log(`String value ${val.toLocaleUpperCase()}`);
    else console.log(`Number value : ${val}`);
}

myFun('Hello, Crystal!');
myFun(50);
// myFun(true);

type Laptop = {
    brandname: string;
    price?: Number;
}

const getLaptopFun = (item: Laptop | Laptop[]) => {
    if (Array.isArray(item)) {
        return item.length;
    } else {
        return item.brandname;
    }
}

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

// object narrowing

type Article = {
    title: string;
    content: string;
    public: boolean;
    user_id: string | number;
};

const post: Article = {
    title: "Greeting",
    content: "Good Morning",
    public: true,
    user_id: '00001',
}

console.log(post.title);

type News = {
    title: string;
}

let topic: News = post;
console.log(topic); 
// {
//   title: 'Greeting',
//   content: 'Good Morning',
//   public: true,
//   user_id: '00001'
// }

console.log(topic.title); // Greeting
// console.log(topic.content); Error: content property doesn't exit.