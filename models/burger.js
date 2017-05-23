var orm = require("../config/orm.js");

var modelBurger = {
	getUndevouredBurgers: function(cb) {
		orm.getUndevouredBurgers(function(res) {
			cb(res);
		});
	},
	getDevouredBurgers: function(cb) {
		orm.getDevouredBurgers(function(res) {
			cb(res);
		});
	},
	addNewBurger: function(burgerName,cb) {
		orm.addNewBurger(burgerName,function(res) {
            cb(res);
        });
    },
	devourBurger: function(burgerid,cb) {
		orm.devourBurger(burgerid,function(res) {
            cb(res);
        });
    }
}

module.exports = modelBurger;
