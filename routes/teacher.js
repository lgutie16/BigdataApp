module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Teachers 	= require('../models').Teachers

/* GET home page. */

router.get('/', function(req, res) {
	Teachers.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Teachers.getById(req.body.teacher.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Teachers.createRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Teachers.updateRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	Teachers.deleteRecord(req.body.teacher).then(function(result){
		res.send(result)
	})
});

module.exports = router;
