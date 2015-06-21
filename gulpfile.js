'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var plugins = require('gulp-load-plugins')();
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true })

var docker = {
  repo: 'waltzofpearls/tetris',
  name: 'tetris',
  port: '49002'
};

//
// $ gulp less
//
gulp.task('less', function() {
  return gulp.src('public/stylesheets/src/style.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      plugins: [cleancss]
    }))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('public/stylesheets/dist'));
});

//
// $ gulp js
//
gulp.task('js', function() {
  return gulp.src('public/javascripts/bower/requirejs/require.js')
    .pipe(plugins.rename('require.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/javascripts/dist/'));
});

//
// $ gulp rjs
//
gulp.task('rjs', plugins.shell.task([
  'r.js -o \
    name=main \
    baseUrl=public/javascripts/src/ \
    mainConfigFile=public/javascripts/src/config.js \
    out=public/javascripts/dist/main.min.js \
    preserveLicenseComments=false \
    findNestedDependencies=true \
    optimize=uglify2 \
    generateSourceMaps=true \
    paths.ga=empty:'
]));

//
// $ gulp mocha-test
//
gulp.task('mocha-test', function() {
  return gulp.src('./tests/unit-node/**/*_test.js')
    .pipe(plugins.mocha({
      reporter: 'spec',
      bail: true,
      ignoreLeaks: false
    }));
});

//
// $ gulp karma-tdd
//
gulp.task('karma-tdd', function(done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js'
  }, done);
});

//
// $ gulp karma-single-run
//
gulp.task('karma-single-run', function(done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
});

//
// $ gulp docker:build
//
gulp.task('docker:build', plugins.shell.task([
  'docker build -t <%= repo %> .'
], { templateData: docker }));

//
// $ gulp docker:run:prod
//
gulp.task('docker:run:prod', plugins.shell.task([
  'docker run -p <%= port %>:3000 -d -e NODE_ENV=production --name <%= name %> <%= repo %>'
], { templateData: docker }));

//
// $ gulp docker:run:test
//
gulp.task('docker:run:test', plugins.shell.task([
  'docker run -p <%= port %>:3000 -d -e NODE_ENV=testing --name <%= name %> <%= repo %>'
], { templateData: docker }));

//
// gulp docker:run:dev
//
gulp.task('docker:run:dev', plugins.shell.task([
  'docker run -p <%= port %>:3000 -d -e NODE_ENV=development --name <%= name %> <%= repo %>'
], { templateData: docker }));

//
// $ gulp docker:stop
//
gulp.task('docker:stop', plugins.shell.task([
  'docker ps -a | grep <%= name %> > /dev/null \
  && docker stop <%= name %> \
  && docker rm <%= name %> \
  || echo "\nDocker container [<%= name %>] does not exist."'
], { templateData: docker }));

//
// $ gulp docker:status
//
gulp.task('docker:status', plugins.shell.task([
  'docker ps -a -f name=<%= name %>'
], { templateData: docker }));

//
// $ gulp docker:purge
//
gulp.task('docker:purge', plugins.shell.task([
  'docker images | grep <%= repo %> > /dev/null \
  && docker rmi <%= repo %> \
  || echo "\nDocker image [<%= repo %>] does not exist."'
], { templateData: docker }));

//
// $ gulp docker:push
//
gulp.task('docker:push', plugins.shell.task([
  'docker push <%= repo %>'
], { templateData: docker }));

//
// $ gulp docker:pull
//
gulp.task('docker:pull', plugins.shell.task([
  'docker pull <%= repo %>'
], { templateData: docker }));

//
// $ gulp tdd
// $ gulp tdd:backend
// $ gulp tdd:frontend
//
gulp.task('tdd:frontend', ['karma-tdd']);
gulp.task('tdd:backend', ['mocha-test']);
gulp.task('tdd', ['tdd:backend', 'tdd:frontend']);

//
// $ gulp test
// $ gulp test:backend
// $ gulp test:frontend
//
gulp.task('test:frontend', ['karma-single-run']);
gulp.task('test:backend', ['mocha-test']);
gulp.task('test', ['test:backend', 'test:frontend']);

//
// Gulp's default task
//
// $ gulp
//
gulp.task('build', ['less', 'js', 'rjs'])
gulp.task('default', ['build']);
