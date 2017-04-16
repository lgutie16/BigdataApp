var express 	= require('express');
var router  	= express.Router();
var Word 	= require('../models').Word

router.post('/', function(req, res) {
	Word.createRecord(req.body).then((result)=>{
		res.send(result)
	}) 
});

router.post('/find', function(req, res) {
	Word.listRecords(req.body).then((result)=>{
		data = {}
		data.result = result
		res.render('../app/views/', data);
	}) 
});

router.put('/', function(req, res) {
	Word.updateRecord(req.body).then((result)=>{
		res.send(result)
	}) 
});

router.delete('/', function(req, res) {
	Word.deleteRecord(req.body) 
});

module.exports = router;