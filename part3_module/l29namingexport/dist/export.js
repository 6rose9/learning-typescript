export function getname(name) {
    return name;
}
export function getinfo({ name, email, address }) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
}
function greeting() {
    console.log(`Mingalarpar!`);
}
export { greeting, };
function getuser(name) {
    return name;
}
const student = {
    name: "John",
    age: 30,
    address: "Yinnyein"
};
export { getuser as userinfo };
export { getuser, student };
