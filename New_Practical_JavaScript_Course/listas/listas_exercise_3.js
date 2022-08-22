// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const precioFrutas = {
    apple: 0.25,
    banana: 0.30,
    grapes: 1.25,
    kiwi: 0.35,
    greenApple: 0.25,
    watermelon: 4.5,
    cherries: 1.5,
    strawberries: 1.75
}

function elements (object) {
    console.log('Prices: ')
/*
    for (let element = 0; element <= object.length; element++) {
        console.log(`    ${element}: ${object}`);
    }
*/
    
    for (let element in object) {
        console.log(`    ${element}: ${object[element]}`);
    }
    
}

elements(precioFrutas);


