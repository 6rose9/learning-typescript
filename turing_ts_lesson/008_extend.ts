interface Circle{
    radius: number
}

interface ColoredCircle extends Circle{
    color: string;
}

let c1: ColoredCircle = {
    radius: 10,
    color: "red",
}

console.log(c1);