
let rockElement = document.querySelector(
  '.js-button-rock'); 
let paperElement = document.querySelector(
  '.js-button-paper');
let scissorsElement = document.querySelector(
  '.js-button-scissors');
let clearElement = document.querySelector('.js-button-clear');

let userInput = '';
let compInput = '';

rockElement.addEventListener('click',()=>{
  let userInput = 'rock'
});
paperElement.addEventListener('click',()=>{
  let userInput = 'paper'
});
scissorsElement.addEventListener('click',()=>{
  let userInput = 'scissors'
});
clearElement.addEventListener('click',()=>{

});



function results() {}

function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3); 

  if (randomNum == 0) {
    let compInput = 'rock';
  }
  else if (randomNum == 1){
    let compInput = 'paper';
  }
  else if (randomNum == 2){
    let compInput = 'scissors';
  }
}

