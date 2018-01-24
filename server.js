var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
require('./server/config/mongoose.js');

// app.use(express.static(path.join(__dirname, "./static")));
// app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/ang-task-app/dist' ));

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})