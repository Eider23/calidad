const auth = {};
const connect = require('../config/dbConnection');

const connection = connect.getConnection();

auth.get = (req, res) => {

    connection.query('SELECT * FROM auth', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });
    })
}

module.exports = auth;