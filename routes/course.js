module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Course 	= require('../models').Course

/* GET home page. */

router.get('/', function(req, res) {
	Course.listRecords().then(function(result){
		result = JSON.stringify(result);
		res.direct("/")
	})
});

router.propfind('/', function(req, res) {
	Course.getById(req.body.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Course.createRecord(req.body).then(function(result){
		res.redirect('/')
	})
});

router.put('/', function(req, res){
	Course.updateRecord(req.body).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	console.log(req.param)
	Course.deleteRecord(req.param).then(function(result){
		res.direct("/")
	})
});

module.exports = router;
