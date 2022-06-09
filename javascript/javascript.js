/////////////////////////////////////////////////////////////////////////////////////////
// Program: javascript.js
// Description: This program will contain code for
//              a rock, paper, scisors game.
//              The game can be played from the console
//              browser. Each game will have 5 rounds to be played
//              against the computer. Refresh the page to start a new
//              game.
////////////////////////////////////////////////////////////////////////////////////////

// Function Definition - computerPlay(): The computer will choose their method.
function computerPlay()
{
    // Returns a random integer(number) from 1 to 3
    const computerChoice = Math.floor(Math.random() * 3) + 1; 

    if (computerChoice === 1)
    {
        return "rock";
    }
    else if (computerChoice === 2)
    {
        return "paper";
    }
    else if (computerChoice === 3)
    {
        return "scissors";
    }
}

// Function Definition - playRound(): Will play a round of rock, paper, scissors.
function playRound(playerSelection, computerSelection)
{
    // Displays the player selection and computer selection. 
    console.log(`Player Selection: ${playerSelection} \nComputer Selection: ${computerSelection}`);

    if (playerSelection === "rock")
    {
        if (computerSelection === "scissors")
        {
            return "You Win! Rock beats Scissors";
        } 
        else if (computerSelection === "paper")
        {
            return "You Lose! Rock can't beat Paper";
        }
        else if(computerSelection === "rock")
        {
            return "Draw";
        }
    }

    if (playerSelection === "scissors")
    {
        if (computerSelection === "paper")
        {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection === "rock")
        {
            return "You Lose! Scissors can't beat Rock";
        }
        else if (computerSelection === "scissors")
        {
            return "Draw";
        }
    }

    if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === "scissors")
        {
            return "You Lose! Paper can't beat Scissors";
        }
        else if (computerSelection === "paper")
        {
            return "Draw";
        }
    }
}

// Function Definition - game(): Will start a 5 round game of rock paper scissors.
function game()
{
    let wins = 0;
    let losses = 0;
    let draws = 0;
    let winOrLoss = "";

    for(let i = 0; i < 5; i++)
    {
        // Prompt the user to enter rock, paper, or scissors for the game.
        let playerChoice = prompt(`Game: ${i + 1} \n\nPlease enter \nRock \nPaper \nScissors`);
        const computerChoice = computerPlay();

        // To avoid null with the toLowerCase() method if playerChoice has no value.
        if (playerChoice == null)
        {
            alert("Program Canceled");
            break;
        }
        else
        {
            playerChoice = playerChoice.toLowerCase();
        }

        // Will check the user choice to continue the game. 
        if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
        {
            roundResult = playRound(playerChoice, computerChoice);

            // To avoid null with the substring method if there is a draw.
            if (roundResult !== "Draw")
            {
                winOrLoss = roundResult.substring(4, 5);
            }
            
            if (winOrLoss === "W")
            {
                console.log(roundResult);
                wins += 1;
            }
            else if (winOrLoss === "L")
            {
                console.log(roundResult);
                losses += 1;
            }
            else if (roundResult === "Draw")
            {
                console.log(roundResult);
                draws += 1;
            }
            winOrLoss = "";
            console.log("\n");
        }
        else
        {
            alert("Invalid input, refresh the page to try again.");
            break;
        }

        // Check if all the rounds have been played to display if the user has won or loss at the game. 
        if (i === 4)
        {
            if (wins > losses)
            {
                console.log(`You are the Winner of Rock, Paper, Scissors with a total of \n${wins} wins, ${losses} losses, and ${draws} draws.`);
            }
            else if (wins < losses)
            {
                console.log(`You have Loss at Rock, Paper, Scissors with a total of \n${wins} wins, ${losses} losses, and ${draws} draws.`);
            }
            else if (draws > wins && draws > losses)
            {
                console.log(`All rounds were draws with a total of ${draws} draws`);
            }
            else if (wins === losses)
            {
                console.log(`The game tied with ${wins} wins and ${losses} losses.`);
            }
        }
    }
}

game();