// import files and packages up here

var express = require('express');
var morgan = require('morgan');
var jsonData = require('./data.json');
var bodyParser = require("body-parser");

// create your express server below

var app = express();

// add your routes and middleware below

// middleware that uses morgan's dev format for each log request
app.use(morgan('dev'))
// middleware that only parses json
app.use(bodyParser.json());

// server should respond to GET requests to / route
app.get('/', (req, res) => {
    res.send("It's working")
  });

// server should respond to GET requests to data/ route with the top spots data
app.get('/data', (req, res) => {
    res.send(jsonData)
  });

// finally export the express application

module.exports = app;
