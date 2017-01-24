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
		res.send(result)
	})
});

router.get('/', function(req, res) {
	Criterion.deleteCriterion(req.body.criterion).then(function(result){
		res.send(result)
	})

});

module.exports = router;
