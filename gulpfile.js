var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Development Tasks 
// -----------------

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            proxy: 'https://localhost:3000',
            https: true
        }
    });
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./ar-demo/*.html', browserSync.reload);
  gulp.watch('./ar-demo/js/**/*.js', browserSync.reload);
  gulp.watch('./ar-demo/css/**/*.css', browserSync.reload);
  gulp.watch('./vr-demo/*.html', browserSync.reload);
  gulp.watch('./vr-demo/js/**/*.js', browserSync.reload);
  gulp.watch('./ar-starter/*.html', browserSync.reload);
  gulp.watch('./ar-starter/js/**/*.js', browserSync.reload);
  gulp.watch('./ar-starter/css/**/*.css', browserSync.reload);
  gulp.watch('./vr-starter/*.html', browserSync.reload);
  gulp.watch('./vr-starter/js/**/*.js', browserSync.reload);  
})

// Default Task
gulp.task('default', ['browser-sync', 'watch']);
