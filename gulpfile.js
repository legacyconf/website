var gulp = require('gulp'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    minify = require('gulp-minify');

var templates = './src/templates/**/*.jade';

gulp.task('templates', function() {
  return gulp.src(templates)
             .pipe(jade())
             .pipe(minify())
             .pipe(gulp.dest('./build/'))
});

gulp.task('dev', function() {
  return gulp.src(templates)
             .pipe(watch(templates))
             .pipe(jade())
             .pipe(minify())
             .pipe(gulp.dest('./build/'))
});

gulp.task('default', ['templates']);
