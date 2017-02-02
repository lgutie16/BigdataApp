module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Student 	= require('../models').Student

/* GET home page. */

router.get('/', function(req, res) {
	Student.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Student.getById(req.body.student.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Student.createRecord(req.body.student).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Student.updateRecord(req.body.student).then(function(result){
		res.send(result)
	})
});



router.delete('/', function(req, res){
	Student.deleteRecord(req.body.student).then(function(result){
		res.send(result)
	})
});

module.exports = router;
