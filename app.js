var express 		  	= require('express');
var logger 			  	= require('morgan');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var path 			    = require("path");
var pg 				    = require('pg');
var methodOverride  	= require('method-override')
var login 				= require('./routes/index');
var dashboard    		= require('./routes/dashboard')
var students 		 	= require('./routes/student');
var teachers 		 	= require('./routes/teacher');
var courses 		 	= require('./routes/course');
var classes 		 	= require('./routes/class');
var model 			 	= require('./models')

//Work with client caché
var cache  = require('memory-cache');
var redis  = require("redis"),
    client = redis.createClient();

var app 	= express();
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

// now just use the cache
client.on('connect', function() {
    console.log('connected to cache storage');
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

//Start tests to fetch data and put it in cache
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});
//End use cache




app.listen(process.env.PORT || 8888,function(){
    console.log("Escuchano por el puerto 8888")
    model.sequelize.sync().then(function(){
        console.log("sequelize")
    })
})


