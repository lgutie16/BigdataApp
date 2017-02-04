<<<<<<< HEAD
var express 		= require('express');
var logger 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var path 			= require("path");
var routes 			= require('./routes/index');
var students 		= require('./routes/student');
var teachers 		= require('./routes/teacher');
var courses 		= require('./routes/course');
var classes 		= require('./routes/class');
var model 			= require('./models')


var app = express();
=======
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

>>>>>>> 390897ce08828f13654d0b8425c8c0a55d34315c
var env = process.env.NODE_ENV || 'development';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/student', students);
app.use('/teacher', teachers);
app.use('/course', courses);
app.use('/class', classes);


=======

app.use('/', routes);
app.use('/users', users);
>>>>>>> 390897ce08828f13654d0b8425c8c0a55d34315c

/// error handlers

// development error handler
// will print stacktrace

<<<<<<< HEAD

app.listen(3002,function(){
    console.log("Escuchano por el puerto 3002")
    model.sequelize.sync().then(function(){
        console.log("sequelize")
    })
=======
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

app.listen(3002,function(){
    console.log("Escuchano por el puerto 3002")
>>>>>>> 390897ce08828f13654d0b8425c8c0a55d34315c
})


