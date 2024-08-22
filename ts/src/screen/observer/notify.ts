import { Player } from "../../support/interfaces";
import { GAME_STATUS, LIST_EFFECTS_MESSAGE } from "../../support/values";


var notify:string = ""


export function notifyAttack(mainPlayer : Player, secondPlayer: Player){

    notify = `<br> Jogador ${mainPlayer.name} ataca o ${secondPlayer.name}`

    if (GAME_STATUS.typeAttack){
        notify+= `<br> Ataque: ${GAME_STATUS.typeAttack}`
    }

    if (GAME_STATUS.extraDamage){
        notify+= `<br> Dano extra: ${GAME_STATUS.extraDamage}`
    }

    if (GAME_STATUS.totalDamage){
        notify+= `<br> Dano total: ${GAME_STATUS.totalDamage}`
    }

    if (GAME_STATUS.defenseDamage){
        notify+= `<br> Dano de defendido!!`
   
    } else if (GAME_STATUS.defenseDamage == false){
        notify+= `<br> Dano de aplicado!!`
    }

    GAME_STATUS.typeAttack = null
    GAME_STATUS.extraDamage = null
    GAME_STATUS.totalDamage = null
    GAME_STATUS.defenseDamage = null
}


export function notifyEffectApplied(mainPlayer: Player, effect: string){
    const effectMessage = (LIST_EFFECTS_MESSAGE as any)[effect]()

    notify += `<br> ${mainPlayer.name} recebeu o efeito: ${effectMessage}!`
}


export function notifyDefense(mainPlayer: Player) {
    notify += `<br> ${mainPlayer.name} se defendeu!`
}


export function resetNotify(){
    notify = ""
}


export function getNotify(): string{
    return notify
}