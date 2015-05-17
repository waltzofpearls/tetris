'use strict';

var gulp = require('gulp');
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
  return gulp.src('public/stylesheets/style.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      plugins: [cleancss]
    }))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('public/stylesheets'));
});

//
// $ gulp js
//
gulp.task('js', function() {
  return gulp.src('public/javascripts/libs/require-2.1.15/require.js')
    .pipe(plugins.rename('require.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/javascripts/libs/require-2.1.15/'));
});

//
// $ gulp rjs
//
gulp.task('rjs', plugins.shell.task([
  'r.js -o \
    name=main \
    baseUrl=public/javascripts/ \
    mainConfigFile=public/javascripts/main.js \
    out=public/javascripts/main.min.js \
    preserveLicenseComments=false \
    findNestedDependencies=true \
    optimize=uglify2 \
    generateSourceMaps=true'
]));

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
// Gulp's default task
//
// $ gulp
//
gulp.task('build', ['less', 'js', 'rjs'])
gulp.task('default', ['build']);
