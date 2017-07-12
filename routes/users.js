var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  res.send('what up user');
});

router.get('/cool', function(req,res,next){
  res.send('cool cat');
});

module.exports = router;