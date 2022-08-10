
/*   ROCK, PAPER, SCISSORS   */

let rock = 1;
let paper = 2;
let scissors = 3;


let answer = parseInt(prompt('Please enter 1 for Rock, 2 Paper or 3 for Scissors'));


function fight(answer, pc) {   

    if ((answer === rock) || (answer === paper) || (answer === scissors)) {
        if (answer === pc) {
            console.log('Tie up!');
            
        } else if ( (answer === paper && pc === rock) || (answer === scissors && pc === paper ) || (answer === rock && pc === scissors) ) {
            console.log('You win!');

        } else {
            console.log('You lost!');

        }
    } else {
        alert('Please enter 1 for Rock, 2 for Paper or 3 for Scissors!');
        
    }
}


fight(answer, rock);


