const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
  jsonResponse = {
    positiveMessage: process.argv[2],
    backgroundColor: process.argv[3]
  };
  res.status(200).send(jsonResponse)
});

var server = app.listen(8000, function () {
    console.log("Affrmitive: ", server.address().port);
    console.log("Positive Message: ", process.argv[2]);
    console.log("Background Color: ", process.argv[3]);
});
