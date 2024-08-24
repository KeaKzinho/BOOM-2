import { getNotify, resetNotify } from "../observer/notify.js";
export function showMessageBox() {
    const messageBox = document.getElementById("message-box");
    const messageText = document.getElementById("message-text");
    if (!messageBox || !messageText)
        return;
    messageBox.style.display = "block";
    messageText.innerHTML = getNotify();
    resetNotify();
}
