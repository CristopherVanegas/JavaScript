
var estudiantes = [
    'María',
    'Segio',
    'Rosa',
    'Daniel'
];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var index = 0; index < estudiantes.length; index ++) {
    saludarEstudiantes(estudiantes[index]);
}

