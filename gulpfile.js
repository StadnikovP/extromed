var gulp = require('gulp');
var addsrc = require('gulp-add-src');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var minifycss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

var sourcesPath = './src';
var assetsPath = './dist';

var jslibs = [
  sourcesPath + '/js/vendors/jquery-3.1.0.min.js',
  sourcesPath + '/js/vendors/jquery.fancybox.js',
  sourcesPath + '/js/vendors/swiper3.js',
  sourcesPath + '/js/vendors/TweenMax.js',
  sourcesPath + '/js/vendors/jquery.onepage-scroll.js',
  sourcesPath + '/js/vendors/jquery.maskedinput.min.js',
  sourcesPath + '/js/vendors/jquery.mCustomScrollbar.js'
];

var jsApp = [
  sourcesPath + '/js/kursMap.js',
  sourcesPath + '/js/app.js'
];


gulp.task('sass', function() {
  return gulp.src(sourcesPath + '/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('safari 6', 'Firefox 14', 'ie 10', 'opera 12.1'))
    .pipe(gulp.dest(assetsPath))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(assetsPath));
});

gulp.task('js', function() {
  return gulp.src(jsApp)
    .pipe(plumber())
    .pipe(addsrc.prepend(jslibs))
    .pipe(concat(assetsPath + '/main.js'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'))
    .pipe(notify('Complete!'));
});


gulp.task('watch', function() {
  gulp.watch(sourcesPath + '/sass/**/*.scss', ['sass']);
  gulp.watch(jsApp, ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);

