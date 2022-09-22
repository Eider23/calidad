const mysql = require('mysql');


function getConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'mydb',
        user: 'root',
        password: '',
    });

    connection.connect(function(error) {
        if (error) {
            console.log(error);
        } else {
            //console.log("successful connection");
        }

    });

    return connection;
}

module.exports = {
    "getConnection": getConnection
}