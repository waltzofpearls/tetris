
var GithubApi = require('github');
var config = require('config');
var async = require('async');
var Q = require('q');

exports = module.exports = github;

function github() {
    this.github = new GithubApi({
        // required
        version: '3.0.0'
        // optional
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
        } else {
            async.map(res, function(_item, _callback) {
                _callback(null, {
                    name: _item.name,
                    description: _item.description,
                    fullname: _item.full_name,
                    branch: _item.default_branch,
                    url: _item.html_url,
                    language: _item.language,
                    forks: _item.forks_count, // fork
                    stars: _item.stargazers_count, // star
                    watches: _item.subscribers_count, // watch
                });
            }, function(_err, _results) {
                if (_err) {
                    deferred.reject(_err);
                } else
                    deferred.resolve(_results);
            });
        }
    });

    return deferred.promise;
}
