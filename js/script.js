let attacks = {
    slight: [10, 0.95],
    normal: [25, 0.75],
    big: [35, 0.25]
}

let buffs = {
    extraChanceAttack: 0.1,
    maxChanceAttack: 1,
    maxLife: 120,
    regenerateLife: 20,
    breakDefense: true
}

let debuffs = {
    reduceChanceAttack: 0.1,
    reduceLife: 20,
    extraAutoDamage: 15,
    maxLife: 80
}

function isBoolean(value) {
    return typeof value === 'boolean'
}

function createPlayer() {
    return {
        life: 100,
        maxLife: 100,
        attack: 5,
        defense: false,
        buff: [],
        debuff: []
    }
}

function playerAttack(playerAttack, typeAttack, playerTarget) {
    let attackDetails = attacks[typeAttack]
    let chanceCritical = attackDetails[1]
    let defenseBreak = false

    if (playerAttack.buff.length > 0) {
        if (playerAttack.buff[0] == "breakDefense") {
            defenseBreak = true
        } else {
            chanceCritical += buffs[playerAttack.buff[0]]
        }
    }

    
    if (playerAttack.debuff.length > 0){
        chanceCritical -= debuffs[playerAttack.debuff[0]]
    }

    let extraDamage = (Math.random() < chanceCritical) ? attackDetails[0] : 0

    if (!playerTarget.defense || defenseBreak) {
        playerTarget.life -= playerAttack.attack + extraDamage
    }
}

function addRoundBuff(player, buff) {
    player.buff.push(buff)
}

function addRoundDebuff(player, debuff) {
    player.debuff.push(debuff)
}

let playerOne = createPlayer()
let playerTwo = createPlayer()

const con = () => {
    console.log(playerOne)
    console.log(playerTwo)
}
