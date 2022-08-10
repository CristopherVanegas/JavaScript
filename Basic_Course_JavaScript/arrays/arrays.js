
/*  CREATING AN ARRAY  */
var frutas = ['Manzana', 'Plátano', 'Cereza', 'Freza'];

console.log(frutas);    // Returns the ARRAY and it's ELEMENTS

console.log(frutas.length); // Returns the Array's LENGTH



/*  ACCESS TO SPECIFIED INDEX  */
console.log(frutas[0]);

console.log(frutas[2]);



/*  ADD TO LAST POSITION  */
var masFrutas = frutas.push('Kiwi');

console.log(frutas);



/*  DELETE LAST ITEM  */
var ultimo = frutas.pop();

console.log(frutas);



/*  unshift() - ADDS ELEMENTS IN THE FIRST POSITION  */
var nuevaLongitud = frutas.unshift('Uvas');

console.log(frutas);



/*  shift() - DELETES THE FIRST ELEMENT  */
var borrarFruta_alInicio = frutas.shift();    // It's not necessary to express the ARGUMENT

console.log(frutas);



/*  indexOf() - SEARCHES FOR THE INDEX OF THE SPECIFIED ELEMENT AS ARGUMENT  */
var position = frutas.indexOf('Cereza');

console.log(position + " is the position of 'Cereza' in array.");

