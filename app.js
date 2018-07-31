var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tweetController = require('./controllers/tweetController.js');
//require('dotenv').config();


//set up template engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//static files
app.use(express.static(__dirname + '/public')); // to get the css file, you would now only need ./assets/styles.css, and not the public also
// fire the indexpage
// fire the
//fire controllers
tweetController(app);

//listen to port
app.listen(8080);
console.log('You are listening to port 8080');
