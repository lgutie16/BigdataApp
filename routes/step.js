var express = require('express');
var router = express.Router();
var Step = require('../models').Step
/* GET users listing. */
router.post('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
