const Gulp = require('gulp')
const Babel = require('gulp-babel')
const CleanCSS = require('gulp-clean-css')
const Pug = require('gulp-pug')
const Uglify = require('gulp-uglify')

Gulp.task('html', () =>
  Gulp.src('src/**/*.pug')
    .pipe(Pug())
    .pipe(Gulp.dest('dist'))
)

Gulp.task('css', () =>
  Gulp.src('src/**/*.css')
    .pipe(CleanCSS())
    .pipe(Gulp.dest('dist'))
)

Gulp.task('js', () =>
  Gulp.src('src/**/*.js')
    .pipe(
      Babel({
        presets: [
          [
            '@babel/env',
            {
              targets: {
                browsers: ['last 10 versions', 'ie >= 9', 'safari >= 7'],
              },
            },
          ],
        ],
      })
    )
    .pipe(
      Uglify({
        toplevel: true,
      })
    )
    .pipe(Gulp.dest('dist'))
)

Gulp.task('rest', () => Gulp.src('src/**/*.svg').pipe(Gulp.dest('dist')))

Gulp.task('watch', () => Gulp.watch('src/**/*', ['default']))

Gulp.task('default', ['html', 'css', 'js', 'rest'])