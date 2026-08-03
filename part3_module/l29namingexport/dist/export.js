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
