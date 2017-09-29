var Houndify = require('houndify');
var wav = require('wav');
var fs = require('fs');
var path = require('path');

function Transcriber(cid, ckey) {
	var self = this;
	// set up houndify api...
	this.client = new Houndify.HoundifyClient({
		clientId: cid,
		clientKey: ckey,
		onResponse: function(resp, info) {
			console.log(resp);

			var state = self.client.conversation.getState();
			self.client.conversation.setState(state);
		},
		onError: function(err, info) {
			console.log(err);
		}
	});

	this.reader = new wav.Reader();
	this.reader.on('format', function(format){
		console.log(format);
		self.client.voiceSearch.startStreaming(requestInfo, 16000);
	});

	this.reader.on('data', function(dataChunk){
		var buffer = new Uint8Array(dataChunk).buffer;
		var view = new Int16Array(buffer);
		self.client.voiceSearch.write(view);
	});

	this.transcribe = function() {

	}
}

module.exports = Transcriber;