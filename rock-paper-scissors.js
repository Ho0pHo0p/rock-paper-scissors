
let rockElement = document.querySelector(
  '.js-button-rock'); 
let paperElement = document.querySelector(
  '.js-button-paper');
let scissorsElement = document.querySelector(
  '.js-button-scissors');
let clearElement = document.querySelector('.js-button-clear');

let userInput ='';
let compInput = computerChoice();

rockElement.addEventListener('click',()=>{
  let userInput = 'rock'
  console.log(userInput);
  choices();
  results();
});
paperElement.addEventListener('click',()=>{
  let userInput = 'paper'
  console.log(userInput);
  computerChoice();
  choices();
  results();
});
scissorsElement.addEventListener('click',()=>{
  let userInput = 'scissors'
  console.log(userInput);
  computerChoice();
  choices();
  results();
});
clearElement.addEventListener('click',()=>{

});


function choices() {
  
  document.getElementById('user-input').innerHTML = `you chose ${userInput}`;

  document.getElementById('comp-input').innerHTML = `poop chose ${compInput}`;
}

function results() {
  if (compInput === userInput) {
    document.getElementById('results').innerHTML = `it's a tie!`;
  } 
  else if (compInput !== userInput){
    compare();
  }
}

function compare () {
  if (userInput === 'rock'){
    if (compInput === 'scissors'){
      document.getElementById('results').innerHTML = `you win!`;
    }
    else if (compInput === 'paper'){
      document.getElementById('results').innerHTML = `you lose`;
    }
  }

  if (userInput === 'paper'){
    if (compInput === 'rock'){
      document.getElementById('results').innerHTML = `you win!`;
    }
    else if (compInput === 'scissors'){
      document.getElementById('results').innerHTML = `you lose`;
    }
  }

  if (userInput === 'scissors'){
    if (compInput === 'paper'){
      document.getElementById('results').innerHTML = `you win!`;
    }
    else if (compInput === 'rock'){
      document.getElementById('results').innerHTML = `you lose`;
    }
  }


  }

function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3); 

  if (randomNum == 0) {
    return 'rock'
  }
  else if (randomNum == 1){
    return'paper';
  }
  else if (randomNum == 2){
    return 'scissors';
  }

}

