import { getPlayers } from "../../processing/auxiliar.js";
export function changeLifeBar() {
    const lifeBarPlayer1 = document.getElementById("life-1");
    const lifeBarPlayer2 = document.getElementById("life-2");
    if (!lifeBarPlayer1 || !lifeBarPlayer2)
        return;
    const players = getPlayers();
    const playerOne = players[0];
    const playerTwo = players[1];
    let lifePlayerOne = playerOne.life;
    let lifePlayerTwo = playerTwo.life;
    if (lifePlayerOne < 0)
        lifePlayerOne = 0;
    if (lifePlayerTwo < 0)
        lifePlayerTwo = 0;
    lifeBarPlayer1.style.width = `${lifePlayerOne}%`;
    lifeBarPlayer2.style.width = `${lifePlayerTwo}%`;
}
