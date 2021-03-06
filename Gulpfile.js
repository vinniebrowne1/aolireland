var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src(['src/scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/'));
});


//Watch task
gulp.task('watch',function() {
    gulp.watch(['src/scss/**/*.scss'],['styles']);
});