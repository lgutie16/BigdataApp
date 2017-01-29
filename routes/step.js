var express = require('express');
var router 	= express.Router();
var Step 	= require('../models').Step

/* GET users listing. */
router.get('/', function(req, res){
	Step.listRecords().then(function(result){
		for (var i = result.length - 1; i >= 0; i--) {
			result[i].InfoItems  = JSON.parse(result[i].InfoItems);
			result[i].criterions = JSON.parse(result[i].criterions);
		};
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Step.getById(req.body.step.id).then(function(result){
		result.InfoItems  = JSON.parse(result.InfoItems);
		result.criterions = JSON.parse(result.criterions);
		res.send(result)
	})
});

router.post('/', function(req, res) {
	req.body.step.InfoItems		= JSON.stringify(req.body.step.InfoItems); 
	req.body.step.criterions	= JSON.stringify(req.body.step.criterions);
    Step.createRecord(req.body.step).then(function(result){
    	var info 		 = JSON.parse(result.InfoItems);
		var criterions 	 = JSON.parse(result.criterions);
		result.InfoItems 	= info;
		result.criterions 	= criterions;
    	res.send(result)		
	})
});

router.put('/', function(req, res){
	var properties 			= req.body.step;
	properties.InfoItems	= JSON.stringify(req.body.step.InfoItems); 
	properties.criterions	= JSON.stringify(req.body.step.criterions);
	Step.updateRecord(properties).then(function(result){
		result.InfoItems	= JSON.parse(result.InfoItems);
		result.criterions	= JSON.parse(result.criterions);
		res.send(result)
	})
})

router.delete('/', function(req, res){
	Step.deleteRecord(req.body.step).then(function(result){
		res.send(result)
	})
});

module.exports = router;


