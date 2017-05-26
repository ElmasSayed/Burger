var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
<<<<<<< HEAD
var port = 8087;
=======
var port = process.env.PORT || 8086;
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
<<<<<<< HEAD
=======

>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//app.listen(port);
<<<<<<< HEAD
app.listen(port, function(req,res){
	console.log("listening at " + port);
});

//routes.redirect("/");


=======
app.listen(port, function(req, res) {
    console.log("listening at " + port);
});
>>>>>>> eec83a6ffad73d28b4d6bc6dad06d84edf1d5526
