var express = require("express");
var router = express.Router();
var modelBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
  modelBurger.getUndevouredBurgers(function(data1) {
    hbsObject.undevouredBurgers = data1;
    modelBurger.getDevouredBurgers(function(data2) {
      hbsObject.devouredBurgers = data2;
      console.log("ctrl.hbsObject:" + hbsObject);
      res.render("index", hbsObject);
    });
    // console.log("ctrl.hbsObject:" + hbsObject);
    // res.render("index", hbsObject);
  });
});

//add new burger using post
router.post("/", function(req, res) {
  console.log(req);
  modelBurger.addNewBurger(req.burgerName, function() {
    res.redirect("/");
  });
});

//devour burger using put
router.put("/:id", function(req, res) {
  modelBurger.devourBurger(req.params.id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;