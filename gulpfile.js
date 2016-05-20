var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass');

gulp.task('start',() =>{
  nodemon({
    script: './bin/www',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('sass',() =>{
  gulp.src('src/scss/main.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  })).on('error', sass.logError)
  .pipe(gulp.dest('./public/css'));
});


gulp.task('default', ['start', 'sass'], () =>{
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

