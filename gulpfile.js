import * as Gulp from 'gulp'
import * as Babel from 'gulp-babel'
import * as CleanCSS from 'gulp-clean-css'
import * as Uglify from 'gulp-uglify'

Gulp.task('html', () => Gulp.src('src/**/*.html').pipe(Gulp.dest('dist')))

Gulp.task('css', () =>
  Gulp.src('src/**/*.css')
    .pipe(CleanCSS())
    .pipe(Gulp.dest('dist'))
)

Gulp.task('js', () =>
  Gulp.src('src/**/*.js')
    .pipe(
      Babel({
        presets: ['env'],
      })
    )
    .pipe(Uglify())
    .pipe(Gulp.dest('dist'))
)

Gulp.task('default', ['html', 'css', 'js'])
