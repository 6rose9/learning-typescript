"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUI = void 0;
class MessageUI {
    constructor(ul) {
        this.ul = ul;
    }
    clearli() {
        this.ul.innerHTML = "";
    }
    renderli(data) {
        const when = "";
        const htmllitag = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;
        this.ul.innerHTML += htmllitag;
    }
    userInfo() {
    }
}
exports.MessageUI = MessageUI;
