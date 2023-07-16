var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express'});
  // added later after adding catalog in routes
  res.redirect("/catalog");
});

module.exports = router;
