var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
    res.render('index', { title: 'Tetris' });
});

// GET about|projects|resume pages
router.get('*', function(req, res) {
    res.redirect(req.url.replace(/^\/?/, '/#'));
});

module.exports = router;
