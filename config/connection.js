// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
            port: 3306,
            host: "localhost",
            user: "root",
            password: "humzas",
            database: "burgers_db"
        }
    });


// Make connection.

// Export connection for our ORM to use.
module.exports = connection;