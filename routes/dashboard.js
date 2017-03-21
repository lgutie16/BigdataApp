//https://github.com/BryanDonovan/node-cache-manager
var express 	= require('express');
var router  	= express.Router();
var Course 		= require('../models').Course
var Students 	= require('../models').Students
var Teachers	= require('../models').Teachers
var Classes		= require('../models').SchoolClass

var moment = require('moment');
var cacheManager = require('cache-manager');
var memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10/*seconds*/});
/* GET home page. */

function getResponse(res){
	return function respond(err, info) {
        var startTime = moment(res.req._startTime);
        var diff = moment().diff(startTime, 'ms');

        if (err) {
            err.status = 500;
            res.render('error', {error: err});
        } else {
			students.then(function(info){
				data = {}        	
	            data.requestTime = diff;
	            data.students = {}
	            data.teachers = {}
				data.courses = info
				data.classes = {}			
				console.dir(data)
				res.render('../app/views/', data);
			})
			
        }
    };
}

function fetchCourses(cb) {
    var cacheKey = 'courses';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching Courses from slow database");
 		Course.listRecords(cacheCb) 
    }, cb);
}

function fetchTeachers(cb) {
    var cacheKey = 'teachers';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching teachers_ from slow database");
        Teachers.listRecords(cacheCb)
    }, cb);
}

function fetchStudents(cb) {
    var cacheKey = 'students';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching students_ from slow database");
        Students.listRecords(cacheCb)
    }, cb);
}

function fetchClasses(cb) {
    var cacheKey = 'classes';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching classes_ from slow database");
        Classes.listRecords(cacheCb)
    }, cb);
}

router.get('/', function(req, res) {
	fetchCourses(getResponse(res))

		
			
	

	//data.teachers 	= fetchTeachers(/*params, */getResponse(res));
	//fetchStudents(/*params, */getResponse(res));
	//data.classes 	= fetchClasses(/*params, */getResponse(res));
	/*data.students = {}*/
	
	//res.render('../app/views/', data);

	/*Course.listRecords().then(function(courses){
		data.courses = courses;
		Teachers.listRecords().then(function(teachers){	
			data.teachers = teachers;
			Students.listRecords().then(function(students){	
				data.students = students;	
				 Classes.listRecords().then(function(classes){	
				 	 data.classes = classes;	
					 res.render('../app/views/', data);
				}) 
			}) 	
		}) 
	}) */
	/*
	var cacheKey = 'foo-bar:' + JSON.stringify(req.query);
    var ttl = 10;
    memoryCache.wrap(cacheKey, function(cacheCallback) {
        Course.listRecords(cacheCallback);
    }, {ttl: ttl}, function(err, result) {
        console.log(JSON.stringify(result))
        data.students = {}
        data.teachers = {}
		data.courses = result
		data.classes = {}			
		console.dir(data)
        res.render('../app/views/', data);
    });*/
});

module.exports = router;
