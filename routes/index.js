var express 	= require('express');
var router  	= express.Router();
var Students 	= require('../models').Students
var Teachers	= require('../models').Teachers

/* GET home page. */
router.get('/', function(req, res) {
	data = {}	
	Teachers.listRecords().then(function(teachers){	
		data.teachers = teachers;
		Students.listRecords().then(function(students){	
			data.students = students;				 
			res.render('../app/views/login', data);				
		}) 	
	})	  
});

module.exports = router;
