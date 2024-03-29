var gulp = require('gulp')
  ,{ series, parallel } = gulp
  , config = require('./build/config')
  , plugins = require('gulp-load-plugins')
  , gulpTaskList = require('fs').readdirSync('./build/tasks/')
  ;

plugins = {
    clean: require('gulp-clean'),
    inject: require('gulp-inject')
};

//this is a test comment
//scan all tasks in tasks folder
gulpTaskList.forEach(function(taskfile) {
    require('./build/tasks/' + taskfile)(gulp, plugins, config);
});

gulp.task('default', series('clean','webpack','manifest'));