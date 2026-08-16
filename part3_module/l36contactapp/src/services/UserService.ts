import { validateField } from "../utils/validators";
import { User } from "../models/User";
export class UserService {

    private userList: User[] = [];

    // create
    createUser(name: string, email: string, phone: string): User | string {
        if (!validateField("name", name)) return "Invalid name format!";
        if (!validateField("email", email)) return "Invalid email format!";
        if (!validateField("phone", phone)) return "Invalid phone format!";

        const newUser: User = {
            id: this.userList.length + 1,
            name,
            email,
            phone
        }

        this.userList.push(newUser);
        return newUser;
    }

    // read
    getAllUsers() {
        return this.userList;
    }

    getUserById() { }

    // update
    updateUser() { }

    // delete
    deleteUser() { }
}