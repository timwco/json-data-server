var express = require('express');
var app = express();

// Require Data
var formData = require('./data/formData');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send('Just a simple app that serves pre configured JSON data. Enjoy.');
});

app.get('/formData', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(formData);
});

// run the server
app.listen(process.env.PORT || 3000);