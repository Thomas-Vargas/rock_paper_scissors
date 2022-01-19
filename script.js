//Global Variables
let playerScore = 0;
let computerScore = 0;

//Buttons
const buttons = document.querySelectorAll("input");

//Capitalize first letter
function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

//Random choice for computer
function computerSelect() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

//Disables buttons once game ends
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    });
};

//Enables buttons
function enablebuttons() {
    buttons.forEach(elem => {
        elem.disabled = false;
    });
};

//Play again 
function playAgain() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.remove("border");

    enablebuttons();
    return;
}

document.getElementById("playAgain").addEventListener("click", function() {
    playAgain();
})

// Play a single round 
function playRound (playerSelection) {
    let computerSelection = computerSelect();
    let result = "";

    if (playerSelection === computerSelection) {
        result = ("It's a tie!" + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    } 
    else if ((playerSelection == "rock" && computerSelection == 
    "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        playerSelection = capFirstLetter(playerSelection);
        computerSelection = capFirstLetter(computerSelection);
        playerScore+= 1;
        result = ("You win! " + playerSelection + " beats " + computerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (playerScore == 5) {
            result += "<br><br>You won the game!";
            disableButtons();
        }
    } else {
        playerSelection = capFirstLetter(playerSelection);
        computerSelection = capFirstLetter(computerSelection);
        computerScore += 1;
        result = ("You lose! " + computerSelection + " beats " + playerSelection + "<br><br> Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (computerScore == 5) {
            result += "<br><br>Sorry, you lose! Try again!";
            disableButtons();
        }
    }

    //Insert results into div
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").classList.add("border");
    return;
};

//Runs round when player choice is made
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value.toLowerCase());
    });
});

