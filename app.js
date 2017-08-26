/* Credentials in config are linked to specific Twitter account (dev.twitter.com) */

// Get the twit packes from npm
var Twit = require('twit');

// Get log in credentials from config.js
var config = require('./config');

// Create new object with credentials
var T = new Twit(config);

tweetStatus();
setInterval(tweetStatus, 1000 * 10);

function tweetStatus() {
	var rnd = Math.floor(Math.random()*1000);
	var tweet = { status: rnd }
    T.post('statuses/update', tweet, tweeted);
}

function tweeted(err, data, response) {
	if (err) {
		console.log('Error');
	}
	else {
		console.log('success');
	}
}