import { ATTACKS, LIST_EFFECTS, playerOne, playerTwo } from "../support/values"
import { Player } from "../support/interfaces"
import { applyDamage, applyEffect, randomAttackDamage } from "./auxiliar"
import { playerRound } from "../app"


export function attack(mainPlayer: Player, secondPlayer: Player, attackType: string) {

    const criticalAttack:number = (ATTACKS as any)[attackType].damage
    const chanceCriticalDamage:number = (ATTACKS as any)[attackType].chanceCriticalDamage
    const criticalDamage = randomAttackDamage(chanceCriticalDamage+mainPlayer.extraChanceCriticalDamage, criticalAttack)
    
    const totalDamage = mainPlayer.attack + mainPlayer.extraDamageBase + criticalDamage

    if (!secondPlayer.defense || mainPlayer.defenseBreaker){
        applyDamage(secondPlayer, totalDamage)  
    }

    mainPlayer.extraChanceCriticalDamage = 0
    mainPlayer.extraDamageBase = 0
    mainPlayer.defenseBreaker = false
    secondPlayer.defense = false
}


export function defense(mainPlayer: Player){
    mainPlayer.defense = true
}


export function randomizeEffect(mainPlayer: Player, secondPlayer: Player) {
    const randomIndex = Math.floor(Math.random() * LIST_EFFECTS.length)
    const keyEffect = LIST_EFFECTS[randomIndex] as keyof typeof applyEffect
    
    if (keyEffect.toString() === "applyEnemyIncreaseBaseDamage"){
        applyEffect["applyIncreaseBaseDamage"](secondPlayer)
        return
    }

    applyEffect[keyEffect](mainPlayer)
}


export const callActions = {
    q(){
        attack(playerOne, playerTwo, "weak")
        return 1
    },

    w(){
        attack(playerOne, playerTwo, "normal")
        return 1
    },

    e(){
        attack(playerOne, playerTwo, "strong")
        return 1
    },

    a(){
        defense(playerOne)
        return 1
    },

    s(){
        if (playerRound == 0.5){
            return 1
        }

        randomizeEffect(playerOne, playerTwo)

        return 0.5
    },

    u(){
        attack(playerTwo, playerOne, "weak")
        return 0
    },

    i(){
        attack(playerTwo, playerOne, "normal")
        return 0
    },

    o(){
        attack(playerTwo, playerOne, "strong")
        return 0
    },

    k(){
        defense(playerTwo)
        return 0
    },

    l(){
        if (playerRound == 1.5){
            return 0
        }

        randomizeEffect(playerTwo, playerOne)
        return 1.5
    }
}