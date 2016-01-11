var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
    res.render('index', {
        meta: {
            title: 'Rollie Ma - Polyglot Developer from Vancouver, BC',
            description: 'Hi, I\'m Rollie Ma. A Linux lover and LEGO bricks enthusiast. ' +
                'A polyglot developer obsessed with Golang, JavaScript, Python and PHP. ' +
                'A receptive learner captivated by mobile development, NoSQL and data mining. ' +
                'An amateur explorer interested in information aggregation and artificial intelligence fields.',
            url: 'http://rolli3.net',
            image: 'http://rolli3.net/images/logos/logo-120x120.png'
        }
    });
});

// GET about|projects|resume pages
router.get('*', function(req, res) {
    res.redirect(req.url.replace(/^\/?/, '/#'));
});

module.exports = router;
