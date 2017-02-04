var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
<<<<<<< HEAD
	data = { "nombre": {
		"mio": "Linda"
	}};
    res.render('../app/views/', data);
=======
  res.send('Estoy arriba');
>>>>>>> 390897ce08828f13654d0b8425c8c0a55d34315c
});

module.exports = router;
