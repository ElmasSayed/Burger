var express = require("express");
var router = express.Router();
var modelBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  modelBurger.getUndevouredBurgers(function(data1) {
    modelBurger.getDevouredBurgers(function(data2) {
      var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
      hbsObject.undevouredBurgers = data1;
      hbsObject.devouredBurgers = data2;
      res.render("index", hbsObject);
    });
  });
});

//add new burger using post
router.post("/add", function(req, res) {
  modelBurger.addNewBurger(req.body.burgerName, function() {
    res.redirect("/");
  });
});

//devour burger using put
router.put("/update/:id", function(req, res) {
  modelBurger.devourBurger(req.params.id, function() {
    res.redirect("/");
  });
});

//delete burger using delete method
router.delete("/delete/:id", function(req, res) {
  //console.log("DELETE BURGER - Controller: " + req.params.id);
  modelBurger.deleteBurger(req.params.id, function() {
     res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;