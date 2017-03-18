angular
.module('core.people')
.factory('User', ['$resource',function($resource){
	return function(){
		var self=this;
		var username='', password='';

		this.getUsername=function(){return username; };
		this.getPassword=function(){return password; };

		this.setUsername=function(username) { self.username=username; };
		this.setPassword=function(password) { self.password=password; };

		this.login=function(){
			throw 'Not implemented';
		};

		this.create=function(){
			throw 'Not implemented';
		};
	};
}]);