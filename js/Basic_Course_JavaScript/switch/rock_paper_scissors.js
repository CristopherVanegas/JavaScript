
/*   ADDED ROCK, PAPER, SCISSORS GAME WITH SWITCH FLOWCONTROL   */

const rock = 1;
const paper = 2;
const scissors = 3;


let player = parseInt(prompt('Please 1 for Rock, 2 for Paper and 3 for Scissors'));
let pc = 2;


function fight (player, pc) {
    if ( (player === rock) || (player === paper) || (player === scissors) ) {
        switch (player) {
            case 1:
                result(player, pc);
                break;
            
            case 2:
                result(player, pc);
                break;
            
            case 3:
                result(player, pc);
                break;
        }

    } else {
        alert('Please enter 1 for Rock, 2 for Paper and 3 for Scissors');
    }
}


function result (player, pc) {
    if (pc == player) {
        console.log('Tie up!');

    } else if ( ((player === rock) && (pc == scissors)) || ((player === paper) && (pc === rock)) || ((player === scissors) && (pc === paper)) ) {
        console.log('You win! 🥳');

    } else {
        console.log('You lost 🥲');

    }
}



fight(player, pc);
