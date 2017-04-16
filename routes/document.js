var express 	= require('express');
var router  	= express.Router();
var Document 	= require('../models').Document

router.post('/', function(req, res) {
	Document.createRecord(req.body) 
});

router.post('/find', function(req, res) {
	Document.listRecords(req.body) 
});

router.put('/', function(req, res) {
	Document.updateRecord(req.body) 
});

router.delete('/', function(req, res) {
	Document.deleteRecord(req.body) 
});

module.exports = router;