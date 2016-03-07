var gulp = require('gulp');
var gutil = require('gulp-util');
var bowerMain = require('bower-main');
var del = require('del');

gulp.task("clean", function() {
   del("client/lib/*"); 
});

gulp.task('js', function() {

    return gulp.src(bowerMain('js','min.js').minified)
               .pipe(gulp.dest("client/lib"));

});

gulp.task('css', function() {

    return gulp.src(bowerMain('css','min.css').minified)
               .pipe(gulp.dest("client/lib"));

});

gulp.task('default', ["clean", 'js', 'css']);
