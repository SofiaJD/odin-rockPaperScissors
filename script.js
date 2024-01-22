let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll('button')

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];
    let choicesSize = choices.length;
    let randomChoice = choices[Math.floor(Math.random() * choicesSize)];
    return randomChoice;
}

function disableButtons() {
    buttons.forEach(button => 
    {
        button.disabled = true;
    });
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerPoints += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerPoints + "<br>Computer score: " + computerPoints)

        if (playerPoints == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerPoints + "<br>Computer score: " + computerPoints)
    }
    else {
        computerPoints += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerPoints + "<br>Computer score: " + computerPoints)

        if (computerPoints == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})