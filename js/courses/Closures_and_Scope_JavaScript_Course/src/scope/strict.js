//var pi;
// js creates a var variable when it finds a value that wasn't declared before.
// 'use strict';   // this uses an advanced js mode so doesn't use the variable 'hoisting'
//pi = 3.1416;
//console.log(pi);


function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());



/*

    Definition of 'use strict': This reserved keywords are used to enable a js mode
    that uses better standarts when coding. This avoid us to develop apps that their
    logic is not enough good or stable.

*/