'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('../src/components/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(rename(function(path){
      path.dirname = ''
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./zyb-ui'));
});

//变量文件
gulp.task('copy',function(){
  gulp.src('../src/components/zybColor/zybColor.less')
    .pipe(rename(function(path){
      path.dirname = '';
      path.basename = 'zyb-color';
      path.extname = '.less';
    }))
    .pipe(gulp.dest('./zyb-ui'));
});

gulp.task('build', ['compile', 'copy']);
