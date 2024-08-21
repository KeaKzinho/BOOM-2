import { ATTACKS, LIST_EFFECTS } from "../types/consts.js";
import { applyDamage, applyEffect, randomAttackDamage } from "./auxiliar.js";
export function attack(mainPlayer, secondPlayer, attackType) {
    const criticalAttack = ATTACKS[attackType].damage;
    const chanceCriticalDamage = ATTACKS[attackType].chanceCriticalDamage;
    const criticalDamage = randomAttackDamage(chanceCriticalDamage + mainPlayer.extraChanceCriticalDamage, criticalAttack);
    const totalDamage = mainPlayer.attack + mainPlayer.extraDamageBase + criticalDamage;
    if (!secondPlayer.defense || mainPlayer.defenseBreaker) {
        applyDamage(secondPlayer, totalDamage);
    }
    mainPlayer.extraChanceCriticalDamage = 0;
    mainPlayer.extraDamageBase = 0;
    mainPlayer.defenseBreaker = false;
    secondPlayer.defense = false;
}
export function defense(mainPlayer) {
    mainPlayer.defense = true;
}
export function randomizeEffect(mainPlayer, secondPlayer) {
    const randomIndex = Math.floor(Math.random() * LIST_EFFECTS.length);
    const keyEffect = LIST_EFFECTS[randomIndex];
    if (keyEffect.toString() === "applyEnemyIncreaseBaseDamage") {
        applyEffect["applyIncreaseBaseDamage"](secondPlayer);
        return;
    }
    applyEffect[keyEffect](mainPlayer);
}
//# sourceMappingURL=actions.js.map