function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissor"];
    let choicesSize = choices.length;
    let randomChoice = choices[Math.floor(Math.random() * choicesSize)];
    return randomChoice;
}
