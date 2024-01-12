let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];
    let choicesSize = choices.length;
    let randomChoice = choices[Math.floor(Math.random() * choicesSize)];
    return randomChoice;
}

function result()
{
    if(playerPoints > computerPoints)
    {
        console.log("You won! 🏆");
    }
    else if(computerPoints > playerPoints)
    {
        console.log("You lose! 😥");
    }
    else
    {
        console.log("It's a tie! 🤝🏽");
    }
}

function round(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection)
    {
        return "It's a Tie!";
    }
    else if(computerSelection == "rock")
    {
        if(playerSelection == "scissor")
        {
            computerPoints ++;
            return "You lose! Rock beats Scissor";
        }
        else if(playerSelection == "paper")
        {
            playerPoints ++; 
            return "You won! Paper beats Rock";
        }
    }
    else if(computerSelection == "paper")
    {
        if(playerSelection == "rock")
        {
            computerPoints ++;
            return "You lose! Paper beats rock";
        }
        else if(playerSelection == "scissor")
        {
            playerPoints ++; 
            return "You won! Scissor beats paper";
        }
    }
    else if(computerSelection == "scissor")
    {
        if(playerSelection == "paper")
        {
            computerPoints ++;
            return "You lose! Scissor beats paper";
        }
        else if(playerSelection == "rock")
        {
            playerPoints ++; 
            return "You won! Rock beats Scissor";
        }
    }
}

function game()
{
    for(let i = 0; i <= 5; i++)
    {
        playerSelection = prompt('Insert "Rock", "Paper" or "Scissor".').toLowerCase();
        const computerSelection = getComputerChoice();

        console.log("Player choice: " + playerSelection);
        console.log("Computer choice: " + computerSelection);

        console.log(round(playerSelection, computerSelection));

        console.log("Player's points: " + playerPoints + "\nComputer's points: " + computerPoints);
    }
    result();
}

game();