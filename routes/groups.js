module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Groups	 	= require('../models').Groups

/* GET home page. */

router.get('/', function(req, res) {
	Groups.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Groups.getById(req.body.group.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	req.body.group.members = JSON.stringify(req.body.group.members);
	Groups.createRecord(req.body.group).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	req.body.group.members = JSON.stringify(req.body.group.members);
	Groups.updateRecord(req.body.group).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	Groups.deleteRecord(req.body.group).then(function(result){
		res.send(result)
	})
});

module.exports = router;
