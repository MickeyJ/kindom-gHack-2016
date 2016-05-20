var express = require('express');
var router = express.Router();
var players = require('../assets/playerData.json');

var getPlayer = (id) =>(
  players.find(x => x.id === id)
)

router.get('/', function(req, res, next) {
  res.render('home', {
    player: getPlayer(1)
  });
});

router.get('/auth', function(req, res, next) {
  res.render('auth');
});

module.exports = router;
