// factors such as: asignation, declaration, re-asignation and re-declaration


var a ; // declarating
var b = 'b';    // declarating / asignating

b = 'bb';   // re-asignating
var a = 'aa';   // re-declarating


// Global Scope
var fruit = 'Apple';    // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


// Global scope by accident

function countries() {
    country = 'Colombia';   // asignation but never declared;
    console.log(country);
}

countries();
console.log(country);

