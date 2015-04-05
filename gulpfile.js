var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var path = require('path');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(plugins.less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
});