"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBKHr2usdQYMTYYkMqj9mtu-viIL14WRYY",
    authDomain: "typescript-chatroom-27447.firebaseapp.com",
    projectId: "typescript-chatroom-27447",
    storageBucket: "typescript-chatroom-27447.firebasestorage.app",
    messagingSenderId: "700970392478",
    appId: "1:700970392478:web:b5c88bfcd2d89f52a6148f",
    measurementId: "G-ERMCEEJ4PE"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
