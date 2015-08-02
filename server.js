var express = require('express');
var app = express();
var config = require('./config/config.json');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/order/:id', function (req, res) {
  res.send();
});

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});