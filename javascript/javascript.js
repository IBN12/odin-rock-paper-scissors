/////////////////////////////////////////////////////////////////////////////////////////
// Program: javascript.js
// Description: This program will contain code for
//              a rock, paper, scisors game.
//              The game can be played from the console
//              browser. Each game will have 5 rounds to be played
//              against the computer. Refresh the page to start a new
//              game.
////////////////////////////////////////////////////////////////////////////////////////

let rounds = 0; // Contains the rounds played

let pWin = 0, pLoss = 0, pDraw = 0; // Player wins, player losses, and player Draws.

let winOrLoss = ""; // Will hold the win or loss string.

let choices = ["rock", "paper", "scissors"]; // Array of choices for the player.

const playerComputerChoices = document.querySelector('#player-comp-choice');

const gRounds = document.querySelector('#game-rounds');
gRounds.setAttribute('style', 'margin-bottom:40px; font-size:20px; font-weight:bold;');

const gScore = document.querySelector('#game-score');

const pRock = document.querySelector('#rock-btn');
pRock.addEventListener('click', rock);

const pPaper = document.querySelector('#paper-btn');
pPaper.addEventListener('click', paper);

const pScissors = document.querySelector('#scissors-btn');
pScissors.addEventListener('click', scissors);

// Reference variable pButton will contain all the 'player-btn' buttons nodes.
const pButton = document.querySelectorAll('.player-btn');
for(let i = 0; i < pButton.length; i++) // adding inline styles to each pButton-node.
{
    pButton[i].setAttribute(`style`, `margin-right:10px; width:100px; height:50px; font-size:15px; border:1px solid #ACFFFF;`);
}

// Player, computer, and result categories are declared as reference variables.
const player = document.createElement('p');
const computer = document.createElement('p');
const result = document.createElement('p');

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
    // Displays the player selection and computer selection in the console.
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

// Function Definition - removeContent()
function removeContent()
{
    playerComputerChoices.removeChild(player);
    playerComputerChoices.removeChild(computer);
    playerComputerChoices.removeChild(result);
}

// Function Definition - game()
function game(playerChoice)
{
    rounds++; // Increment the rounds played

    // If the rounds are greater than 5 announce the overall winner or loser
    // of the game, and reset all the variables to zero for a new set of 5 rounds. 
    if (rounds > 5)
    {
        // Reference variable for the 'game-result' div in the HTML file.
        const gResult = document.querySelector('#game-result');
        gResult.setAttribute('style', 'margin-top:40px; padding:10px; font-size:25px; color:red;');

        // Announces if the player wins or loses.
        if ((pWin === 0) && (pLoss === 0))
        {
            gResult.textContent = `Game is a Draw!`;
        }
        else if((pWin > pLoss && pWin >= pDraw) || (pWin > pLoss && pWin <= pDraw))
        {
            gResult.textContent = `Player Wins Rock Paper Scissors!`;
        }
        else if((pWin < pLoss && pLoss >= pDraw) || (pWin < pLoss && pLoss <= pDraw))
        {
            gResult.textContent = `Player Loses Rock Paper Scissors!`;
        }
        else
        {
            gResult.textContent = `Game is a Draw!`;
        }

        rounds = 0;
        pWin = 0;
        pLoss = 0;
        pDraw = 0;
    }
    else
    {   
        // Will erase the overall result at round 1 after the 5 rounds are over. 
        if (rounds === 1)
        {
            const gResult = document.querySelector('#game-result');
            gResult.textContent = "";
        }

        // Event 'change' will remove old content from the 'player-comp-choice' div when new content is added. 
        playerComputerChoices.addEventListener('change', removeContent);

        const computerChoice = computerPlay(); // Function will return a the computer choice.
    
        roundResult = playRound(playerChoice, computerChoice) // Function will return result of the round.
    
        winOrLoss = roundResult.substring(4, 5);  // Player gains a win, loss, or draw. 

        // Player gains a win, loss, or draw after each round. 
        if (winOrLoss === 'W')
        {
            pWin++;
        }
        else if(winOrLoss === 'L')
        {
            pLoss++;
        }
        else
        {
            pDraw++;
        }
    
        gRounds.textContent = `Game ${rounds}`; // Display the amount of rounds playeyd in the 'game-round' div.
 
        // Add text content to each category to showcase the game details.
        player.textContent = `Player: ${playerChoice}`;
        computer.textContent = `Computer: ${computerChoice}`;
        result.textContent = `Result: ${roundResult}`;
    
        // stylize the 'player-comp-choice' div with inline CSS. 
        playerComputerChoices.setAttribute('style', 'font-size:20px; padding:10px; display: block;');
    
        // Add each category as a child to the 'player-comp-choice' div.
        playerComputerChoices.appendChild(player);
        playerComputerChoices.appendChild(computer);
        playerComputerChoices.appendChild(result);
    
        // Stylize the 'game-score' div with inline CSS. 
        gScore.setAttribute('style', 'font-size:20px; padding:10px;');
    
        // Showcase the player wins, losses, and draws. 
        gScore.textContent = `Wins: ${pWin} Losses: ${pLoss} Draws: ${pDraw}`;
    }
}

// Function Definition - rock()
function rock()
{
    game(choices[0]);
}

// Function Definition - paper()
function paper()
{
    game(choices[1]);
}

// Function Definition - scissors()
function scissors()
{    
    game(choices[2]);
}

// Function Definition - game(): Will start a 5 round game of rock paper scissors.
// function game()
// {
//     let wins = 0;
//     let losses = 0;
//     let draws = 0;
//     let winOrLoss = "";

//     for(let i = 0; i < 5; i++)
//     {
//         // Prompt the user to enter rock, paper, or scissors for the game.
//         let playerChoice = prompt(`Game: ${i + 1} \n\nPlease enter \nRock \nPaper \nScissors`);
//         const computerChoice = computerPlay();

//         // To avoid null with the toLowerCase() method if playerChoice has no value.
//         if (playerChoice == null)
//         {
//             alert("Program Canceled");
//             break;
//         }
//         else
//         {
//             playerChoice = playerChoice.toLowerCase();
//         }

//         // Will check the user choice to continue the game. 
//         if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
//         {
//             roundResult = playRound(playerChoice, computerChoice);

//             // To avoid null with the substring method if there is a draw.
//             if (roundResult !== "Draw")
//             {
//                 winOrLoss = roundResult.substring(4, 5);
//             }
            
//             if (winOrLoss === "W")
//             {
//                 console.log(roundResult);
//                 wins += 1;
//             }
//             else if (winOrLoss === "L")
//             {
//                 console.log(roundResult);
//                 losses += 1;
//             }
//             else if (roundResult === "Draw")
//             {
//                 console.log(roundResult);
//                 draws += 1;
//             }
//             winOrLoss = "";
//             console.log("\n");
//         }
//         else
//         {
//             alert("Invalid input, refresh the page to try again.");
//             break;
//         }

//         // Check if all the rounds have been played to display if the user has won or loss at the game. 
//         if (i === 4)
//         {
//             if (wins > losses)
//             {
//                 console.log(`You are the Winner of Rock, Paper, Scissors with a total of \n${wins} wins, ${losses} losses, and ${draws} draws.`);
//             }
//             else if (wins < losses)
//             {
//                 console.log(`You have Loss at Rock, Paper, Scissors with a total of \n${wins} wins, ${losses} losses, and ${draws} draws.`);
//             }
//             else if (draws > wins && draws > losses)
//             {
//                 console.log(`All rounds were draws with a total of ${draws} draws`);
//             }
//             else if (wins === losses)
//             {
//                 console.log(`The game tied with ${wins} wins and ${losses} losses.`);
//             }
//         }
//     }
// }
