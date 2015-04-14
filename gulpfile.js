
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true })

gulp.task('less', function() {
    return gulp.src('public/stylesheets/style.less')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less({
            plugins: [cleancss]
        }))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('js', function() {
    return gulp.src('public/javascripts/libs/require-2.1.15/require.js')
        .pipe(plugins.rename('require.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('public/javascripts/libs/require-2.1.15/'));
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

gulp.task('default', ['less', 'js', 'rjs']);
