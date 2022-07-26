/* SELECTING AND ADDING INTO VARIABLES THE QUERYSELECTORS AND IT'S ELEMENTS */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
console.log(h1);


/* INPUT */
console.log(input.value);   //console.log(input.value = 123);


h1.innerHTML = 'Patito <br> Feo'
h1.innerText = 'Patito <br> Feo'
console.log(p.innerHTML = "Modifiqué el InnerHTML");
console.log(p);


const parrafos = document.querySelectorAll('p');
console.log( "Lista de Parrafos: ");
console.log(parrafos);



/* GET THE CLASS ATTRIBUTE */
attribute = h1.getAttribute('class');
console.log("USING .getAttribute()")
console.log("El atributo de tipo 'clase' del elemento h1 es: " +  "." + attribute);


/* MODIFY THE ATTRIBUTE */
h1.setAttribute('class', 'rojo');
h1.classList.add('verde');
//h1.classList.remove('verde');
console.log(h1);



/* MODIFY INPUT VALUES */
input.value = 1234567;



/* CREATE A NEW ELEMENT */
const img = document.createElement('img');
img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/919/919826.png');

const img_2 = document.createElement('img');
img_2.setAttribute('src', 'https://wwwhatsnew.com/wp-content/uploads/2021/01/aprender-css.jpg');

console.log(img_2);

//pid.innerHTML
//pid.appendChild
pid.append(img);
p.innerHTML = "";
p.appendChild(img_2);
