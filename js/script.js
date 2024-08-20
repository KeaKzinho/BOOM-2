let player = {
    life: 100,
    attackDamage: 10,
    points: 0,
}

function playerAttackZombie(zombie){

}

function playerReduceLife(player, damage){
    player.life = player.life - damage
    return player
}

// Add Points Function


// Game Over Function


// --------------------------------------------------------------
// Zombies
function createZombie(life,attackDamage, movementSpeed) {
    return {
        life: life,
        attackDamage: attackDamage,
        movementSpeed: movementSpeed,
    }
}

function zombieAttackPlayer(player,damage) {
    return playerReduceLife(player,damage)
}
