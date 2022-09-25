
//Global variables for computer and player scores
let COMP_SCORE = 0;
let PLAYER_SCORE = 0;

// a function that will choose randomly
// between Rock, Paper and Scissors
function getComputerChoice(){
    var values = ["Rock","Paper","Scissors"]
    valueToUse = values[Math.floor(Math.random() * values.length)];

return valueToUse;


}
//Rock beats Scissors, Scissors beat paper, Paper beats rock
function playRound(playerSelection, computerSelection) {
    // This allows playerSelection to be inputed no matter how capitalised each letter is.
    let play = capitalize(playerSelection);
    let comp =computerSelection;
   
    if(play == "Rock" && comp == "Paper"){
        COMP_SCORE++;
        return "You Lose, Paper beats Rock!";
        
    }else if(play == "Paper" && comp == "Scissors"){
        COMP_SCORE++;
        return "You Lose, Scissors beats paper!";
        
        

    }else if(play == "Scissors" && comp == "Rock"){
        COMP_SCORE++;
        return "You Lose, Rock beats Scissors!";
        

    }else if(play == "Scissors" && comp == "Paper"){
        PLAYER_SCORE++;
        return "You Won, Scissors beats Paper!";
        
    }else if(play == "Paper" && comp == "Rock"){
        PLAYER_SCORE++;
        return "You Won, Paper beats Rock!";
        
    }else if(play == "Rock" && comp == "Scissors"){
        PLAYER_SCORE++;
        return "You Won, Rock beats Scissors!";
        
    }else if(play ==comp){
        return 'Draw'
    }
    
    
  }

 function game(){
    //plays the round of R.P.S. 5 times
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getComputerChoice())
        
    }
    //if computers score is higher than the players, computer wins and visa versa
    if (COMP_SCORE > PLAYER_SCORE){
alert(`C ${COMP_SCORE}, P ${PLAYER_SCORE}, You Lose`);

    }else if(PLAYER_SCORE > COMP_SCORE){
        alert(`C ${COMP_SCORE}, P ${PLAYER_SCORE}, You Win`);
    }else {
        alert(`C ${COMP_SCORE}, P ${PLAYER_SCORE}, Draw`);
    }
 }

  
// This function allows strings case-insensitive
  function capitalize(string) {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
}
   
  let playerSelection = getComputerChoice();
  let computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(game());
  console.log(`C ${COMP_SCORE}, P ${PLAYER_SCORE}`);

 