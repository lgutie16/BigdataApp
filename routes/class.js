module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var SchoolClass = require('../models').SchoolClass

/* GET home page. */

router.get('/', function(req, res) {
	SchoolClass.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	SchoolClass.getById(req.body.schoolclass.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	SchoolClass.createRecord(req.body.schoolclass).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	SchoolClass.updateRecord(req.body.schoolclass).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	SchoolClass.deleteRecord(req.body.schoolclass).then(function(result){
		res.send(result)
	})
});

module.exports = router;
