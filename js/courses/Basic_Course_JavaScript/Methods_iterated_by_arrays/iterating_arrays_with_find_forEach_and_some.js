var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 100000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700},
];



// find()    ->    Finds something in the ARRAY we're searching for and returns a NEW ARRAY if it's true.
console.log('\n');
console.log('º find()')

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre == "Laptop"
});

console.log(encuentraArticulo);




// forEach()    ->    Iterates an ARRAY but doesn't affect it NEIGHTER CREATES another array.
console.log('\n')
console.log('º forEach()')

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});




// some()    ->    Returns a validation of 'True' or 'False' FOR A QUERIED item.
console.log('\n');
console.log('º some()');

var articulosBaratos = articulos.some(
    function (articulo) {
        return articulo.costo <= 700;
    }
);

console.log(articulosBaratos);
