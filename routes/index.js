var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Tetris' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'Tetris' });
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Tetris' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Tetris' });
});

module.exports = router;
