module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Students 	= require('../models').Students
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
			info.then(function(info){
				data = {}        	
	            data.requestTime = diff;	     
				data.students = info				
				res.render('../app/views/students', data);
			})			
        }
    };
}

function getResponseClasses(res){
	return function respond(err, info) {
        var startTime = moment(res.req._startTime);
        var diff = moment().diff(startTime, 'ms');
        if (err) {
            err.status = 500;
            res.render('error', {error: err});
        } else {
			info.then(function(info){
				data = {}        	
	            data.requestTime = diff;	     
				data.classes = info				
				res.render('../app/views/addStudent', data);
			})			
        }
    };
}

function fetchStudents(cb) {
    var cacheKey = 'courses';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching Courses from slow database");
 		Students.listRecords(cacheCb) 
    }, cb);
}

function fetchClasses(cb) {
    var cacheKey = 'courses';
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching Courses from slow database");
 		Classes.listRecords(cacheCb) 
    }, cb);
}

router.get('/', function(req, res) {
	fetchStudents(getResponse(res))
});

router.get('/addstudent', function(req, res) {
	fetchClasses(getResponseClasses(res))
});

router.propfind('/', function(req, res) {
	Students.getById(req.body.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Students.createRecord(req.body).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Students.updateRecord(req.body.student).then(function(result){
		res.send(result)
	})
});



router.delete('/', function(req, res){
	Students.deleteRecord(req.body).then(function(result){
		res.send(result)
	})
});

module.exports = router;
