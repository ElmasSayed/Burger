var express = require("express");
var router = express.Router();
<<<<<<< HEAD
var Burger = require("../models/burger.js");
var db = require("../models");

router.get("/", function(req, res) {
  var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
  db.Burger.findAll({where: {devoured: false}})
  .then(function(data1) {
    hbsObject.undevouredBurgers = data1;
    db.Burger.findAll({where: {devoured: true}})
    .then(function(data2) {
=======
var modelBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  modelBurger.getUndevouredBurgers(function(data1) {
    modelBurger.getDevouredBurgers(function(data2) {
      var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
      hbsObject.undevouredBurgers = data1;
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
      hbsObject.devouredBurgers = data2;
      res.render("index", hbsObject);
    });
  });
});

//add new burger using post
router.post("/add", function(req, res) {
<<<<<<< HEAD
  db.Burger.create({burger_name: req.body.burgerName})
  .then(function() {
=======
  modelBurger.addNewBurger(req.body.burgerName, function() {
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
    res.redirect("/");
  });
});

//devour burger using put
router.put("/update/:id", function(req, res) {
<<<<<<< HEAD
  db.Burger.update(
    {
      devoured: true
    }, {
    where: {
      id: req.params.id
    }
  }).then(function(){
      res.redirect("/");
=======
  modelBurger.devourBurger(req.params.id, function() {
    res.redirect("/");
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
  });
});

//delete burger using delete method
router.delete("/delete/:id", function(req, res) {
<<<<<<< HEAD
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

//===========================================================================

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   modelBurger.getUndevouredBurgers(function(data1) {
//     modelBurger.getDevouredBurgers(function(data2) {
//       var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
//       hbsObject.undevouredBurgers = data1;
//       hbsObject.devouredBurgers = data2;
//       res.render("index", hbsObject);
//     });
//   });
// });

// //add new burger using post
// router.post("/add", function(req, res) {
//   modelBurger.addNewBurger(req.body.burgerName, function() {
//     res.redirect("/");
//   });
// });

// //devour burger using put
// router.put("/update/:id", function(req, res) {
//   modelBurger.devourBurger(req.params.id, function() {
//     res.redirect("/");
//   });
// });

// //delete burger using delete method
// router.delete("/delete/:id", function(req, res) {
//   //console.log("DELETE BURGER - Controller: " + req.params.id);
//   modelBurger.deleteBurger(req.params.id, function() {
//      res.redirect("/");
//   });
// });


// // Export routes for server.js to use.
// module.exports = router;
=======
  //console.log("DELETE BURGER - Controller: " + req.params.id);
  modelBurger.deleteBurger(req.params.id, function() {
     res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
