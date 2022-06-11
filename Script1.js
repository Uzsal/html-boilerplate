// JavaScript source code

function computerPlay() {
    var options = ['rock', 'paper', 'scissors'];
    let playing = options[Math.floor(Math.random() * options.length)];
    return playing;
}

let pc = 0;
let cc = 0;

function round(playerSelection, computerSelection) {
  
    playerSelection = playerSelection.toLowerCase();

    
    if (computerSelection === playerSelection) {
        console.log("It's a tie!")
    };


    if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("You won!")
        ++pc
    } else if 
        (computerSelection === "rock" && playerSelection === "scissor") {
        console.log("You lost!")
        ++cc
    };


    if (computerSelection === "paper" && playerSelection === "scissor") {
        console.log("You won!")
        ++pc
    } else if 
        (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lost!")
        ++cc
    };


    if (computerSelection  === "scissor" && playerSelection === "rock") {
        console.log("You won!")
        ++pc
    } else if 
        (computerSelection  === "scissor" && playerSelection  === "paper") {
        console.log("You lost!")
        ++cc
    };

}





function game() {
    for (let i = 0; i < 5; i++) {
        var computerSelection = computerPlay();
        var playerSelection = prompt("Rock, Paper or Scissor?");
        console.log(round(playerSelection, computerSelection));

        round(playerSelection, computerSelection);
        let winner = pc > cc ? consloe.log("You are the WINNER!") : console.log("The computer won");
    }
    
}
game();
