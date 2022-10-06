// defining options

let choices = ['rock', 'paper', 'scissors'];

// getting choices from computer and player

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt('Choose your weapon');
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    // check to see if round is a tie
    if (userChoice === computerChoice) {
        return "It's a draw."
    }

    // checking if game
    const weaponOfChoice = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }
    return weaponOfChoice[userChoice] === computerChoice ? 'You win!' : 'Computer wins!'
}

function game(){

    
    let computerWins = 0;

    for (let playerWins = 0; playerWins < 5; playerWins++) {
        // your code here!
        
    }
}

console.log(playRound(getUserChoice(), getComputerChoice()));