import { GAME_STATUS } from "../../support/values.js";


export function changeGameToOn(){
    GAME_STATUS.on = true
}


export function changeGameToOff(){
    GAME_STATUS.on = false
}