
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true })

gulp.task('less', function() {
    return gulp.src('public/stylesheets/style.less')
        .pipe(plugins.less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('rjs', function() {
    return gulp.src('public/javascripts/main.js')
        .pipe(plugins.rename('main.min.js'))
        .pipe(plugins.rjs({
            // name: 'main.min',
            baseUrl: 'public/javascripts/',
            mainConfigFile: 'public/javascripts/main.js'
        }))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('default', ['less', 'rjs']);
