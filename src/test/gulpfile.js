const gulp = require('gulp');
const Server = require('karma').Server;
const express = require('express');
const app = express();
const rest = require('restler');
const varstring = require("varstring")

let mockWebService=null;
const mockWebServicePort=8080;

gulp.task('bootstrap', function(){
	
});

gulp.task('test.init', ['bootstrap'], function(done){
	app.get('/ping', function (req, res) {
  		res.json({hello: 'World!'});
	});

	mockWebService=app.listen(mockWebServicePort);

	rest.get('http://localhost:8080/ping').on('fail', function(data){
		throw 'Ping not called!';
		done();
	});

	rest.get('http://localhost:8080/ping').on('success', function(data){
		if(typeof data == 'object' && data.hello == 'World!'){
			console.log(varstring('Mock web service is running on port {0}',mockWebServicePort));
			done();
		}
	});
});

/**
 * Run test once and exit
 */
gulp.task('test.run', ['test.init'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
  	mockWebService.close();
  	done();
  	process.exit(); // prevent Gulp from hanging
  }).start();
});