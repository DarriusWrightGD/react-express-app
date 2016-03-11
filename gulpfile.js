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
   .transform("babelify", {
     presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
     plugins: ["syntax-async-functions","transform-regenerator"]
   })
   .bundle()
   .pipe(source('app.js'))
   .pipe(gulp.dest('./public'));
});

gulp.task('copy', function(){
  return gulp.src(['app/**/*.css'])
  .pipe(gulp.dest('./public'))
});

gulp.task('js-watch', function(){
  return gulp.watch('app/**/*.js', ['bundle']);
});

gulp.task('css-watch', function(){
  return gulp.watch('app/**/*.css', ['copy']);
});

gulp.task('watch', ['css-watch','js-watch']);

gulp.task('dev', ['watch','serve']);
