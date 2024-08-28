import { ACCEPT_KEYS, RANDOMIZE_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS, GAME_STATUS, MUSIC, DEFENSE_KEYS } from './support/values.js'
import { callActions } from './processing/actions.js'
import { showMessageBox } from './screen/state/box.js'
import { changeLifeBar } from './screen/state/lifeBar.js'
import { getPlayers } from './processing/auxiliar.js'
import { gameOver, startGame } from './screen/state/changeScreen.js'
import { showRoundPlayer } from './screen/observer/game.js'
import { changeMusic } from './screen/state/music.js'


MUSIC.on = true

document.addEventListener('click', () => {
    changeMusic('start-menu');
}, { once: true });


const startButton = document.getElementById("start-game")
if (startButton != null){
    startButton.onclick = () => startGame()
}


document.addEventListener("keydown", (event: KeyboardEvent) => {
    handleKeyPress(event.key)
})


export var playerRound = 0


function handleKeyPress(key: string) {

    if (!GAME_STATUS.on) return

    if ((RANDOMIZE_KEYS.includes(key) && playerRound == 0.5) || (RANDOMIZE_KEYS.includes(key) && playerRound == 1.5)) return
    if (!ACCEPT_KEYS.includes(key)) return
    if (playerRound == 0 && PLAYER_TWO_KEYS.includes(key)) return
    if (playerRound == 1 && PLAYER_ONE_KEYS.includes(key)) return

    playerRound = (callActions as any)[key]()

    showMessageBox()
    changeLifeBar()
    showRoundPlayer()
    
    const players = getPlayers()
    
    if (players[0].life <= 0){
        gameOver(players[1])
    }

    if (players[1].life <= 0){
        gameOver(players[0])
    }
}