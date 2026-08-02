"use strict";
// Pick mapped types
let book = {
    title: "Top Choice",
};
let employeeone = {
    name: "Daw Pwint",
    position: "CTO",
};
function getemployee(obj) {
    console.log(`${obj.name} : ${obj.position}`);
}
getemployee(employeeone);
