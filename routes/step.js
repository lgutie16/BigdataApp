var express = require('express');
var router 	= express.Router();
var Step 	= require('../models').Step

/* GET users listing. */
router.get('/', function(req, res){
	Step.listRecords().then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	let properties = req.body.step;
    Step.createRecord(properties).then(function(result){
    	res.send(result)		
	})
});

router.delete('/', function(req, res){
	Step.deleteRecord(req.body.step).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Step.updateRecord(req.body.step).then(function(result){
		res.send(result)
	})
})

module.exports = router;


