const express = require('express');
const fs = require('fs');


let imagesFile = 'images.json';
let messagesFile = 'messages.json';

// Read it once and then watch for changes afterwards.
let images = JSON.parse(fs.readFileSync(imagesFile, 'utf8'));
let messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));

fs.watchFile(imagesFile, function(curr, prev) {
  images = JSON.parse(fs.readFileSync(imagesFile, 'utf8'));
});

fs.watchFile(messagesFile, function(curr, prev) {
  images = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const app = express();

app.get('/', function(req, res) {
  res.status(200).send(":)");
});

app.get('/message', function(req, res) {
  const randomMessage = messages[getRandomInt(messages.length)]
  res.status(200).send(JSON.stringify(randomMessage))
});

app.get('/image', function(req, res) {
  const randomImage = images[getRandomInt(images.length)]
  res.status(200).send(JSON.stringify(randomImage))
});

var server = app.listen(8000, function () {
    console.log("Affrmitive: ", server.address().port);
});
