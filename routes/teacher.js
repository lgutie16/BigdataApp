module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Teacher 	= require('../models').Teacher

/* GET home page. */

router.get('/', function(req, res) {
	Teacher.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Teacher.getById(req.body.teacher.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Teacher.createRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Teacher.updateRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	Teacher.deleteRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

module.exports = router;
