import { ACCEPT_KEYS, RANDOMIZE_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS, GAME_STATUS } from './support/values.js';
import { callActions } from './processing/actions.js';
import { getNotify, resetNotify } from './screen/observer.js';
document.addEventListener("keydown", (event) => {
    handleKeyPress(event.key);
});
export var playerRound = 0;
function handleKeyPress(key) {
    if (GAME_STATUS.on)
        return;
    if ((RANDOMIZE_KEYS.includes(key) && playerRound == 0.5) || (RANDOMIZE_KEYS.includes(key) && playerRound == 1.5))
        return;
    if (!ACCEPT_KEYS.includes(key))
        return;
    if (playerRound == 0 && PLAYER_TWO_KEYS.includes(key))
        return;
    if (playerRound == 1 && PLAYER_ONE_KEYS.includes(key))
        return;
    playerRound = callActions[key]();
    let notify = getNotify();
    console.log(notify);
    resetNotify();
}
//# sourceMappingURL=app.js.map