let computerSelection = function() {
    const items = ['rock', 'paper', 'scissors'];
    let randomChoice = items[Math.floor(Math.random()*items.length)];
    return randomChoice;
}

function playRound (playerSelection,computerSelection) {  // this is the game
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

let gameMemo=[];
function countWinLoss(){
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
    if ((winCount > lossCount)&&(winCount === 5)){
        return 'you are the final winner! ' + winCount + ' wins vs ' + lossCount + ' losses'
    } else if ((winCount < lossCount)&&(lossCount === 5)){
        return 'the computer is the final winner! ' + winCount + ' wins vs ' + lossCount + ' losses'
    }
    return [winCount + ' Wins ', lossCount + ' losses ', tieCount + ' ties '];
}

function resultInContainer(){
    const resultP = document.createElement('p');
    resultP.textContent = gameMemo[gameMemo.length-1] +'   Score:  ' + countWinLoss();
    resultsContainer.appendChild(resultP);
}

let rockGame = ()=> {
    gameMemo.push(playRound('rock', computerSelection()));
    resultInContainer();
}
let paperGame = ()=> {
    gameMemo.push(playRound('paper', computerSelection()));
    resultInContainer();
}
let scissorsGame = ()=> {
    gameMemo.push(playRound('scissors',computerSelection()));
    resultInContainer();
}


const resultsContainer = document.querySelector('#resultsContainer')
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click',rockGame);
paperBtn.addEventListener('click',paperGame);
scissorsBtn.addEventListener('click',scissorsGame);