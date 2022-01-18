//Global Variables
let playerScore = 0;
let computerScore = 0;

//Random choice for computer
function computerSelect() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

//prompt player for selection
function playerSelect() {
    return prompt("Make your selection:").toLowerCase();
};

// Play a single round 
function playRound (player, computer) {
    if (player == "rock" && computer == "scissors") {
        return "You Win! Rock beats scissors.";
    } else if (player == "scissors" && computer == "paper") {
        return "You Win! Scissors beats paper";
    } else if (player == "paper" &&computer == "rock") {
        return "You Win! Paper beat rock.";
    } else if (player == "rock"  && computer == "paper") {
        return "You Lose! Paper beats rock.";
    } else if (player == "scissors" && computer == "rock") {
        return "You Lose! Rock beats scissors.";
    } else if (player = "paper" && computer == "scissors") {
        return "You Lose! Scissors beats paper.";
    } else {
        return "It's a tie!";
    };
};

//first to 5 game
function game() {
    let winner = "Congrats, You Win!";
    let loser = "Sorry, You Lose!";
    let result;
    
    while(playerScore < 5 && computerScore < 5) {
        let round = playRound(playerSelect(), computerSelect());
        console.log(round);
        
        //Update scores per round
        if (round.includes("Win") === true) {
            playerScore+= 1;
        } else if(round.includes("Lose") === true){
            computerScore+=1;
        } else if (round.includes("Tie") === true){
            break;
        }
        
        console.log(playerScore);
        console.log(computerScore);

        //Check for winner
        if (playerScore == 5) {
            result = winner;
            console.log(result);
            return result;
        } else if (computerScore == 5) {
            result = loser;
            console.log(loser);
            return result;
        } else {
            game();
        };
    };
};

game();


