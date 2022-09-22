const role = {};
const connect = require('../config/dbConnection');

const connection = connect.getConnection();

role.get = (req, res) => {

    connection.query('SELECT * FROM role', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });
    })
}

module.exports = role;