const ORIGINAL_HANDTYPE = [
    "rock", "paper", "scissors",
];

const BONUS_HANDTYPE = [
    "rock", "paper", "scissors", "lizard", "spock"
];

interface IRules{
    [key: string]: {
        [key: string]: [string, number]
    }
}

const ORIGINAL_RULES: IRules = {
    rock: {
        rock: ['DRAW', 0],
        scissors: ['YOU WIN', 1],
        paper: ['YOU LOSE', -1]
    },
    paper: {
        paper: ['DRAW', 0],
        rock: ['YOU WIN', 1],
        scissors: ['YOU LOSE', -1]
    },
    scissors: {
        scissors: ['DRAW', 0],
        paper: ['YOU WIN', 1],
        rock: ['YOU LOSE', -1]
    }
}

const BONUS_RULES: IRules = {
    rock: {
        rock: ['DRAW', 0],
        scissors: ['YOU LOSE', -1],
        paper: ['YOU WIN', 1],
        spock: ['YOU WIN', 1],
        lizard: ['YOU LOSE', -1]
    },
    paper: {
        paper: ['DRAW', 0],
        rock: ['YOU LOSE', -1],
        scissors: ['YOU WIN', 1],
        lizard: ['YOU WIN', 1],
        spock: ['YOU LOSE', -1]
    },
    scissors: {
        scissors: ['DRAW', 0],
        paper: ['YOU LOSE', -1],
        rock: ['YOU WIN', 1],
        lizard: ['YOU LOSE', -1],
        spock: ['YOU WIN', 1]
    },
    lizard: {
        scissors: ['YOU WIN', 1],
        paper: ['YOU LOSE', -1],
        rock: ['YOU WIN', 1],
        lizard: ['DRAW', 0],
        spock: ['YOU LOSE', -1]
    },
    spock: {
        scissors: ['YOU LOSE', -1],
        paper: ['YOU WIN', 1],
        rock: ['YOU LOSE', -1],
        lizard: ['YOU WIN', 1],
        spock: ['DRAW', 0]
    }
}

export { ORIGINAL_HANDTYPE,  
         BONUS_HANDTYPE, 
         ORIGINAL_RULES,
         BONUS_RULES };