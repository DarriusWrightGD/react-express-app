var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function(){
   var server = new liveServer('server/main.js');
   server.start();
});

gulp.task('serve', ['bundle','live-server'], function(){
    browserSync.init(
        null, //server is already going
        {
            proxy: "http://localhost:7777",
            prop: 9001
        }
    );
});

gulp.task('bundle', ['copy'], function(){
   return browserify({
       entries: 'app/main.js',
       debug:true
   })
   .transform("babelify", {presets: ["es2015", "react"]})
   .bundle()
   .pipe(source('app.js'))
   .pipe(gulp.dest('./public'));
});

gulp.task('copy', function(){
  gulp.src(['app/*.css'])
  .pipe(gulp.dest('./public'))
});
