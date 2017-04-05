const gulp = require('gulp');
const Server = require('karma').Server;
const express = require('express');
const app = express();
const rest = require('restler');
const varstring = require('varstring');
const WebService = require('./resources/public/app/core/webservice/webservice');
const UsersMock = require('./resources/public/app/core/webservice/users.mock');
const CandidatesMock = require('./resources/public/app/core/webservice/candidates.mock');

var webService = null;

gulp.task('bootstrap', function(){
	webService = new WebService({ app: app, port: 8080})
	.addMock(new UsersMock({app: app}))
	.addMock(new CandidatesMock({app: app}))
	.start();	
});

gulp.task('test.check', ['bootstrap'], function(done){
	const pingRoute = varstring('http://localhost:{0}/ping', webService.getPort());

	rest.get(pingRoute).on('fail', function(data){
		throw 'Ping not called!';
		done();
	});

	rest.get(pingRoute).on('success', function(data){
		if(typeof data == 'object' && data.hello == 'World!'){
			done();
		}
	});
});

/**
 * Run test once and exit
 */
gulp.task('test.run', ['test.check'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
  	webService.stop();
  	done();
  	process.exit(); // prevent Gulp from hanging
  }).start();
});