// method 1
export function getname(name: string) {
    return name;
}

export function getinfo({ name, email, address }: { [key: string]: string }) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
}

// method 2

function greeting() {
    console.log(`Mingalarpar!`);
}

export {
    greeting,
}

// method 3 (with alias)

function getuser(name: string) {
    return name;
}

const student = {
    name: "John",
    age: 30,
    address: "Yinnyein"
}

export { getuser as userinfo }

export { getuser, student}