// importing mysql module
import { createConnection } from 'mysql';
// const mysql = require('mysql');


// configurations for creating mysql connection
const connection = createConnection({
        host: 'localhost',  // host for connection
        port: 3306,         // default port for mysql is 3306
        database: 'holamundo',   // database from which we want to connect out node application
        user: 'root',       // username of the mysql connection
        password: '<Jkali_21.mint.mysql>',    // password of the mysql connection
        connectionLimit: 10
});


// executing connection
connection.connect(function (err) {
    if (err) {
        console.log("error ocurred while connecting");
    }
    else {
        console.log("connection created with mysql successfully");
    }
});