function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds.");

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Choose rock, paper, or scissors`).toLowerCase();
        const validChoices = ["rock", "paper", "scissors"];

        if (!validChoices.includes(playerSelection)) {
            console.log("Invalid choice. Please choose rock, paper, or scissors.");
            round--;
            continue;
        }

        const computerSelection = getComputerChoice();
        console.log(`Computer chose: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            console.log("You win this round!");
            playerScore++;
        } else if (result === "computer") {
            console.log("Computer wins this round!");
            computerScore++;
        } else {
            console.log("It's a tie this round!");
        }

        console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
    }

    console.log("\nGame Over!");
    if (playerScore > computerScore) {
        console.log("Congratulations, you are the overall winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie overall!");
    }
}

game();
