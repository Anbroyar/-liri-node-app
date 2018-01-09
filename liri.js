require('dotenv').config();
var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');

var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var liri = {
	command: process.argv[2],
	input: '',
	init: function() {
		for (var i = 3; i < process.argv.length; i++) {
			this.input += process.argv[i] + ' ';
		}
		this.input = this.input.trim();
		this.action();
	},
	action: function() {
		switch (this.command) {
			
			case 'my-tweets':
				this.tweets();				
			break;

			case 'spotify-this-song':
				this.spotify(this.input);
			break;

			case 'movie-this':
				this.movie(this.input);
			break;

			case 'do-what-it-says':
				this.random();
			break;

		} 
	}, 
	tweets: function(){ 
		var params = {screen_name: "Angelin84511135"};
		client.get('statuses/user_timeline/', params, function(error, tweets, response) {
			if (!error) {
				console.log(tweets);
			}
		});
	},
	spotify: function(cmd){ 
		if ((!cmd) || (cmd === undefined)) {
			cmd = 'The Sign';
		}
		spotify.search({ type: "track", query: cmd }, function(err, data) {
	if (err) {
		return console.log('Error occurred: ' + err);
	}
	else {
		var spotif = data.tracks.items;
		for (var i = 0; i < spotif.length; i++) {
			  		var result = {
			  			album: spotif[i].album.name,
			  			song: spotif[i].name,
			  			artists: spotif[i].artists,
			  			preview: spotif[i].preview_url
			  		};
				  	console.log('Album: ' + spotif[i].album.name);
				  	console.log('Song Name: ' + spotif[i].name);
				  	for (var j = 0; j < spotif[i].album.artists.length; j++) {
				  		console.log('Artist: ' + spotif[i].album.artists[j].name);
				  	}
				  	console.log('Preview link: ' + spotif[i].preview_url);
			    }
	        }
        });
    },
	movie: function(cmd){ 
			var movie = 'mr nobody';
		request('http://www.omdbapi.com/?t=' + movie + '&apikey=trilogy', function(error, response, body) {
			body = JSON.parse(body);
			if (!error && response.statusCode === 200) {
					console.log('Error occurred: ' + error);
				}
				else {
				var rImdb;
				var rTomatoes;
				if (body.Ratings[0]) {
					rImdb = body.Ratings[0].Value;
				} 
				if (body.Ratings[1]) {
					rTomatoes = body.Ratings[1].Value;
				}
				console.log('Title: ' + body.Title + '\nYear: ' + body.Year + 
					'\nCountry: ' + body.Country + ', ' + '\nIMDB Rating ('+ rImdb + ')' + 
					'\nRotten Tomatoes ('+ rTomatoes + ')');
				console.log(body.Language);
				console.log(body.Actors);
				console.log(body.Plot);
			}
		  
		});
	},
	random: function(cmd){  
		fs.readFile('random.txt', 'utf8', function(error, data) {
			console.log(data);
		});
	}
};
liri.init();


