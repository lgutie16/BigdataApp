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
	Students.getById(req.body.student.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	student = {}
	student.name = req.body.name
	student.docNumber = req.body.docNumber
	Students.createRecord(student).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Students.updateRecord(req.body.student).then(function(result){
		res.send(result)
	})
});



router.delete('/', function(req, res){
	Students.deleteRecord(req.body.student).then(function(result){
		res.send(result)
	})
});

module.exports = router;
