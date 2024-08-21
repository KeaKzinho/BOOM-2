import { callActions } from './types/consts'

document.addEventListener("keydown", (event: KeyboardEvent) => {
    handleKeyPress(event.key)
})

export var playerRound = 0

function handleKeyPress(key: string) {

    const acceptKeys: string[] = ["q","w","e","a","s","u","i","o","k","l"]
    const playerOneKeys: string[] = ["q","w","e","a","s"]
    const playerTwoKeys: string[] = ["u","i","o","k","l"]
    const randomizeKeys: string[] = ["s","l"]

    if ((randomizeKeys.includes(key) && playerRound == 0.5) || (randomizeKeys.includes(key) && playerRound == 1.5)) return
    if (!acceptKeys.includes(key)) return
    if (playerRound == 0 && playerTwoKeys.includes(key)) return
    if (playerRound == 1 && playerOneKeys.includes(key)) return

    playerRound = (callActions as any)[key]()
}