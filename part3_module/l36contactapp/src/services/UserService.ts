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

    getUserById(id: number): User | undefined {
        return this.userList.find((user) => user.id === id)
    }

    // update
    updateUser(id: number, fields: Partial<User>): User | string {
        const user = this.getUserById(id);

        if (!user) return "User not found";

        if (fields.name && !validateField("name", fields.name)) return "Invalid name format!";
        if (fields.email && !validateField("email", fields.email)) return "Invalid email format!";
        if (fields.phone && !validateField("phone", fields.phone)) return "Invalid phone format!";

        Object.assign(user, fields);

        return user;
    }

    // delete
    deleteUser(id: number): string {
        const index = this.userList.findIndex(user => user.id === id);
        if (index === -1) return "User not found";

        this.userList.splice(index, 1);

        return "Deleted successfully";
    }
}