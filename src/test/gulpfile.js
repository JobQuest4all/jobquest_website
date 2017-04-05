const gulp = require('gulp');
const Server = require('karma').Server;
const express = require('express');
const app = express();
const rest = require('restler');
const varstring = require('varstring');

/**
 * Run test once and exit
 */
gulp.task('test.run', [], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
  	done();
  	process.exit(); // prevent Gulp from hanging
  }).start();
});