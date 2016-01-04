var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var notify = require('gulp-notify');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('test', function() {
  gulp.src('spec/*Spec.js')
  .pipe(
    jasmine({verbose:true, includeStackTrace: true})
    .on('error', notify.onError({
      title: 'Jasmine Test Failed',
      message: 'One or more tests failed, see the cli for details.'
    }))
  );
});

gulp.task('watch', function () {
  gulp.watch(['src/*.js', 'src/!(embed)**/*.js','spec/*.js'], ['test']);
});
