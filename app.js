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
var model 			    = require('./models')
var app                 = express();

var env = process.env.NODE_ENV || 'development';

app.use(parallel(logger('dev'), bodyParser.json(), cookieParser(), bodyParser.urlencoded({
  extended: true
}), compression(), helmet(), methodOverride('_method'), express.static(__dirname + '/public')));

app.set('view engine', 'ejs');

app.use('/', login);
app.use('/dashboard', dashboard);
app.use('/student', students);
app.use('/teacher', teachers);
app.use('/course', courses);
app.use('/class', classes);



app.listen(process.env.PORT || 3002,function(){
  console.log("Escuchano por el puerto 3002")
  model.sequelize.sync().then(function(){
        console.log("sequelize")
  }).error(function(err) {
  	console.log("Error: OOOH NOOOES");
  });
})


