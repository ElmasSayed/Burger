module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burger;
};

// var orm = require("../config/orm.js");
// var modelBurger = {
// 	getUndevouredBurgers: function(cb) {
// 		orm.getUndevouredBurgers(function(res) {
// 			cb(res);
// 		});
// 	},
// 	getDevouredBurgers: function(cb) {
// 		orm.getDevouredBurgers(function(res) {
// 			cb(res);
// 		});
// 	},
// 	addNewBurger: function(burgerName,cb) {
// 		orm.addNewBurger(burgerName,function(res) {
//             cb(res);
//         });
//     },
// 	devourBurger: function(burgerId,cb) {
// 		orm.devourBurger(burgerId,function(res) {
//             cb(res);
//         });
//     },
// 	deleteBurger: function(burgerId,cb) {
// 		//console.log("DELETE BURGER - model burger: " + burgerId);
// 		orm.deleteBurger(burgerId,function(res) {
//              cb(res);
//         });
//     }
// }
// module.exports = modelBurger;
