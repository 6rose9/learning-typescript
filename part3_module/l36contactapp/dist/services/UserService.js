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
    getUserById(id) {
        return this.userList.find((user) => user.id === id);
    }
    updateUser(id, fields) {
        const user = this.getUserById(id);
        if (!user)
            return "User not found";
        if (fields.name && !(0, validators_1.validateField)("name", fields.name))
            return "Invalid name format!";
        if (fields.email && !(0, validators_1.validateField)("email", fields.email))
            return "Invalid email format!";
        if (fields.phone && !(0, validators_1.validateField)("phone", fields.phone))
            return "Invalid phone format!";
        Object.assign(user, fields);
        return user;
    }
    deleteUser(id) {
        const index = this.userList.findIndex(user => user.id === id);
        if (index === -1)
            return "User not found";
        this.userList.splice(index, 1);
        return "Deleted successfully";
    }
}
exports.UserService = UserService;
