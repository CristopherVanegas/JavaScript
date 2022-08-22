// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

function pregunta () {
    answer = parseInt(prompt('Cuánto es 2 + 2?'));
    return answer;
}


while ( pregunta() ) {
    if (answer !== 4) {
        alert('No acertaste, intenta de nuevo ;)');
    }
    
    if (answer === 4) {
        alert('Bien, Acertaste!');
        break;
    } 
}
