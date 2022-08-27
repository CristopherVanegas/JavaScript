input1 = document.querySelector('#input1');
input2 = document.querySelector('#input2');
pResultado = document.querySelector('#resultado');
btnCalcular = document.querySelector('#btnCalcular');

function onClickFunction () {
    pResultado.innerText = "Resultado: " + input1.value + input2.value;
}

