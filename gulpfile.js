var gulp = require('gulp'),
  rjs = require('gulp-requirejs'),
  env = require('./dev/json/rjs-config'),
  gulpReact = require('gulp-react'),
  path = require('path'),
  fs = require('fs');
  console.log(env);

gulp.task('requirejsBuild', function() {
    var fileStream = fs.createWriteStream('./build/app.js');
    rjs(env).pipe(fileStream);
});

gulp.task('buildReactJS', function() {
  fs.readdir('./src/jsx', function (err, files) {
    files.forEach(function (filename) {
      console.log(filename);
      gulp.src(path.join('./src/jsx/', filename))
        .pipe(gulpReact())
        .pipe(gulp.dest('./src/js/views/'));
    });
  });
});
