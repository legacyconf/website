var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  gulp.src('./src/templates/*.jade')
      .pipe(jade({
	  }))
	  .pipe(gulp.dest('./build/'))
});

gulp.task('default', ['templates']);
