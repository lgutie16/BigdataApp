<<<<<<< HEAD
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
=======
module.exports = router;
var express = require('express');
var router = express.Router();
var Criterion = require('../models').Criterion

/* GET home page. */

router.get('/', function(req, res) {
	Criterion.listCriterions().then(function(result){
		res.send(result)
	})

});

router.post('/', function(req, res) {
	Criterion.crear(req.body.criterion).then(function(result){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
		res.send(result)
	})
});

router.get('/', function(req, res) {
<<<<<<< HEAD
	Criterion.deleteRecord(req.body.criterion).then(function(result){
=======
	Criterion.deleteCriterion(req.body.criterion).then(function(result){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
		res.send(result)
	})

});

module.exports = router;
