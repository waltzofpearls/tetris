/*
 * tetris
 *
 * Personal site built on top of node.js, express and backbone.js
 * https://github.com/waltzofpearls/tetris
 *
 * Copyright (c) 2014 Topbass Labs (topbasslabs.com)
 * Author Waltz.of.Pearls <rollie@topbasslabs.com, rollie.ma@gmail.com>
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            production: {
                options: {
                    strictMath: true,
                    cleancss: true
                },
                src: 'public/stylesheets/style.less',
                dest: 'public/stylesheets/style.css'
            }
        },
    });

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    require('time-grunt')(grunt);

    grunt.registerTask('default', ['less:production']);
};
