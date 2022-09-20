const { Sequelize } = require ("sequelize");

const db_connection = new Sequelize (
               "",
               "root",
               " ", {
                host: "127.0.0.1",
                dialect: "mysql",
                //loggin: false

               });
module.exports ={
    db_connection
}