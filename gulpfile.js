var gulp = require('gulp'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch');

gulp.task('templates', function() {
  var templates = './src/templates/**/*.jade';
  gulp.src(templates)
      .pipe(watch(templates))
      .pipe(jade({
	  }))
	  .pipe(gulp.dest('./build/'))
});

gulp.task('test', function() {

});

gulp.task('default', ['templates']);
