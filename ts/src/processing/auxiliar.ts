import { EFFECTS } from "../support/values"
import { Player } from "../support/interfaces"


export function createPlayer(name:string = "Jogador"): Player {
    return {
        name: name,
        life: 100,
        maxLife: 100,
        attack: 5,
        defense: false,
        extraChanceCriticalDamage: 0,
        extraDamageBase: 0,
        defenseBreaker: false
    }
}


export const applyEffect = {
    applyMaxChanceCriticalDamage(mainPlayer: Player){
        mainPlayer.extraChanceCriticalDamage = EFFECTS.damage.maxChanceCriticalDamage
    },
    
    applyMinChanceCriticalDamage(mainPlayer: Player){
        mainPlayer.extraChanceCriticalDamage = EFFECTS.damage.minChanceCriticalDamage
    },
    
    applyIncreaseChanceCriticalDamage(mainPlayer: Player){
        mainPlayer.extraChanceCriticalDamage += EFFECTS.damage.increaseChanceCriticalDamage
    },
    
    applyDecreaseChanceCriticalDamage(mainPlayer: Player){
        mainPlayer.extraChanceCriticalDamage += EFFECTS.damage.decreaseChanceCriticalDamage
    },
    
    applyIncreaseBaseDamage(mainPlayer: Player){
        mainPlayer.extraDamageBase += EFFECTS.damage.increaseBaseDamage
    },
    
    applyIncreaseLife(mainPlayer: Player){
        if ((mainPlayer.life+EFFECTS.life.increaseLife) > mainPlayer.maxLife){
            mainPlayer.life = mainPlayer.maxLife
            return
        }
    
        mainPlayer.life += EFFECTS.life.increaseLife
    },
    
    applyDecreaseLife(mainPlayer: Player){
        if (mainPlayer.life-EFFECTS.life.decreaseLife < 0){
            mainPlayer.life = 0
            return
        }
        
        mainPlayer.life -= EFFECTS.life.decreaseLife
    },
    
    applyIncreaseMaxLife(mainPlayer: Player){
        mainPlayer.maxLife = EFFECTS.life.increaseMaxLife
    },
    
    applyDecreaseMaxLife(mainPlayer: Player){
        mainPlayer.maxLife = EFFECTS.life.decreaseMaxLife
    },
    
    applyDefenseBreaker(mainPlayer: Player){
        mainPlayer.defenseBreaker = EFFECTS.defense.defenseBreak
    },
} 


export function randomAttackDamage(chanceCriticalDamage: number, damage: number): number{
    return (Math.random() < chanceCriticalDamage) ? damage : 0
}


export function applyDamage(targetPlayer: Player, damage: number){
    targetPlayer.life -= damage
}