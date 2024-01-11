function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];
    let choicesSize = choices.length;
    let randomChoice = choices[Math.floor(Math.random() * choicesSize)];
    return randomChoice;
}

function round(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    // computerSelection = getComputerChoice();

    if(playerSelection === computerSelection)
    {
        return "It's a Tie!"
    }
    else if(computerSelection == "rock")
    {
        if(playerSelection == "scissor")
        {
            return "You lose! Rock beats Scissor";
        }
        else if(playerSelection == "paper")
        {
            return "You won! Paper beats Rock";
        }
    }
    else if(computerSelection == "paper")
    {
        if(playerSelection == "rock")
        {
            return "You lose! Paper beats rock";
        }
        else if(playerSelection == "scissor")
        {
            return "You won! Scissor beats paper";
        }
    }
    else if(computerSelection == "scissor")
    {
        if(playerSelection == "paper")
        {
            return "You lose! Scissor beats paper";
        }
        else if(playerSelection == "rock")
        {
            return "You won! Rock beats Scissor";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Player choice: " + playerSelection);
console.log("Computer choice: " + computerSelection);

console.log(round(playerSelection, computerSelection));