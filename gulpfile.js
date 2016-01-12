var gulp = require('gulp');

function loadEnv() {
  try {
    if (require('fs').statSync('.env').isFile()) {
      require('gulp-env')({file: '.env', type: '.ini'});
    }
  }
  catch (e) {
    // ignored
  }
}


// Start a server with livereload support
gulp.task('server', function() {
  loadEnv();

  var livereload = require('gulp-livereload');
  livereload.listen();

  require('gulp-nodemon')({script: 'app.js', stdout: false, watch: ['.env', '*.*']})
    .on('readable', function() {
      // this waits until the actual server is up
      this.stdout.on('data', function(chunk) {
        if (/^Running/.test(chunk)) {
          livereload.reload();
        }
        process.stdout.write(chunk);
      });
    })
    .on('restart', function () {
      loadEnv();
    });
});


// Install the gulp-control Atom package and then run Atom
gulp.task('atom', function(cb) {
  var atomPaths = require('gulp-atom-downloader');
  var proc = require('child_process');
  var path = require('path');

  atomPaths().then(function(atomPaths) {
    // quietly install heroku-tools
    proc.spawn(atomPaths.apm, ['install', '-q', 'heroku-tools']).on('close', function (code) {
      if (code != 0) {
        cb('Could not use apm to install heroku-tools.');
      }
      else {
        proc.spawn(atomPaths.atom, ['./', 'README.md'], {env: {ATOM_PATH: atomPaths.base}}).on('close', function (code) {
          if (code == 0) cb();
          else cb('Atom shutdown with an error.');
        });
      }
    });
  });
});

// Default
gulp.task('default', ['atom', 'server']);
