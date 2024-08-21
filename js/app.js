import { callActions } from './types/consts.js';
document.addEventListener("keydown", (event) => {
    handleKeyPress(event.key);
});
export var playerRound = 0;
function handleKeyPress(key) {
    const acceptKeys = ["q", "w", "e", "a", "s", "u", "i", "o", "k", "l"];
    const playerOneKeys = ["q", "w", "e", "a", "s"];
    const playerTwoKeys = ["u", "i", "o", "k", "l"];
    const randomizeKeys = ["s", "l"];
    if ((randomizeKeys.includes(key) && playerRound == 0.5) || (randomizeKeys.includes(key) && playerRound == 1.5))
        return;
    if (!acceptKeys.includes(key))
        return;
    if (playerRound == 0 && playerTwoKeys.includes(key))
        return;
    if (playerRound == 1 && playerOneKeys.includes(key))
        return;
    playerRound = callActions[key]();
}
//# sourceMappingURL=app.js.map