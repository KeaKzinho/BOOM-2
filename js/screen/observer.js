import { GAME_STATUS, LIST_EFFECTS_MESSAGE } from "../support/values.js";
var notify = "";
export function notifyAttack(mainPlayer, secondPlayer) {
    notify = `<br> Jogador ${mainPlayer.name} ataca o ${secondPlayer.name}`;
    if (GAME_STATUS.typeAttack) {
        notify += `<br> Ataque: ${GAME_STATUS.typeAttack}`;
    }
    if (GAME_STATUS.extraDamage) {
        notify += `<br> Dano extra: ${GAME_STATUS.extraDamage}`;
    }
    if (GAME_STATUS.totalDamage) {
        notify += `<br> Dano total: ${GAME_STATUS.totalDamage}`;
    }
    if (GAME_STATUS.defenseDamage) {
        notify += `<br> Dano de defendido!!`;
    }
    else if (GAME_STATUS.defenseDamage == false) {
        notify += `<br> Dano de aplicado!!`;
    }
}
export function notifyEffectApplied(mainPlayer, effect) {
    const effectMessage = LIST_EFFECTS_MESSAGE[effect]();
    notify += `<br> ${mainPlayer.name} recebeu o efeito: ${effectMessage}!`;
}
export function notifyDefense(mainPlayer) {
    notify += `<br> ${mainPlayer.name} se defendeu!`;
}
export function resetNotify() {
    notify = "";
}
export function getNotify() {
    return notify;
}
//# sourceMappingURL=observer.js.map