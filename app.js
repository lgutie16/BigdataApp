var express 		       	 = require('express');
var logger 			       	 = require('morgan');
var cookieParser 	     	 = require('cookie-parser');
var bodyParser 		     	 = require('body-parser');
var path 			         = require("path");
var sql                 	 = require('mssql')
var pg 				         = require('pg');
var methodOverride      = require('method-override')
var compression         = require("compression");
var parallel            = require('middleware-flow').parallel;
var helmet              = require("helmet");
var Client              = require('mariasql');
var login               = require('./routes/index');
var dashboard           = require('./routes/dashboard')
var students            = require('./routes/student');
var teachers            = require('./routes/teacher');
var courses             = require('./routes/course');
var classes             = require('./routes/class'); 
var model 			 	= require('./models')
var ActiveDirectory 	= require('activedirectory');
var config = {
    url:             'ldap://10.131.137.180',
    base:            'dc=DIS, dc=local',
    bindDN:          'user1@DIS.local',
    bindCredentials: 'eafit.2017'
  }
var session = require('express-session');
var app 	= express();

var env = process.env.NODE_ENV || 'development';

app.use(parallel(logger('dev'), bodyParser.json(), cookieParser(), bodyParser.urlencoded({
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
}), compression(), helmet(), methodOverride('_method'), express.static(__dirname + '/public')));

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


app.listen(process.env.PORT || 3002,function(){
    console.log("Escuchano por el puerto 3002")
    model.sequelize.sync().then(function(){
       console.log("sequelize")
    }).error(function(err) {
       console.log("Error: OOOH NOOOES");
    });
})

