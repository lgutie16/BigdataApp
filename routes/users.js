module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Users	 	= require('../models').Users

/* GET home page. */

router.get('/', function(req, res) {
	Users.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Users.getById(req.body.user.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Users.createRecord(req.body.user).then(function(result){
		res.send(result)
	})
});

router.put('/', function(req, res){
	Users.updateRecord(req.body.user).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	Users.deleteRecord(req.body.user).then(function(result){
		res.send(result)
	})
});

module.exports = router;
