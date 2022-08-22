var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/loginForm');
});

router.get('/registerForm', (req, res, next) => {
  res.render('../views/registerForm');
});

module.exports = router;
