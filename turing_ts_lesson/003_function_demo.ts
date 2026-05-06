function hello(msg : any) {
    console.log("Hello ", msg);
}

hello('World'); 
hello(123); 

function add(x: number, y: number): number
{
    return x + y;
}

let sum = add(10, 20);
console.log('Sum ', sum);
// add();
// add(10, '20');

async function getData(data: number): Promise<number>{
    return data;
}

getData(10).then(console.log);