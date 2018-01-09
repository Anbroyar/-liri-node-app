# liri-node-app
First of all make sure that you have Node.Js installed.
Run npm install to get all of required packages.
You will need to provide your own .env file with Twitter and Spotify API keys.
Spotify API keys (replace with your key/secret)
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
Twitter API keys (replace with your keys/secrets)
TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret


LIRI is a command line app. It takes commands input from command line and performs it.
Commands:

my-tweets
Cmd: node liri.js my-tweets
Description: LIRI will retrieve and display recent Tweets(user @Angelin84511135).

spotify-this-song
Cmd: node liri.js spotify-this-song (song name)
Description: LIRI will retrieve and display information from Spotify about the song name provided. If no song name is provided, you will get info about "The Sign".

movie-this
Cmd: node liri.js movie-this (movie title)
Description: LIRI will retrieve and display information from OMDB about the movie title provided. If no movie title is provided, you will get info about the movie "Mr. Nobody".

do-what-it-says
Cmd: node liri.js do-what-it-says
Description: LIRI will retrieve instructions from random.txt in the folder.
