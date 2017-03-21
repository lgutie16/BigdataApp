## Synopsis

This project was developed to put in practice telematics knowledge. 


The funcionality of this little program is the posibility of manage school courses 

Thi is the link of the project running in the *PAAS Heroku*

[School Courses Manager running on Heroku](https://whispering-harbor-65730.herokuapp.com/ "Running")

## A comentar para que corra sin bases de datos
Sin la base de datos el dashboard no estará disponible.. asi que la uica vista que se verá es la de login.

Los siguientes son los comentarios que se deben hacer sobre el código del archivo app.js

```javascript

var express 		  = require('express');
var logger 			  = require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var path 			    = require("path");
var cool 			    = require('cool-ascii-faces');
var pg 				    = require('pg');
var methodOverride  = require('method-override')
var login 			 = require('./routes/index');

//Empieza aquí
//var dashboard    = require('./routes/dashboard')
//var students 		 = require('./routes/student');
//var teachers 		 = require('./routes/teacher');
//var courses 		 = require('./routes/course');
//var classes 		 = require('./routes/class');
//var model 			 = require('./models')
//Finaliza aquí

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

//Empieza aquí
/*
app.use('/dashboard', dashboard);
app.use('/student', students);
app.use('/teacher', teachers);
app.use('/course', courses);
app.use('/class', classes);
*/
//Finaliza aquí


app.listen(process.env.PORT || 8888,function(){
    console.log("Escuchano por el puerto 3002")
    //Empieza aquí
    /*model.sequelize.sync().then(function(){
        console.log("sequelize")
    })*/
    //Finaliza aquí
})

```


## Code Example

```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
```

## Motivation

This project is was created with the motivation of learn about how to integrate diferent development envieronments and to improve web development skills.


## Installation

The installation of the project is really easy, making use of the package manager of node, npm.

To install this project and make it run on your terminal, follow the next steps:

1. Download the project folder or clone it using the following command: 

git clone https://github.com/lgutie16/P1Telematica.git

2. Go to the downloaded folder al run the command: 

npm install

Pay Attention: The above steps assumes that you already have *npm*, *node* and *github* install in your local envieronment.

If it is not the case peaple visit the next links and procee with the installation:

1. [Install npm - package manager](https://docs.npmjs.com/cli/install "NPM installation")

2. [Install node js ](https://nodejs.org/en/download/ "Node Installation")

3. [Install github](https://desktop.github.com/ "Github Installation")

## API Reference

The API to this project was developed using the next javascript technologies:

 	[SEQUELIZE ORM](http://docs.sequelizejs.com/en/v3/ "Sequelize")

 	[EXPRESS JS framework](http://expressjs.com/ "Express")

## Tests

The tests and some functionalities of the system was perform using chrome app *POSTMAN* 


![Postman envieronment](https://www.getpostman.com/img/v1/docs/source/2.png "Postman - To make tests and make interactions")




## License

A short snippet describing the license (MIT, Apache, etc.)

