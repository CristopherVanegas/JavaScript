// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
/*

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

*/


let i = 0;

while (i < 5) {
    console.log(`El valor de i es: ${i}`);
    i = i + 1;

    if (i === 5) {
        console.log("Como i es igual a 5, entonces el ciclo termina.\n");
    }
}



let j = 10;

while (j >= 2) {
    console.log(`El valor de j es: ${j}`);
    j = j - 1;

    if (j < 2) {
        console.log("Como j es menos a 2, entonces el ciclo termina.\n");
    }
}
