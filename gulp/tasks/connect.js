var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', ['watch'], function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});