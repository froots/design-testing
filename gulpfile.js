var gulp = require('gulp');
var galen = require('gulp-galen');
var connect = require('gulp-connect');
var defaultsDeep = require('lodash.defaultsdeep');
var surge = require('gulp-surge');

var galenOptions = {
  galenPath: './node_modules/.bin/galen',
  properties: {
    baseUrl: 'http://localhost:8000/'
  }
};

var connectOptions = {
  root: ['dist'],
  port: 8000,
  livereload: false
};

function galenSuite(suitePath, overrides) {
  var options = defaultsDeep(overrides || {}, galenOptions);
  connect.server(connectOptions);
  return gulp
    .src(suitePath)
    .pipe(galen.test(options))
    .on('error', function() {
      connect.serverClose();
    })
    .on('end', function() {
      connect.serverClose();
    });
}

gulp.task('deploy', function() {
  return surge({
    project: './dist',
    domain: 'designtesting.surge.sh'
  });
});

gulp.task('galen:quick', function() {
  return galenSuite('test/visual/headless.test');
});

gulp.task('galen:all', function() {
  return galenSuite('test/visual/suite.test');
});

gulp.task('galen:dist', function() {
  return galenSuite('test/visual/suite.test', {
    properties: {
      baseUrl: 'http://designtesting.surge.sh/'
    }
  });
});


