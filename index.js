// defining variables

let choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// getting choices from computer and player

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
    
}

function getUserChoice() {
    let userChoice = prompt('Choose your weapon');
    return userChoice.toLowerCase();
    
}

function runWholeGame () {
    for (let i = 0; i < 5; i++){
        playRound();        
    }   
    console.log("Game has ended!");
}


function playRound() {   
    

    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    console.log(userChoice, computerChoice);
    console.log(userScore);
    console.log(computerScore);

    // check answers/tie
    if (userChoice === computerChoice){
        console.log("It's a tie!")
        return;
    }

    // checking for winner
    const weaponOfChoice = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (weaponOfChoice[userChoice] === computerChoice){
        userScore++
    } else {
        computerScore++
    }

    console.log(weaponOfChoice[userChoice] === computerChoice ? `You win! ${userChoice} beats ${computerChoice}` : `Computer wins! ${computerChoice} beats ${userChoice}`);

}


runWholeGame();
