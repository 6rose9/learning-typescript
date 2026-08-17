"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./services/UserService");
const myContact = new UserService_1.UserService();
console.log("----------------------Create a new contact----------------------");
const data = [
    ["Crystal", "crystal@gmail.com", "09260320343"],
    ["Kyaw Thu", null, "093456687876"],
    ["Su Su Aung", "susuaung@gmail.com", "09847035634"]
];
data.forEach(user => console.log("Add a user: ", myContact.createUser(...user)));
console.log("----------------------All Contacts----------------------");
console.log("Users: ", myContact.getAllUsers());
console.log("Update User: ", myContact.updateUser(3, { email: "kyawthu234@gmail.com" }));
console.log("Delete user", myContact.deleteUser(2));
