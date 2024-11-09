// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body parser to parse POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the comments array
var comments = [];

// Define the GET method for /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Define the POST method for /comments
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});