'use strict';

var GithubApi = require('github');
var config = require('../config/config');
var async = require('async');
var https = require('https');
var util = require('util');
var q = require('q');

exports = module.exports = github;

function github() {
    this.github = new GithubApi({
        // --- [required] ---
        version: '3.0.0'
        // --- [optional] ---
        // debug: true,
        // protocol: 'https',
        // host: 'github.my-GHE-enabled-company.com',
        // pathPrefix: '/api/v3', // for some GHEs
        // timeout: 5000,
        // headers: {
        //     'user-agent': 'My-Cool-GitHub-App', // GitHub is happy with a unique user agent
        // }
    });
    if (!config.github || !config.github.token) {
        throw new Error('Github token is not yet defined in config file.');
    }
    this.github.authenticate({
        type: 'oauth',
        token: config.github.token
    });
}

github.prototype.getRepos = function() {
    var deferred = q.defer();

    this.github.repos.getAll({
        type: 'owner',
        sort: 'pushed',
        direction: 'desc'
    }, function(githubErr, githubRes) {
        if (githubErr) {
            deferred.reject(githubErr);
            return;
        }

        async.map(githubRes, function(item, callback) {
            var badge = util.format(
                'https://api.travis-ci.org/%s.svg?branch=%s',
                item.full_name,
                item.default_branch
            );

            var httpsReq = https.get(badge, function(httpsRes) {
                httpsRes.setEncoding('utf8');
                httpsRes.on('data', function(_chunk) {});
                httpsRes.on('end', function() {
                    callback(null, {
                        name: item.name,
                        description: item.description,
                        fullname: item.full_name,
                        branch: item.default_branch,
                        url: item.html_url,
                        language: item.language,
                        forks: item.forks_count,
                        stars: item.stargazers_count,
                        watches: item.subscribers_count,
                        badge: httpsRes.statusCode == 200 ? badge : ""
                    });
                });
            });

            httpsReq.end();
        }, function(asyncErr, asyncData) {
            if (asyncErr) {
                deferred.reject(asyncErr);
                return;
            }

            deferred.resolve(asyncData);
        });
    });

    return deferred.promise;
}

github.prototype.getActivities = function() {
    this.github.repos.getFromUserPublic({
        user: 'waltzofpearls'
    }, function(err, res) {
        //
    });
}

github.prototype.getContributions = function() {
    var data = '';
    var deferred = q.defer();
    var url = util.format(
        'https://github.com/users/%s/contributions',
        config.github.username
    );

    var req = https.get(url, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            deferred.resolve(data);
        });
    });

    req.end();

    return deferred.promise;
}
