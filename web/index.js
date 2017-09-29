const express = require('express');
const app = express();
const Transcriber = require('./transcriber');
const config = require('./config');

var transcriber = new Transcriber(
	config.clientId,
	config.clientKey
);

app.get('/', function()  {
	console.log("got //");
	transcriber.transcribe();
});

app.listen(3000);