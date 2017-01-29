module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Ideas 		= require('../models').Ideas

/* GET home page. */
router.get('/', function(req, res) {
	Ideas.listRecords().then(function(result){
		for (var i = result.length - 1; i >= 0; i--) {
			result[i].infoItems = JSON.parse(result[i].infoItems);
			result[i].grades 	= JSON.parse(result[i].grades);
		};
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Ideas.getById(req.body.idea.id).then(function(result){
		res.send(result)
	})
});


router.post('/', function(req, res) {
	var revInfo 	= JSON.stringify(req.body.idea.infoItems); 
	var revGrades	= JSON.stringify(req.body.idea.grades);
	req.body.idea.infoItems = revInfo;
	req.body.idea.grades 	= revGrades;
	Ideas.createRecord(req.body.idea).then(function(result){
		var info 		 = JSON.parse(result.infoItems);
		var grades 		 = JSON.parse(result.grades);
		result.infoItems = info;
		result.grades 	 = grades;
		res.send(result)
	})
});


router.put('/', function(req, res){
	var revInfo = JSON.stringify(req.body.idea.infoItems); 
	req.body.idea.infoItems = revInfo;
	Ideas.updateRecord(req.body.idea).then(function(result){
		var info 		 = JSON.parse(result.infoItems);
		var grades 		 = JSON.parse(result.grades);
		result.infoItems = info;
		result.grades 	 = grades;
		res.send(result)
	})
})

router.delete('/', function(req, res){
	Ideas.deleteRecord(req.body.idea).then(function(result){
		res.send(result)
	})
});

module.exports = router;






















