const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function css() {
   return gulp.src([
      'css/normalize.min.css',
      'css/colors.css',
      'css/typography.css',
      'css/layout.css',
      'css/functional.css',
      'css/style.css',
      ])
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('dist-gulp/css'))
      .pipe(concat('styles.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist-gulp/css'));
}

exports.default = gulp.parallel(css);
