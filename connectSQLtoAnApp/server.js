// importing mysql module
const mysql = require('mysql');

// configurations for creating mysql connection
const connection = mysql.createConnection({
        host: 'localhost',  // host for connection
        port: 3306,         // default port for mysql is 3306
        database: 'test',   // database from which we want to connect out node application
        user: 'root',       // username of the mysql connection
        password: 'root'    // password of the mysql connection
});


// executing connection
connection.connect(function (error) {
    if (err) {
        console.log("error ocurred while connecting");
    }
    else {
        console.log("connection created with mysql successfully");
    }
});