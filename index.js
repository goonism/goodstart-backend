const express = require('express');
const fs = require('fs');

const configName = './config.json'
let config = null;

// Read it once and then watch for changes afterwards.
config = JSON.parse(fs.readFileSync(configName, 'utf8'));

fs.watchFile(configName, function(curr, prev) {
  config = JSON.parse(fs.readFileSync(configName, 'utf8'));
});

const app = express();

app.get('/', function(req, res) {
  res.status(200).send(":)");
});

app.get('/api', function(req, res) {
  res.status(200).send(JSON.stringify(config))
});

var server = app.listen(8000, function () {
    console.log("Affrmitive: ", server.address().port);
});
