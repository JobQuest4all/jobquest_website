angular
.module('core.people')
.factory('Person', ['User','$resource',function(User,$resource){
	return function Person(params){
		var self=this;
		var firstName='', lastName='', phone='', email='', user=null;

		self.getFirstName=function(){ return firstName; };
		self.getLastName=function(){return lastName; };
		self.getEmail=function(){ return email; };
		self.getPhone=function(){ return phone; };
		self.getUser=function(){return user; };

		self.setFirstName=function(firstNameInput){ 
			if(typeof firstNameInput == 'string' && firstNameInput.length>0) {
				firstName=firstNameInput; 
			}else{
				throw 'First name is required';
			}
		};

		self.setLastName=function(lastNameInput){ 
			if(typeof lastNameInput == 'string' && lastNameInput.length>0){
				lastName=lastNameInput; 
			}else{
				throw 'Last name is required';
			}
		};

		self.setEmail=function(emailInput){ 
			if(typeof emailInput == 'string' && emailInput.length>0){
				email=emailInput; 
			}else{
				throw 'Email is required';
			}
		};

		self.setPhone=function(phoneInput){ phone=phoneInput; };

		self.setUser=function(userInput){
			if(!(userInput instanceof User)){
				throw 'user is not an instance of a User: ' + userInput;
			}

			user = userInput;
		};

		(function init(){
			if(!params){
				throw 'Params is required';
			}
			
			self.setEmail(params.email);
			self.setFirstName(params.firstName);
			self.setLastName(params.lastName);
			self.setPhone(params.phone);
			self.setUser(params.user);
		})();
	};
}]);