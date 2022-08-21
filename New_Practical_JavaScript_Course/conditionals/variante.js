// Variante con if (no con else ni else if)

const tipoDeSuscripcion = 'Expert Plus';

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar TODOS los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == 'Expert Plus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
    console.log('Inserte un tipo de suscripción correcto por favor.')
}
