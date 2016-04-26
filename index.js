var express = require('express');
var app = express();

// Require Data
var formData = require('./data/formData');
var restaurant = {
  news: require('./data/restaurant/news'),
  special: require('./data/restaurant/special'),
  menu1: require('./data/restaurant/menu1'),
  menu2: require('./data/restaurant/menu2'),
  menu3: require('./data/restaurant/menu3')
};
var darts = {
  info: require('./data/darts/info'),
  testimonials: require('./data/darts/testimonials'),
  companies: require('./data/darts/companies')
};


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Home/Welcome Page
app.get('/', function(req, res) {
  res.send('Just a simple app that serves pre configured JSON data. Enjoy.');
});

// Sample Form Data
app.get('/forms', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(formData);
});

// Restaurant Project
app.get('/restaurant', function (req, res) {
  var data = `<div>
    <p>News: <a href="/restaurant/news/1">/restaurant/news/1</a></p>
    <p>Special: <a href="/restaurant/special/1">/restaurant/special/1</a></p>
    <p>Fancy Menu: <a href="/restaurant/menu/1">/restaurant/menu/1</a></p>
    <p>Alaydis Menu: <a href="/restaurant/menu/2">/restaurant/menu/2</a></p>
    <p>Pub Menu: <a href="/restaurant/menu/3">/restaurant/menu/3</a></p>
  </div>`;
  res.send(data)
});
app.get('/restaurant/news/1', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(restaurant.news)
});
app.get('/restaurant/special/1', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(restaurant.special)
});
app.get('/restaurant/menu/1', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(restaurant.menu1)
});
app.get('/restaurant/menu/2', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(restaurant.menu2)
});
app.get('/restaurant/menu/3', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(restaurant.menu3)
});


// Lawn Darts Project
app.get('/darts', function (req, res) {
  var data = `<div>
    <p>Info: <a href="/darts/info">/darts/info</a></p>
    <p>Companies: <a href="/darts/companies">/darts/companies</a></p>
    <p>Testimonials: <a href="/darts/testimonials">/darts/testimonials</a></p>
  </div>`;
  res.send(data)
});
app.get('/darts/info', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(darts.info)
});
app.get('/darts/companies', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(darts.companies)
});
app.get('/darts/testimonials', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(darts.testimonials)
});

// run the server
app.listen(process.env.PORT || 3000);