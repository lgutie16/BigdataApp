var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	data = { "nombre": {
		"mio": "Linda"
	}};
    res.render('../app/views/', data);
});

module.exports = router;
