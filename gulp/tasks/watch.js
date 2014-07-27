var gulp = require('gulp');

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./src/*.html'], ['html']);
});