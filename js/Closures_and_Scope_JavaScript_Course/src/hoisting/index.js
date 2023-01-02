// HOISTING hoists the declaration of a variable at the start of the scope.
// var nameOfDog;
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';

//-----------------------------------------------------//

//var elmo = 'Elmito';
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

// result: 'El mejor perrito es undefined'
