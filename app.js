var express 		= require('express');
var logger 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var routes 			= require('./routes/index');
var users 			= require('./routes/user');
var steps 			= require('./routes/step');
var contests 		= require('./routes/contest');
var criterions 		= require('./routes/criterion');
var evaluations 	= require('./routes/evaluation')
var model 			= require('./models')


var app = express();

var env = process.env.NODE_ENV || 'development';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);
app.use('/contest', contests);
app.use('/step', steps);
app.use('/criterion', criterions);
app.use('/evaluation', evaluations)



/// error handlers

// development error handler
// will print stacktrace


app.listen(3002,function(){
    console.log("Escuchano por el puerto 3002")
    model.sequelize.sync().then(function(){
        console.log("sequelize")
    })
})


