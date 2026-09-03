import { ChatMessage } from "./ChatRoom";
export class MessageUI {
    constructor(public ul: HTMLElement) {

    }

    // clear ui
    clearli(): void {
        this.ul.innerHTML = "";
    }

    // render li
    renderli(data: ChatMessage):void {
        // const when = dateFns.formatDistance(dataobj.createdAt.toDate(), new Date(), { addSuffix: true }); // {addSuffix:true} = ago
        const when: string = "";
        const htmllitag = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.ul.innerHTML += htmllitag;
    }

    // user profile
    userInfo() {

    }

}