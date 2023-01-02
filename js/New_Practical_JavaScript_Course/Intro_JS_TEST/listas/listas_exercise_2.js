// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let fruits = [
    'apple',
    'banana',
    'grapes',
    'kiwi',
    'green apple',
    'watermelon',
    'cherries',
    'strawberries'
]

function recorrer_arr (arr) {
    for (let element of arr) {
        console.log(`${element}`);
    }
}

recorrer_arr(fruits);
