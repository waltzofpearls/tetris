
var GithubApi = require('github');
var config = require('config');
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
    this.github.authenticate({
        type: 'oauth',
        token: config.github.token
    });
}

github.prototype.getRepos = function() {
    this.github.repos.getAll({
        type: 'owner',
        sort: 'pushed',
        direction: 'desc'
    }, function(err, res) {
        console.log(res[0]);
    });
}
