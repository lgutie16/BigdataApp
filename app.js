var express 		  	= require('express');
var router          = express.Router();
var logger 			  	= require('morgan');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var path 			    = require("path");
var pg 				    = require('pg');
var methodOverride  	= require('method-override')
var login 				= require('./routes/index');
var dashboard    	= require('./routes/dashboard')
var students 		 	= require('./routes/student');
var teachers 		 	= require('./routes/teacher');
var courses 		 	= require('./routes/course');
var classes 		 	= require('./routes/class');
var model 			 	= require('./models')
var Client	= require('mariasql')
var ActiveDirectory = require('activedirectory');
var config = {
    url:             'ldap://10.131.137.180',
    base:            'dc=DIS, dc=local',
    bindDN:          'user1@DIS.local',
    bindCredentials: 'eafit.2017'
  }
var session = require('express-session');
var app 	= express();

var env = process.env.NODE_ENV || 'development';

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

function ensureAuthenticated(req, res, next) {
  if (authenticated)
    return next();
  else
    return res.redirect('/');
}

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


app.use('/', login)
app.use('/class', classes);
app.use('/dashboard', ensureAuthenticated, dashboard);


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
    authenticated = false;
    res.redirect('/');
  }
});


});

// now just use the mcache
/*
client.on('connect', function() {
    console.log('connected to mcache storage');
});

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

//Start tests to fetch data and put it in mcache
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});*/
//End use mcache

// development error handler
// will print stacktrace
app.listen(process.env.PORT || 3002,function(){
    console.log("Escuchano por el puerto 3002")


var c = new Client({
  host: '10.131.137.158',
  user: 'usertelematica',
  password: 'Wsx12cfT',
  db: 'telematicap2',
  port: 3306
});

c.query('SELECT * FROM users', function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.end();

    model.sequelize.sync().then(function(){
       console.log("sequelize")
    }).error(function(err) {
       console.log("Error: OOOH NOOOES");
    });
})


