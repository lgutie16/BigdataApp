var express 		  	= require('express');
var logger 			  	= require('morgan');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var path 			    = require("path");
var cool 			    = require('cool-ascii-faces');
var pg 				    = require('pg');
var methodOverride  	= require('method-override')
var cache 				= require('memory-cache');
var login 				= require('./routes/index');
var dashboard    		= require('./routes/dashboard')
var students 		 	= require('./routes/student');
var teachers 		 	= require('./routes/teacher');
var courses 		 	= require('./routes/course');
var classes 		 	= require('./routes/class');
var model 			 	= require('./models')
var ActiveDirectory = require('activedirectory');
var config = {
    url:             'ldap://10.131.137.180',
    base:            'dc=DIS, dc=local',
    bindDN:          'user1@DIS.local',
    bindCredentials: 'eafit.2017'
  }
var session = require('express-session');

var redis  = require("redis"),
    client = redis.createClient();



var app 	= express();

client.on("error", function (err) {
    console.log("Error " + err);
});
 

var env = process.env.NODE_ENV || 'development';

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use(methodOverride('_method'))

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

var authenticated = false;

app.use('/', login);
app.use('/class', classes);


//Login with active directory
app.post('/login',
  function(req,res){
    var ad = new ActiveDirectory(config);
    sess = req.session;
    sess.username = req.body.username;
    console.log(sess.username);
    ad.authenticate(req.body.username, req.body.password, function(err, auth){
      if(err){
        console.log("Error");
      }
      if(auth){
        console.log("Authenticated");
        app.use('/dashboard', dashboard);
        app.use('/student', students);
        app.use('/teacher', teachers);
        app.use('/course', courses);
        authenticated = true;
        res.redirect('/dashboard');
      }else{
        console.log("Authentication failed");
      }
    })
  }
);

app.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});

});

// now just use the cache
client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
//End use cache

//Start tests to fetch data and put it in cache


app.listen(process.env.PORT || 8888,function(){
    console.log("Escuchano por el puerto 8888")
    model.sequelize.sync().then(function(){
        console.log("sequelize")
    })
})


