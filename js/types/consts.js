import { playerRound } from "../app.js";
import { attack, defense, randomizeEffect } from "../support/actions.js";
import { createPlayer } from "../support/auxiliar.js";
export let playerOne = createPlayer();
export let playerTwo = createPlayer();
export const callActions = {
    q() {
        attack(playerOne, playerTwo, "weak");
        return 1;
    },
    w() {
        attack(playerOne, playerTwo, "normal");
        return 1;
    },
    e() {
        attack(playerOne, playerTwo, "strong");
        return 1;
    },
    a() {
        defense(playerOne);
        return 1;
    },
    s() {
        if (playerRound == 0.5) {
            return 1;
        }
        randomizeEffect(playerOne, playerTwo);
        return 0.5;
    },
    u() {
        attack(playerTwo, playerOne, "weak");
        return 0;
    },
    i() {
        attack(playerTwo, playerOne, "normal");
        return 0;
    },
    o() {
        attack(playerTwo, playerOne, "strong");
        return 0;
    },
    k() {
        defense(playerTwo);
        return 0;
    },
    l() {
        if (playerRound == 1.5) {
            return 0;
        }
        randomizeEffect(playerTwo, playerOne);
        return 1.5;
    }
};
let player = createPlayer();
export const ATTACKS = {
    weak: { damage: 10, chanceCriticalDamage: 0.80 },
    normal: { damage: 25, chanceCriticalDamage: 0.50 },
    strong: { damage: 35, chanceCriticalDamage: 0.25 }
};
export const EFFECTS = {
    damage: {
        maxChanceCriticalDamage: 1,
        minChanceCriticalDamage: -1,
        increaseChanceCriticalDamage: 0.15,
        decreaseChanceCriticalDamage: -0.15,
        increaseBaseDamage: 10
    },
    life: {
        increaseLife: 15,
        decreaseLife: 15,
        increaseMaxLife: 120,
        decreaseMaxLife: 80
    },
    defense: {
        defenseBreak: true
    }
};
export const LIST_EFFECTS = [
    "applyMaxChanceCriticalDamage",
    "applyMinChanceCriticalDamage",
    "applyIncreaseChanceCriticalDamage",
    "applyDecreaseChanceCriticalDamage",
    "applyIncreaseBaseDamage",
    "applyEnemyIncreaseBaseDamage",
    "applyIncreaseLife",
    "applyDecreaseLife",
    "applyIncreaseMaxLife",
    "applyDecreaseMaxLife",
    "applyDefenseBreaker"
];
//# sourceMappingURL=consts.js.map