var express 	= require('express');
var router  	= express.Router();
var Document 	= require('../models').Document

router.post('/', function(req, res) {
	Document.createRecord(req.body).then((result)=>{
		res.send(result)
	})
});

router.post('/find', function(req, res) {
	Document.listRecords(req.body).then((result)=>{
		res.send(result)
	})
});

router.put('/', function(req, res) {
	Document.updateRecord(req.body).then((result)=>{
		res.send(result)
	}) 
});

router.delete('/', function(req, res) {
	Document.deleteRecord(req.body) 
});

module.exports = router;