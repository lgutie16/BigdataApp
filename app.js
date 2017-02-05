var express 		= require('express');
var logger 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var path 			= require("path");
var cool 			= require('cool-ascii-faces');
var pg 				= require('pg');
var routes 			= require('./routes/index');
var students 		= require('./routes/student');
var teachers 		= require('./routes/teacher');
var courses 		= require('./routes/course');
var classes 		= require('./routes/class');
var model 			= require('./models')


var app = express();

var env = process.env.NODE_ENV || 'development';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use(express.static(__dirname + '/app'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/student', students);
app.use('/teacher', teachers);
app.use('/course', courses);
app.use('/class', classes);

/// error handlers

// development error handler
// will print stacktrace

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
  model.sequelize.sync().then(function(){
        console.log("sequelize")
  })
});




