var express 	= require('express');
var router  	= express.Router();
var Students 	= require('../models').Students
var Teachers	= require('../models').Teachers

var mcache  = require('memory-cache');
var redis  = require("redis"),
    client = redis.createClient();

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

/* GET home page. */
router.get('/', cache(10), function(req, res) {
	setTimeout(() => {
    	res.render('../app/views/login', { title: 'Hey', message: 'Hello there', date: new Date()})
  	}, 2000) //setTimeout was used to simulate a slow processing request
	/*
	data = {}	
	Teachers.listRecords().then(function(teachers){	
		data.teachers = teachers;
		Students.listRecords().then(function(students){	
			data.students = students;				 
			res.render('../app/views/login', data);				
		}) 	
	})	*/  
});



module.exports = router;
