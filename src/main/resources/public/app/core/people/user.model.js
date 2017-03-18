angular
.module('core.people')
.factory('User', ['$resource',function($resource){
	return function(params){
		var self=this;
		var username='', password='';

		(function init(){
			if(params && params.username){
				self.setUsername(params.username);
			}

			if(params && params.password){
				self.setPassword(params.password);
			}
		})();

		this.getUsername=function(){return username; };
		this.getPassword=function(){return password; };

		this.setUsername=function(usernameInput) { username = usernameInput; };
		this.setPassword=function(passwordInput) { password = passwordInput; };

		this.login=function(){
			$resource('/security/login')
			.save({username: username, password: password});
		};

		this.save=function(){
			$resource('/security/createNewUser')
			.save({username: username, password: password});
		};
	};
}]);