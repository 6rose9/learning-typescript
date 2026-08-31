import { db } from "./firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

interface ChatMessage {
    message: string;
    username: string;
    room: string;
    createAt: Timestamp
}

export class Chatroom {

    private chats = collection(db, "chats");
    // private unsubscribe = null;

    constructor(private room: string, private username: string) { }

    // create chat message
    async addChat(message: string): Promise<void> {
        const now = new Date();
        const chatdata: ChatMessage = {
            message,
            username: this.username,
            room: this.room,
            createAt: Timestamp.fromDate(now)
        }

        try {
            await addDoc(this.chats, chatdata);
        } catch (error) {
            console.error("Error adding chat:", error);
            throw error;
        }
    }

    // get chat messages
    getChats() {

    }

    // change chat room
    updateRoom() { }

    // update username
    updateName() { }
}