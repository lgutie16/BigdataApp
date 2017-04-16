var express 	= require('express');
var router  	= express.Router();
var Document 	= require('../models').Document

router.post('/find', function(req, res) {
	console.log(req.body)
	Document.listRecords(req.body) 
});

module.exports = router;