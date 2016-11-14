let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/*.css'));
});

gulp.task('sass-watch', ['sass'], function () {
    gulp.watch('src/*.css', ['sass']);
});

gulp.task('default', ['sass-watch'])