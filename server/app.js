var express = require('express')
var app = express();
var bodyParser = require("body-parser");
var routes = require('./routes.js');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));
app.use('/', routes);

module.exports = app;
