import { createPlayer } from "../processing/auxiliar.js"
import { Attacks, Effects, Game, Player } from "./interfaces.js"


export const playerOne: Player = createPlayer("Player 1")
export const playerTwo: Player = createPlayer("Player 2")


export const ATTACKS: Attacks = {
    weak: {damage: 10, chanceCriticalDamage: 0.78},
    normal: {damage: 25, chanceCriticalDamage: 0.45},
    strong: {damage: 35, chanceCriticalDamage: 0.15}
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


export const LIST_EFFECTS_MESSAGE = {

    applyMaxChanceCriticalDamage(){
        return "Chance de acerto aumentada para o máximo"
    },
    applyMinChanceCriticalDamage(){
        return "Chance de acerto reduzida para o mínimo"
    },
    applyIncreaseChanceCriticalDamage(){
        return "Chance de acerto aumentada"
    },
    applyDecreaseChanceCriticalDamage(){
        return "Chance de acerto reduzida"
    },
    applyIncreaseBaseDamage(){
        return "Dano base aumentado"
    },
    applyEnemyIncreaseBaseDamage(){
        return "Dano base do INIMIGO aumentado"
    },
    applyIncreaseLife(){
        return "Vida recuperada"
    },
    applyDecreaseLife(){
        return "Vida perdida"
    },
    applyIncreaseMaxLife(){
        return "Vida máxima aumentada"
    },
    applyDecreaseMaxLife(){
        return "Vida maxima reduzida"
    },
    applyDefenseBreaker(){
        return "Quebra de defesa"
    },
}


export const ACCEPT_KEYS: string[] = ["q","w","e","a","s","u","i","o","k","l"]
export const PLAYER_ONE_KEYS: string[] = ["q","w","e","a","s"]
export const PLAYER_TWO_KEYS: string[] = ["u","i","o","k","l"]
export const RANDOMIZE_KEYS: string[] = ["s","l"]


export const GAME_STATUS: Game = {
    on: false,
    typeAttack: null,
    extraDamage: null,
    totalDamage: null,
    defenseDamage: null
}