var express = require('express');
<<<<<<< HEAD
var router 	= express.Router();
var Step 	= require('../models').Step
=======
var router = express.Router();
var Step = require('../models').Step
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
/* GET users listing. */
router.get('/', function(req, res){
	Step.listRecords().then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
<<<<<<< HEAD
	let properties = req.body.step;
    Step.createRecord(properties).then(function(result){
    	res.send(result)		
=======
  Step.createRecord(req.body.step).then(function(result){
		res.send(result)
>>>>>>> d3489b4339726904bcf4c849df53a03ce81aa19e
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


