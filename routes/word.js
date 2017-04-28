var express 	= require('express');
var router  	= express.Router();
var Lgutie16 	= require('../models').Lgutie16

router.post('/', function(req, res) {
	Lgutie16.createRecord(req.body).then((result)=>{
		res.send(result)
	}) 
});

router.post('/find', function(req, res) {
	Lgutie16.listRecords(req.body).then((result)=>{
		data = {}
		data.result = result
		res.render('../app/views/', data);
		//res.send(data);
	}) 
});

router.put('/', function(req, res) {
	Lgutie16.updateRecord(req.body).then((result)=>{
		res.send(result)
	}) 
});

router.delete('/', function(req, res) {
	Lgutie16.deleteRecord(req.body) 
});

module.exports = router;