var gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('watch', function(){
  gulp.watch('js/**/*.js', ['browserify']);
})

gulp.task('default', ['watch']);
