// Import MySQL connection.
var connection = require("../config/connection.js");

//==========================================================================================================================
// Object Relational Mapper (ORM)

var orm = {
    getUndevouredBurgers: function() {
        var queryString = "SELECT * FROM burgers where devoured=false";
        connection.query(queryString, [], function(err, result) {
            console.log('orm.getUndevouredBurgers\n' + JSON.stringify(result));
            return result;
        });
    },
    getDevouredBurgers: function() {
        var queryString = "SELECT * FROM burgers where devoured=true";
        connection.query(queryString, [], function(err, result) {
            console.log(result);
        });
    },
    addNewBurger: function(burgerName) {
        var queryString = "Insert into burgers (burger_name,devoured) values('" + burgerName + "',false)";
        connection.query(queryString, [], function(err, result) {
            console.log(result);
        });
    }
};
module.exports = orm;