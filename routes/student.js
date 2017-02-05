module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Students 	= require('../models').Students

/* GET home page. */

router.get('/', function(req, res) {
	Students.listRecords().then(function(result){
		res.send(result)
	})
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
