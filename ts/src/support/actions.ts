import { ATTACKS, LIST_EFFECTS } from "../types/consts"
import { Player } from "../types/interfaces"
import { applyDamage, applyEffect, randomAttackDamage } from "./auxiliar"


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