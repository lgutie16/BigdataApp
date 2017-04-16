var express 	= require('express');
var router  	= express.Router();
var Word 	= require('../models').Word

router.post('/', function(req, res) {
	Word.createRecord(req.body) 
});

router.post('/find', function(req, res) {
	Word.listRecords(req.body) 
});

router.put('/', function(req, res) {
	Word.updateRecord(req.body) 
});

router.delete('/', function(req, res) {
	Word.deleteRecord(req.body) 
});

module.exports = router;