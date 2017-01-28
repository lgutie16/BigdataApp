module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Criterion 	= require('../models').Criterion
var debug 		= require('debug')('nodeapi');
/* GET home page. */

router.get('/', function(req, res) {
	Criterion.listRecords().then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	debug("variable values", req.body)
	Criterion.createCriterion(req.body.criterion).then(function(result){
		res.send(result)
	})
});

router.get('/', function(req, res) {
	Criterion.deleteRecord(req.body.criterion).then(function(result){
		res.send(result)
	})

});

module.exports = router;
