import { changeGameToOff, changeGameToOn } from "../observer/game.js";
import { executeAudioEffect } from "./music.js";


export function animation(effect:string){

    if (effect == "effect"){
        // runAnimation("effect",1500)
        executeAudioEffect("effect", 2000, 1)
        return
    }

    if (effect == "defense"){
        // runAnimation("defense",1500)
        return
    }
    
    // runAnimation(effect, 2000)
    executeAudioEffect(effect, 2000)
}


function runAnimation(animation:string, duration: number){

    const animations = document.getElementById("animations")
    if (!animations) return
    
    changeGameToOff()
    
    const newAnimation = document.createElement("div")
    
    newAnimation.id = "animation"
    animations.appendChild(newAnimation)
    
    newAnimation.style.background = `url(./assets/gif/${animation}.gif) no-repeat center center / contain`

    setTimeout(()=>{
        newAnimation.style.background = "none"
        newAnimation.remove()
        changeGameToOn()
    }, duration)
}