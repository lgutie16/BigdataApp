var express 	= require('express');
var router  	= express.Router();
var Course 		= require('../models').Course
var Students 	= require('../models').Students
var Teachers	= require('../models').Teachers
var Classes		= require('../models').SchoolClass
/* GET home page. */
router.get('/', function(req, res) {
	data = {}
	Course.listRecords().then(function(courses){
		data.courses = courses;
		Teachers.listRecords().then(function(teachers){	
			data.teachers = teachers;
			Students.listRecords().then(function(students){	
				data.students = students;	
				 Classes.listRecords().then(function(classes){	
				 	 data.classes = classes;			 
					 //data = JSON.stringify(data);
					 res.render('../app/views/', data);
				}) 
			}) 	
		}) 
	})   
});

module.exports = router;
