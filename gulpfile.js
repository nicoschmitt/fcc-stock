var gulp = require('gulp');
var gutil = require('gulp-util');
var bowerMain = require('bower-main');
var del = require('del');
var uglify = require("gulp-uglify");

gulp.task("clean", function() {
   del("client/lib/*"); 
});

gulp.task('bower-js', function() {
    return gulp.src(bowerMain('js','min.js').minified)
               .pipe(gulp.dest("client/lib"));
});

gulp.task('bower-css', function() {
    return gulp.src(bowerMain('css','min.css').minified)
               .pipe(gulp.dest("client/lib"));
});

gulp.task("socketio-client", function() {
    gulp.src("node_modules/socket.io-client/socket.io.js") 
              .pipe(uglify())
              .pipe(gulp.dest("./client/lib"));
});

gulp.task('default', ["clean", 'bower-js', 'bower-css', "socketio-client"]);
