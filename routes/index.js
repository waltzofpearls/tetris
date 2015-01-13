var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Tetris' });
});

router.get('/about', function(req, res) {
  res.redirect('/#about');
});

router.get('/projects', function(req, res) {
  res.redirect('/#projects');
});

router.get('/resume', function(req, res) {
  res.redirect('/#resume');
});

module.exports = router;
