"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const validators_1 = require("../utils/validators");
class UserService {
    constructor() {
        this.userList = [];
    }
    createUser(name, email, phone) {
        if (!(0, validators_1.validateField)("name", name))
            return "Invalid name format!";
        if (!(0, validators_1.validateField)("email", email))
            return "Invalid email format!";
        if (!(0, validators_1.validateField)("phone", phone))
            return "Invalid phone format!";
        const newUser = {
            id: this.userList.length + 1,
            name,
            email,
            phone
        };
        this.userList.push(newUser);
        return newUser;
    }
    getAllUsers() {
        return this.userList;
    }
    getUserById() { }
    updateUser() { }
    deleteUser() { }
}
exports.UserService = UserService;
