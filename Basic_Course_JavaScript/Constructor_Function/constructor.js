
/*   CONSTRUCTOR FUNCTION   */

function auto (marca, modelo, annio) {  // As parameters it receives (marca, model and annio of release)
    this.marca = marca; // From this object 'marca', It's equal to parameter 'marca'.
    this.modelo = modelo;   // From this object 'modelo', It's equal to parameter 'modelo'.
    this.annio = annio; // From this object 'annio', It's equal to parameter 'annio'.
}

var autoNuevo1 = new auto("Tesla", "Model 3", 2020);    // Instance of object 'auto' for Tesla Model 3
var autoNuevo2 = new auto("Ford", "Maverick", 1975);    // Instance of object 'auto' for Ford Maverick

console.log(autoNuevo1);    // prints by console the first car
console.log(autoNuevo2);    // prints by console the second car
