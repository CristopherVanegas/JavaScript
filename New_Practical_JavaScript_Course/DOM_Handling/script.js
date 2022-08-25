const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.log(h1);

console.log(input.value);
console.log(input.value = 123);

console.log(p.innerHTML = "Modifiqué el InnerHTML");

console.log(p);

const parrafos = document.querySelectorAll('p');
console.log( "Lista de Parrafos: ");
console.log(parrafos);

