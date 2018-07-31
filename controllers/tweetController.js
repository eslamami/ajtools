// control the routing for the app get tweet from mtwitter mod
var tweetmod = require('../module/twittermod.js');
module.exports = function(app){
    // initialize


    app.get('/', function(req, res){

            res.render('index');
    });
// get the data from the view
    app.post('/ajtweet', function(req, res){
      var tid = req.body.TwtId ;
          tid = tid.split('/status/');
          tweetmod.catchtwit(tid[1]);

      setTimeout(function(){ res.render('tweet',  {twt : (tweetmod.twdata)});} ,2000);
      //console.log(twt);
    });
// handling any other input url
    app.get('*', function(req, res){
      res.render('404');
    });
}
