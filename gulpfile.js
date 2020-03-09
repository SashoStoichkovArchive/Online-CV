const gulp = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');

const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');

const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const del = require('del');

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('useref'));
  gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg)', gulp.parallel('images'));
  gulp.watch('app/fonts/**/*', gulp.parallel('fonts'));
  gulp.watch('app/favicon.ico', gulp.parallel('favicon'));
})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(cssbeautify({
        indent: '  ',
        openbrace: 'end-of-line',
        autosemicolon: true
      }))
      .pipe(gulp.dest('app/css'))
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('favicon', function() {
  return gulp.src('app/favicon.ico')
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('default', gulp.parallel('clean:dist', 'watch', 'useref', 'images', 'fonts', 'favicon'));