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
    let winner = pc > cc ? consloe.log(pc, "You are the WINNER!")
        : console.log(cc, "The computer won");

}


var rock = document.createElement('button');
rock.textContent = "Rock";
//rock.id = "user";

var paper = document.createElement('button');
paper.textContent = "Paper";
//paper.id = "user";

var sci = document.createElement('button');
sci.textContent = "Scissor";
//sci.id = "user";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(sci);

//var users = document.getElementById("user");
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.setAttribute('style', 'color:red; font-size:15px;');

    button.addEventListener('click', function () {
       // game(result);
        alert("Hello");
        
        /*ﬂÌ› √Œ·Ì ﬁÌ„… «·„” Œœ„  ƒŒ– „‰ «·√“—«—
         ÊﬁÌ„… «·ÃÂ«“  ƒŒ– „‰ «·⁄‘Ê«∆Ì ø*/
    });
})


function game() {
    
    var computerSelection = computerPlay();
    var playerSelection = prompt("Enter Rock, paper, or scissor");

        const result = round(playerSelection, computerSelection);
        console.log(result);    
}
game();