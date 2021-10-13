const source = require('vinyl-source-stream');
const browserify = require('browserify');
const gulp = require('gulp');

gulp.task('default', function() {
  return browserify('./src/js/index.jsx')
  .transform('babelify', {
    plugins: ['transform-react-jsx']
  })
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('./src/js'))
})
