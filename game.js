function getComputerChoice () { // this function give us a random choice
    const items = ['rock', 'paper', 'scissors'];
    randomChoice = items[Math.floor(Math.random()*items.length)];
    return randomChoice;
}

function playRound (playerSelection,computerSelection) {  // this is the game
    if (playerSelection !== 'paper' && playerSelection !== 'rock' && playerSelection !=='scissors') {
        return undefined;
    } else {
        switch(true) {
            case playerSelection == 'rock' && computerSelection == 'scissors':
                return 'You win! ' + playerSelection +' beats '+ computerSelection;
            case playerSelection == 'paper' && computerSelection == 'rock':
                return 'You win! ' + playerSelection +' beats '+ computerSelection;
            case playerSelection == 'scissors' && computerSelection == 'paper':
                return 'You win! ' + playerSelection +' beats '+ computerSelection;
            case playerSelection == 'scissors' && computerSelection == 'rock':
                return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
            case playerSelection == 'rock' && computerSelection == 'paper':
                return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
            case playerSelection == 'paper' && computerSelection == 'scissors':
                return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
            default:
                return "it's a tie! " + playerSelection + ' VS ' + computerSelection;
        }
    }
}

let gameMemo=[];
function countWinLoss(){ // this records the final results
let winCount=0;
let lossCount=0;
let tieCount=0
    for(let i=0; i < gameMemo.length; i++){
        if (gameMemo[i].includes('You win! ')){
            winCount++;
        }else if (gameMemo[i].includes('You lose! ')){
            lossCount++;
        }else{
            tieCount++;
        }
        
    }
    return [winCount, lossCount, tieCount]
}

function winner(){ // this determines if the player is a winner or a loser
    if (countWinLoss()[0] > countWinLoss()[1]) {
        return  'Winner! ' + countWinLoss()[0] + ' wins vs ' + countWinLoss()[1] + ' losses.'
    } else {
        return 'Looser!' + countWinLoss()[0] + ' wins vs ' + countWinLoss()[1] + ' losses.'
    }
}

function playGame(){ // this allows us to play 5 rounds and record each round results
    gameMemo=[];
    for(let i=0; i<5; i++){
            let computerSelection = getComputerChoice();
            let playerSelection = prompt('Select between paper, scissors and rock');
            gameMemo.push((playRound(playerSelection,computerSelection)));
            if (gameMemo[i] == undefined){
                window.alert('input no valid. click play again to restart the game');
                break;
            }
            console.log(gameMemo);
    }
    console.log(winner());
   
}
const promptButton = document.getElementById('prompt');
promptButton.addEventListener('click',playGame)
;