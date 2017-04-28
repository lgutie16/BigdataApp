var express 	= require('express');
var router  	= express.Router();

router.get('/', function(req, res) {
	data = {}
	data.result = {}
	res.render('../app/views/', data);	
});

module.exports = router;
