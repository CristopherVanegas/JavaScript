
// FUNCIONES DECLARATIVAS -> RESERVA MEMORIA para el calculo o operaciones a hacer en la funci´øn.
function miFuncion() {
    return 3;
}
miFuncion();


// FUNCIONES DE EXPRESIÓN O ANONIMAS
var miSegundaFuncion = function(a, b) {
    return a + b;
}
miSegundaFuncion(5, 7);


// EJEMPLO DE FUNCIÓN EXPRESIVA O ANONIMA
var saludandoEstudiantes = function(estudiante) {
    console.log(`Hola ${estudiante}!`);
}
saludandoEstudiantes("Julo")


// TEMPLATE STRING
function saludarEstudiante(estudiante) {
    console.log(estudiante);
}
saludarEstudiante(`Hola ${estudiante}`);


// Ejemplos función DECLARATIVA
function saludarEstudiante(estudiante) {
    console.log(estudiante);
}
saludarEstudiante("Cristopher");


// Ejemplo SIN CONSOLE.LOG
function sumar(a, b) {
    return a + b; 
    //var resultado = a + b;
    //return resultado;
}
sumar(5, 10);


