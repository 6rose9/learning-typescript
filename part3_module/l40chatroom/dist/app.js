"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatRoom_1 = require("./ChatRoom");
const MessageUI_1 = require("./MessageUI");
require("../css/style.css");
const chatsidebar = document.querySelector(".chat-sidebars");
const newnameform = document.querySelector(".new-nameform");
const chatlistgroup = document.querySelector(".chat-lists");
const newchatform = document.querySelector(".new-chatform");
const updatemsg = document.querySelector(".update-msg");
const profilename = document.querySelector("#profilename");
const username = localStorage.username ? localStorage.username : "Guest";
const chatroomObj = new ChatRoom_1.ChatRoom("general", username);
const messageuiObj = new MessageUI_1.MessageUI(chatlistgroup);
newchatform.addEventListener('submit', e => {
    e.preventDefault();
    const message = newchatform.message.value.trim();
    chatroomObj.addChat(message)
        .then(() => newchatform.reset())
        .catch(err => console.error(err));
});
chatroomObj.getChats((data) => {
    messageuiObj.renderli(data);
});
newnameform.addEventListener('submit', e => {
    e.preventDefault();
});
