// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

let tiposDeSuscripcion = [
    'Free -> Solo puedes tomar los cursos gratis',
    'Basic -> Puedes tomar casi todos los cursos de Platzi durante un mes',
    'Expert -> Puedes tomar TODOS los cursos de Platzi durante un año',
    'Expert Plus -> Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
]

const tipoDeSuscripcion = "3";

if ( (tipoDeSuscripcion == 0) || (tipoDeSuscripcion == 1) || (tipoDeSuscripcion == 2) || (tipoDeSuscripcion == 3) ) {
    console.log(tiposDeSuscripcion[tipoDeSuscripcion]);
} else {
    console.log('Tipo de suscripción invalidad');
}

