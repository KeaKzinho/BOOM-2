import { getRound } from "../../processing/auxiliar.js";
import { GAME_STATUS } from "../../support/values.js";
export function changeGameToOn() {
    GAME_STATUS.on = true;
}
export function changeGameToOff() {
    GAME_STATUS.on = false;
}
export function showRoundPlayer() {
    const playerName1 = document.getElementById("player-name-1");
    const playerName2 = document.getElementById("player-name-2");
    if (!playerName1 || !playerName2)
        return;
    if (getRound() == "Player One") {
        playerName2.style.border = "0px";
        playerName1.style.border = "2px solid yellow";
    }
    else if (getRound() == "Player Two") {
        playerName1.style.border = "0px";
        playerName2.style.border = "2px solid yellow";
    }
}
