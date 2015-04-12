
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

gulp.task('rjs', plugins.shell.task([
    'r.js -o name=main \
             baseUrl=public/javascripts/ \
             mainConfigFile=public/javascripts/main.js \
             out=public/javascripts/main.min.js \
             preserveLicenseComments=false \
             findNestedDependencies=true \
             optimize=uglify2 \
             generateSourceMaps=true'
]));

gulp.task('default', ['less', 'rjs']);
