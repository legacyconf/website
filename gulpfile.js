var gulp = require('gulp'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify');

var templates = './src/templates/**/*.jade';
var styles = './src/sass/**/*.scss';
var images = [
  './img/**/*.jpg',
  './img/**/*.png'
];

gulp.task('templates', function() {
  gulp.src(templates)
    .pipe(jade())
    .pipe(minify())
    .pipe(gulp.dest('./build/'));
});

gulp.task('styles', function() {
  // Bootstrap base
  gulp.src('./lib/bootstrap-theme/dist/toolkit-startup.min.*')
    .pipe(gulp.dest('./build/css/'));
  gulp.src('./lib/bootstrap-theme/dist/toolkit.min.js*')
    .pipe(gulp.dest('./build/js/'));

  // Customisations
  gulp.src(styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('images', function() {
  gulp.src(images)
    .pipe(gulp.dest('./build/img/'));
});

gulp.task('watch', function() {
  var sources = [templates, styles];
  gulp.src(sources)
    .pipe(watch(sources));
});

gulp.task('dev', function() {
  gulp.src(templates)
    .pipe(watch(templates, {verbose: true}))
    .pipe(jade())
    .pipe(gulp.dest('./build/'));
  gulp.src(styles)
    .pipe(watch(styles, {verbose: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('default', ['templates', 'styles', 'images']);
