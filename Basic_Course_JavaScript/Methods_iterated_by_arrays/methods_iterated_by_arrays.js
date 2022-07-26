var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 100000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700},
];


// filter()    ->    To iterate EACH item that applies the condition we specified before.
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);



// map()    ->    To iterate EVERY item without the costs.
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

console.log(nombreArticulos);

