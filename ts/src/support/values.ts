import { createPlayer } from "../processing/auxiliar"
import { Attacks, Effects, Player } from "./interfaces"


export let playerOne: Player = createPlayer()
export let playerTwo: Player = createPlayer()


export const ATTACKS: Attacks = {
    weak: {damage: 10, chanceCriticalDamage: 0.80},
    normal: {damage: 25, chanceCriticalDamage: 0.50},
    strong: {damage: 35, chanceCriticalDamage: 0.25}
}


export const EFFECTS: Effects = {
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
}


export const LIST_EFFECTS: string[] = [
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
]


export const ACCEPT_KEYS: string[] = ["q","w","e","a","s","u","i","o","k","l"]
export const PLAYER_ONE_KEYS: string[] = ["q","w","e","a","s"]
export const PLAYER_TWO_KEYS: string[] = ["u","i","o","k","l"]
export const RANDOMIZE_KEYS: string[] = ["s","l"]