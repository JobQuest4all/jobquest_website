const express = require('express');
const app = express();
const varstring = require('varstring');

function WebService(params){
	var self=this, server=null, mocks=[];

	(function init(){
		if(!params){
			throw 'Params is required';
		}
		else if(!params.app){
			throw 'App param is required';
		}
		else if((typeof params.port) != 'number'){
			throw 'Port is required';
		}

		app.get('/ping', function (req, res) {
	  		res.json({hello: 'World!'});
		});
	})();

	this.stop=function(){ 
		if(server){
			server.close(); 
			console.log("[MockWebService] Server shutdown.");
		}
		else {
			throw "Server not found";
		}

		return self;
	};

	this.start=function(){ 
		mocks.forEach(function(mock){
			mock.route();
		});

		server=app.listen(params.port); 
		console.log(varstring("[MockWebService] Server listening on port {0}", params.port));
		return self;
	};

	this.getPort=function(){
		return params.port;
	};

	this.addMock=function(mock){
		if(!mock){
			throw 'Mock is required';
		}

		mocks.push(mock);
		return self;
	};
};

module.exports=WebService;