import { ACCEPT_KEYS, RANDOMIZE_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS } from './support/values.js';
import { callActions } from './processing/actions.js';
document.addEventListener("keydown", (event) => {
    handleKeyPress(event.key);
});
export var playerRound = 0;
function handleKeyPress(key) {
    if ((RANDOMIZE_KEYS.includes(key) && playerRound == 0.5) || (RANDOMIZE_KEYS.includes(key) && playerRound == 1.5))
        return;
    if (!ACCEPT_KEYS.includes(key))
        return;
    if (playerRound == 0 && PLAYER_TWO_KEYS.includes(key))
        return;
    if (playerRound == 1 && PLAYER_ONE_KEYS.includes(key))
        return;
    playerRound = callActions[key]();
}
//# sourceMappingURL=app.js.map