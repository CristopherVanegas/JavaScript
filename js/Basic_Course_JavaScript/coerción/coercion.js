/*
    TWO TYPES OF COERCION
        1. IMPLIED   ->  LANGUAGE CHANGED THE TYPE OF A VARIABLE.
        2. EXPLICIT  ->  DEVS CHANGE THE TYPE OF A VARIABLE
*/


/* IMPLIED COERCION */
var a = 4 + "7";
typeof a

var b = 4 * "7";
typeof b


/* EXPLICIT COERCION */
var a = 20;
var b = a + "";

console.log(b);

var c = String(a);  // EXPLICIT EQUATION
typeof c
console.log(c);

var d = Number(c);
typeof d
console.log(d);
