
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 100000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700},
];


// filter()

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});


console.log(articulosFiltrados);



// map()

var nombreArticulos = articulos.map(function (articulo) {
    if (articulo.costo >= 500) {
        return articulo.nombre = 'B'

    } else if (articulo.costo < 500) {
        //let nuevoArticulo = articulo.nombre;
        //nuevoArticulo = "A";
        return articulo.nombre = 'A';
        //return articulo.nombre = 'A';

    }
});

console.log(nombreArticulos);

