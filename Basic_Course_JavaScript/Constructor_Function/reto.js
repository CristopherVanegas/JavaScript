
/*
    1. Generar una función constructora
    2. Generar un loop para nuevas instancias para nuevos autos.

 */


// VARIABLES
let listOfCars = [];


// THIS IS THE OBJECT
function carConstructor (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}


for (var index = 0; index < 3; index++) {
    let brand = prompt('Please enter a car brand name: ');
    let model = prompt('Please enter the model: ');
    let year = parseInt(prompt('Please enter the year of release: '));

    listOfCars.push(new carConstructor(brand, model, year));
}


for ( var car of listOfCars) {
    console.log(car);
}
