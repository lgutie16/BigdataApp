module.exports = router;
var express = require('express');
var router = express.Router();
var Contest = require('../models').Contest

/* GET home page. */

router.get('/', function(req, res) {
	Contest.listRecords().then(function(result){
		res.send(result)
	})

});

router.post('/', function(req, res) {
	Contest.createRecord(req.body.contest).then(function(result){
		res.send(result)
	})

});

module.exports = router;
