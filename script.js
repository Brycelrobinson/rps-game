function computerPlay(){

    const compOption = ['ROCK', 'PAPER', 'SCISSORS'];

    return compOption[Math.floor(Math.random() * (3))];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    console.log(computerSelection);
    if(playerSelection == computerSelection){
        console.log('Tie game, your both bad lol');
    } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'
        || playerSelection == 'PAPER' && computerSelection == 'ROCK'
        || playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){

            console.log('You win, lucky guess');
            return 1;
        } else{
            console.log('You lose, imagine being bad');
            return 0;
        }

}

function game(){
    let playerCounter = 0;
    let compCounter = 0;

    for (let i = 0; i<5; i++){
        let playerOption = prompt('Rock, Paper, or Scissors?');

        let roundWinner = playRound(playerOption, computerPlay())

        if(roundWinner == 1){
            playerCounter++;
        } else if(roundWinner == 00){
            compCounter ++;
        }
    }
    if(playerCounter != compCounter){
        if(playerCounter > compCounter){
            console.log('OFFICIAL WINNER');
        } else{
            console.log('OFFICIAL LOSER');
        }
    }else{
        console.log('ITS A TIE, THE WINNER SHALL NEVER BE KNOWN');
    }
}

game();

