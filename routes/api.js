'use strict';

var config = require('config');
var express = require('express');
var LibGithub = require('../lib/github');

var router = express.Router();
var github = new LibGithub();

router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/projects', function(req, res) {
    github.getRepos()
        .then(function(data) {
            res.send(data);
        })
        .fail(function(err) {
            res.send(err);
        });
});

router.get('/contributions', function(req, res) {
    github.getContributions()
        .then(function(data) {
            res.send(data);
        });
});

module.exports = router;
