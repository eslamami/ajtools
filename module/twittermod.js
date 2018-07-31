// get the tweet (extended) in twdata
var Twitter = require('twitter-node-client').Twitter;

var catchtwit = function (Id) {
  	//Callback functions
  var error = function (err, response, body) {
      	console.log('ERROR [%s]', err);
  	};

  var success = function (data) {
var tweet  = JSON.parse(data) ;
module.exports.twdata = tweet ;

  };

  	//Get this data from your twitter apps dashboard
  	var config = require('./config') ;

    var twitter = new Twitter(config);

  	//twitter.getTweet({ id: req.body.name }, error, successy);
twitter.getTweet({ id: Id, tweet_mode:'extended' }, error, success) ;


}
module.exports.catchtwit = catchtwit ;
