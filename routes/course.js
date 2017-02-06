module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Course 		= require('../models').Course

/* GET home page. */

router.get('/', function(req, res) {
	Course.listRecords().then(function(result){
		result = JSON.stringify(result);
		res.redirect("/")
	})
});

router.propfind('/', function(req, res) {
	Course.getById(req.body.id).then(function(result){
		res.render("../app/views/editContest.ejs",result)
	})
});

router.post('/', function(req, res) {
	Course.createRecord(req.body).then(function(result){
		res.redirect('/')
	})
});

router.put('/', function(req, res){
	Course.updateRecord(req.body).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	Course.deleteRecord(req.body.course).then(function(result){
		res.redirect('/')
	})
});

module.exports = router;
