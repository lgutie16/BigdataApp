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
			info.then(function(info){
				data = {}        	
	            data.requestTime = diff;	     
				data.courses = info		
				console.dir(info)
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

router.get('/', function(req, res) {
	fetchCourses(getResponse(res))
});

module.exports = router;
