
var config = require('config');
var extend = require('extend');

exports = module.exports = extend(true, config, {
    github: {
        token: process.env.TETRIS_GITHUB_TOKEN || config.github.token
    }
});
