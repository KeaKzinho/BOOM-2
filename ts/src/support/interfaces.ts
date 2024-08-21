export interface Player {
    life: number
    maxLife: number
    attack: number
    defense: boolean
    extraChanceCriticalDamage: number
    extraDamageBase: number
    defenseBreaker: boolean
}


export interface Effects {
    damage: {
        maxChanceCriticalDamage: number
        minChanceCriticalDamage: number

        increaseChanceCriticalDamage: number
        decreaseChanceCriticalDamage: number

        increaseBaseDamage: number
    }

    life: {
        increaseLife: number
        decreaseLife: number

        increaseMaxLife: number
        decreaseMaxLife: number
    }

    defense: {
        defenseBreak: boolean
    }
}


export interface Attacks {
    weak: { damage: number, chanceCriticalDamage: number }
    normal: { damage: number, chanceCriticalDamage: number }
    strong: { damage: number, chanceCriticalDamage: number }
}