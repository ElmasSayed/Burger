var orm = require("../config/orm.js");

var modelBurger = {
  getUndevouredBurgers: function(cb) {
    orm.getUndevouredBurgers(function(res) {
      cb(res);
    });
  }
}
module.exports = modelBurger;

// var myBurgers = [
// 	{burgerName:"Cheese Burger"},
// 	{burgerName:"Fish Burger"},
// 	{burgerName:"Quarter Pounder Burger"}
// ];
