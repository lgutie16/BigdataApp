var express 		   = require('express');
var logger 			   = require('morgan');
var cookieParser 	 = require('cookie-parser');
var bodyParser 		 = require('body-parser');
var path 			     = require("path");
var sql            = require('mssql')
var methodOverride = require('method-override')
var compression    = require('compression');
var parallel       = require('middleware-flow').parallel;
var helmet         = require("helmet");
var Client         = require('mariasql');

var index = require('./routes/index');
var documents = require('./routes/document');
var model = require('./models')

var app = express();
var env = process.env.NODE_ENV || 'development';

app.use(parallel(logger('dev'), bodyParser.json(), cookieParser(), bodyParser.urlencoded({
  extended: true
}), compression(), helmet(), methodOverride('_method'), express.static(__dirname + '/public')));
app.set('view engine', 'ejs');

app.use('/', index)
app.use('document', documents)

app.listen(process.env.PORT || 3001,function(){
    console.log("Escuchano por el puerto 3002")
    model.sequelize.sync().then(function(){
       console.log("sequelize")
    }).error(function(err) {
       console.log("Error: Something were wrong");
    });
})
