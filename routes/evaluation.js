var express		= require('express');
var router		= express.Router();
var Evaluation 	= require('../models').Evaluation

router.post('/', function(req, res){
	var info = req.body.evaluation;
	for (var i = 0; i < info.length; i++) {
		Evaluation.createRecord(req.body.evaluation[i]).then(function(result){
			res.send(result)
		})
	};	
})
	
module.exports = router;