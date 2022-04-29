const ORIGINAL_HANDTYPE = [
    "rock", "paper", "scissors",
];

const BONUS_HANDTYPE = [
    "rock", "paper", "scissors", "lizard", "spock"
];

interface IRules{
    [key: string]: {
        [key: string]: string
    }
}

const ORIGINAL_RULES: IRules = {
    rock: {
        rock: 'DRAW',
        scissors: 'YOU WIN',
        paper: 'YOU LOSE'
    },
    paper: {
        paper: 'DRAW',
        rock: 'YOU WIN',
        scissors: 'YOU LOSE'
    },
    scissors: {
        scissors: 'DRAW',
        paper: 'YOU WIN',
        rock: 'YOU LOSE'
    }
}

const BONUS_RULES: IRules = {
    rock: {
        rock: 'DRAW',
        scissors: 'YOU LOSE',
        paper: 'YOU WIN',
        spock: 'YOU WIN',
        lizard: 'YOU LOSE'
    },
    paper: {
        paper: 'DRAW',
        rock: 'YOU LOSE',
        scissors: 'YOU WIN',
        lizard: 'YOU WIN',
        spock: 'YOU LOSE'
    },
    scissors: {
        scissors: 'DRAW',
        paper: 'YOU LOSE',
        rock: 'YOU WIN',
        lizard: 'YOU LOSE',
        spock: 'YOU WIN'
    },
    lizard: {
        scissors: 'YOU WIN',
        paper: 'YOU LOSE',
        rock: 'YOU WIN',
        lizard: 'DRAW',
        spock: 'YOU LOSE'
    },
    spock: {
        scissors: 'YOU LOSE',
        paper: 'YOU WIN',
        rock: 'YOU LOSE',
        lizard: 'YOU WIN',
        spock: 'DRAW'
    }
}

export { ORIGINAL_HANDTYPE,  
         BONUS_HANDTYPE, 
         ORIGINAL_RULES,
         BONUS_RULES};