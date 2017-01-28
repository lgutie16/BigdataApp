module.exports = router;
var express = require('express');
var router = express.Router();
var Contest = require('../models').Contest

/* GET home page. */

router.get('/', function(req, res) {
<<<<<<< HEAD
	Contest.listRecords().then(function(result){
=======
	Contest.listContests().then(function(result){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
		res.send(result)
	})

});

router.post('/', function(req, res) {
<<<<<<< HEAD
	Contest.createRecord(req.body.contest).then(function(result){
=======
	Contest.crear(req.body.contest).then(function(result){
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
		res.send(result)
	})

});

module.exports = router;
