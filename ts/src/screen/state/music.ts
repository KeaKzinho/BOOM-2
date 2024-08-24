import { GAME_STATUS, MUSIC } from "../../support/values.js"


var currentMusic: HTMLAudioElement | null = null;


export function changeMusic(music: string){
    MUSIC.music = music
    playMusic()
}


export function playMusic(){
    if (MUSIC.on){

        if (currentMusic){
            stopMusic()
        }

        if (GAME_STATUS.on){
            stopMusic()
            MUSIC.music = "in-game"
        }

        currentMusic = new Audio(`./assets/audio/${MUSIC.music}.mp3`)
        currentMusic.loop = true
        currentMusic.volume = 0.25
        currentMusic.play()
    }
}


export function stopMusic(){
    if (currentMusic){
        currentMusic.pause()
        currentMusic.currentTime = 0
    }
}