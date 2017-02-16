var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');


// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    // gulp.watch('less/*.less', ['less']);
    // gulp.watch('css/*.css', ['minify-css']);
    // gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});
