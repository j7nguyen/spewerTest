console.log("Your test bot is running!");
var Twit = require('twit');
var express = require('express');
var spewer = require('./spewer.js');
var sentence = spewer.spew('JJ JJ NNS VBP RB');
console.log(sentence);
var app = express();
app.get('/', function (req, res) {
  res.send("Hello friends! See what we're up to at <a href='https://twitter.com/DrizzyAI'>Drizzy Drake's Twitter</a>.");
});
var port = process.env.PORT || 3000;
app.listen(port);

var T = new Twit(require('./config.js'));

function simpleTweet(message) {
  T.post('statuses/update', {status: message},
  function(err, data, response) {
  console.log(data);
  });
}
