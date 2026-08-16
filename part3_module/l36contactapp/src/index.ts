import { UserService } from "./services/UserService";

type PersonData = [any, any, any];

const myContact = new UserService();

// => Create Contact
console.log("----------------------Create a new contact----------------------");

const data: PersonData[] = [
    ["Crystal", "crystal@gmail.com", "09260320343"],
    ["Kyaw Thu", null, "093456687876"],
    ["Su Su Aung", "susuaung@gmail.com", "09847035634"]
];

data.forEach(user => console.log("Add a user: ", myContact.createUser(...user)));

// => Read Contacts
console.log("----------------------All Contacts----------------------");

console.log("Users: ", myContact.getAllUsers());

// => Update Contact

// => Delete Contact