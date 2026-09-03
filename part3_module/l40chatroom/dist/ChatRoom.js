"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
const firebaseConfig_1 = require("./firebaseConfig");
const firestore_1 = require("firebase/firestore");
class ChatRoom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = (0, firestore_1.collection)(firebaseConfig_1.db, "chats");
        this.unsubscribe = null;
    }
    addChat(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const chatdata = {
                message,
                username: this.username,
                room: this.room,
                createAt: firestore_1.Timestamp.fromDate(now)
            };
            try {
                yield (0, firestore_1.addDoc)(this.chats, chatdata);
            }
            catch (error) {
                console.error("Error adding chat:", error);
                throw error;
            }
        });
    }
    getChats(callback) {
        const qry = (0, firestore_1.query)(this.chats, (0, firestore_1.where)('room', '==', this.room));
        this.unsubscribe = (0, firestore_1.onSnapshot)(qry, (docSnap) => {
            docSnap.docChanges().forEach((item) => {
                if (item.type === "added") {
                    callback(item.doc.data);
                }
            });
        });
    }
    updateRoom(room) {
        this.room = room;
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    updateName(username) {
        this.username = username;
        localStorage.setItem("username", username);
    }
}
exports.ChatRoom = ChatRoom;
