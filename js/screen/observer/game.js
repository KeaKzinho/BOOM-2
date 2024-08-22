import { GAME_STATUS } from "../../support/values.js";
export function startGame() {
    GAME_STATUS.on = true;
}
export function stopGame() {
    GAME_STATUS.on = false;
}
