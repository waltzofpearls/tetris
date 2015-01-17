var express = require('express');
var config = require('config');
var github = require('../lib/github');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/projects', function(req, res) {
    var gh = new github();
    gh.getRepos();
    res.send('respond with a resource');
});

module.exports = router;
