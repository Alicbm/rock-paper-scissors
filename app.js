const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
}));

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  
  if(randomNumber === 1){
    computerChoice = 'rock';
  }else if(randomNumber === 2){
    computerChoice = 'paper';
  }else if(randomNumber == 3){
    computerChoice = 'scissors';
  }
  console.log(computerChoice);
  computerChoiceDisplay.innerHTML = computerChoice;
  getResults();
}

function getResults(){
  if(computerChoice === userChoice){
    result = 'Its a draw!'
  }if(userChoice === 'rock' && computerChoice === 'scissors'){
    result = 'You win!'
  }if(userChoice === 'scissors' && computerChoice === 'paper'){
    result = 'You win!'
  }if(userChoice === 'paper' && computerChoice === 'rock'){
    result = 'You win!'
  }if(userChoice === 'paper' && computerChoice === 'scissors'){
    result = 'You lose!'
  }if(userChoice === 'scissors' && computerChoice === 'rock'){
    result = 'You lose!'
  }if(userChoice === 'rock' && computerChoice === 'paper'){
    result = 'You lose!'
  }

  resultDisplay.innerHTML = result;
}