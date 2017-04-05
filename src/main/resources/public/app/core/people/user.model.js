angular
.module('core.people')
.factory('User', ['$resource', 'baseUrl',function($resource, baseUrl){
	return function User(params){
		var self=this;
		var username='', password='', accessToken='';
		var usersPath = baseUrl + '/users';

		self.getUsername=function(){return username; };
		self.getPassword=function(){return password; };
		self.getAccessToken=function(){ return accessToken; };

		self.setUsername=function(usernameInput) { username = usernameInput; };
		self.setPassword=function(passwordInput) { password = passwordInput; };
		self.setAccessToken=function(accessTokenInput){ accessToken = accessTokenInput; };

		self.login=function(listeners){
			return $resource(usersPath+'/login')
			.save({},{
					username: username, 
					password: password},listeners.success, listeners.error);

			return self;
		};

		self.save=function(listeners){
			return $resource(usersPath)
			.save({},{
					username: username, 
					password: password}, listeners.success, listeners.error);

			return self;
		};

		(function init(){
			if(params && params.username){
				self.setUsername(params.username);
			}

			if(params && params.password){
				self.setPassword(params.password);
			}
		})();
	};
}]);