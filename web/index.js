const express = require('express');
const app = express();
const transcriber = require('./transcriber');

app.get('/', function()  {
	console.log("got //");
	transcriber.test();
});

app.listen(3000);