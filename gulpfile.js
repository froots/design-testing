var gulp = require('gulp');
var galen = require('gulp-galen');
var connect = require('gulp-connect');

var galenOptions = {
  galenPath: './node_modules/.bin/galen'
};

var connectOptions = {
  root: ['dist'],
  port: 8000,
  livereload: false
};

function galenSuite(suitePath) {
  connect.server(connectOptions);
  return gulp
    .src(suitePath)
    .pipe(galen.test(galenOptions))
    .on('error', function() {
      connect.serverClose();
    })
    .on('end', function() {
      connect.serverClose();
    });
}

gulp.task('galen:headless', function() {
  return galenSuite('test/visual/headless.test');
});

gulp.task('galen:local', function() {
  return galenSuite('test/visual/suite.test');
});
