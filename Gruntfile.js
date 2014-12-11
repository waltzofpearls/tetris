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
            testing: {
                options: {
                    strictMath: true,
                    compress: false
                },
                src: 'public/stylesheets/style.less',
                dest: 'public/stylesheets/style.css'
            },
            production: {
                options: {
                    strictMath: true,
                    cleancss: true
                },
                src: 'public/stylesheets/style.less',
                dest: 'public/stylesheets/style.css'
            }
        },
        uglify: {
            requirejs: {
                files: {
                    'public/javascripts/libs/require-2.1.15.min.js': [
                        'public/javascripts/libs/require-2.1.15.js'
                    ]
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: "main",
                    baseUrl: "public/javascripts/",
                    mainConfigFile: "public/javascripts/main.js",
                    out: "public/javascripts/main.min.js"
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    require('time-grunt')(grunt);

    grunt.registerTask('build', ['less:production', 'uglify:requirejs', 'requirejs:compile']);
    grunt.registerTask('default', ['build']);
};
