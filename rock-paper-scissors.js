
let rockElement = document.querySelector(
  '.js-button-rock'); 
let paperElement = document.querySelector(
  '.js-button-paper');
let scissorsElement = document.querySelector(
  '.js-button-scissors');
let clearElement = document.querySelector('.js-button-clear');

rockElement.innerHTML = "<img src='images/rock.png' alt='rock'><p>rock</p>";

paperElement.innerHTML = "<img src='images/paper.png' alt='rock'><p>paper</p>";

scissorsElement.innerHTML = "<img src='images/scissors.png' alt='rock'><p>scissors</p>";


let userInput = '';
let compInput = '';

rockElement.addEventListener('click',()=>{
  let userInput = 'rock';
  results(userInput);
});

paperElement.addEventListener('click',()=>{
  let userInput = 'paper';
  results(userInput);
});

scissorsElement.addEventListener('click',()=>{
  let userInput = 'scissors';
  results(userInput);
});

clearElement.addEventListener('click',()=>{
  clear();
});

function results(userInput) {
  let compInput = computerChoice();

  console.log(userInput);
  console.log(compInput);

  document.getElementById('user-input').innerHTML = `you chose ${userInput}`;
    
  document.getElementById('comp-input').innerHTML = `poop chose ${compInput}`;

  winnerDisplay(userInput, compInput);


  }

function winnerDisplay(userInput, compInput) {
    if (compInput !== userInput) {
      console.log(userInput);
      console.log(compInput);

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
      } else if (compInput === userInput) {
        document.getElementById('results').innerHTML = `it's a tie!`;
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

function clear() {
  let compInput = '';
  let userInput = '';

  document.getElementById('results').innerHTML = ``;

  document.getElementById('user-input').innerHTML = ``;

  document.getElementById('comp-input').innerHTML = ``;
}