var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/auth', function(req, res, next) {
  res.render('auth');
});

module.exports = router;
