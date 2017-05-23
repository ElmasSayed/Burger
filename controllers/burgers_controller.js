var express = require("express");
var router = express.Router();
var modelBurger = require("../models/burger.js");


//console.log("hbsObject" + JSON.stringify(burger,null,4));


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    modelBurger.getUndevouredBurgers(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("ctrl.hbsObject:" + hbsObject);
        res.render("index", hbsObject);
    });
});


// Export routes for server.js to use.
module.exports = router;