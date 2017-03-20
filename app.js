var express 		  = require('express');
var logger 			  = require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var path 			    = require("path");
var sql                 = require('mssql')
var pg 				    = require('pg');
var methodOverride  = require('method-override')
var login 			 = require('./routes/index');
var dashboard    = require('./routes/dashboard')
var students 		 = require('./routes/student');
var teachers 		 = require('./routes/teacher');
var courses 		 = require('./routes/course');
var classes 		 = require('./routes/class');
var model 			 = require('./models')
var Client = require('mariasql');

var app = express();

var env = process.env.NODE_ENV || 'development';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use(methodOverride('_method'))

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', login);
app.use('/dashboard', dashboard);
app.use('/student', students);
app.use('/teacher', teachers);
app.use('/course', courses);
app.use('/class', classes);

/// error handlers

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

//    model.sequelize.sync().then(function(){
  //      console.log("sequelize")
    //}).error(function(err) {
    //	console.log("Error: OOOH NOOOES");
   // });
})


