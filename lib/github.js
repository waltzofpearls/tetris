
var GithubApi = require('github');
var config = require('../config/config');
var async = require('async');
var https = require('https');
var util = require('util');
var Q = require('q');

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
    var deferred = Q.defer();

    this.github.repos.getAll({
        type: 'owner',
        sort: 'pushed',
        direction: 'desc'
    }, function(err, res) {
        if (err) {
            deferred.reject(err);
            return;
        }

        async.map(res, function(_item, _callback) {
            var _badge = util.format(
                'https://api.travis-ci.org/%s.svg?branch=%s',
                _item.full_name,
                _item.default_branch
            );

            var _req = https.get(_badge, function(_res) {
                _res.setEncoding('utf8');
                _res.on('data', function(_chunk) {});
                _res.on('end', function() {
                    _callback(null, {
                        name: _item.name,
                        description: _item.description,
                        fullname: _item.full_name,
                        branch: _item.default_branch,
                        url: _item.html_url,
                        language: _item.language,
                        forks: _item.forks_count,
                        stars: _item.stargazers_count,
                        watches: _item.subscribers_count,
                        badge: _res.statusCode == 200 ? _badge : ""
                    });
                });
            });

            _req.end();
        }, function(_err, _results) {
            if (_err) {
                deferred.reject(_err);
                return;
            }

            deferred.resolve(_results);
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
