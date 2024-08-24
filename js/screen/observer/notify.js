import { GAME_STATUS, LIST_EFFECTS_MESSAGE } from "../../support/values.js";
var notify = "";
export function notifyAttack(mainPlayer, secondPlayer) {
    notify = `${mainPlayer.name} <span class='emphasis-gold'>ataca o </span> ${secondPlayer.name}`;
    if (GAME_STATUS.typeAttack) {
        notify += ` | <span class='emphasis-light-orange'>Ataque:</span> ${GAME_STATUS.typeAttack}`;
    }
    if (GAME_STATUS.extraDamage) {
        notify += ` | <span class='emphasis-light-red'>Dano extra:</span> ${GAME_STATUS.extraDamage}`;
    }
    if (GAME_STATUS.totalDamage) {
        notify += ` | <span class='emphasis-orange'>Dano total:</span> ${GAME_STATUS.totalDamage}`;
    }
    if (GAME_STATUS.defenseDamage) {
        notify += ` | <span class='emphasis-green'>Dano defendido!!</span>`;
    }
    else if (GAME_STATUS.defenseDamage == false) {
        notify += ` | <span class='emphasis-red'>Dano aplicado!!</span>`;
    }
    GAME_STATUS.typeAttack = null;
    GAME_STATUS.extraDamage = null;
    GAME_STATUS.totalDamage = null;
    GAME_STATUS.defenseDamage = null;
}
export function notifyEffectApplied(mainPlayer, effect) {
    const effectMessage = LIST_EFFECTS_MESSAGE[effect]();
    notify += `${mainPlayer.name} <span class='emphasis-gold'>recebeu o efeito:</span> ${effectMessage}!`;
}
export function notifyDefense(mainPlayer) {
    notify += `${mainPlayer.name} <span class='emphasis-gold'>se defendeu!</span>`;
}
export function resetNotify() {
    notify = "";
}
export function getNotify() {
    return notify;
}
