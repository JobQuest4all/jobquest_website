angular
.module('core.people')
.factory('Person', ['User','$resource',function(User,$resource){
	return function(){
		var self=this;
		var firstName='', lastName='', phone='', email='';

		this.getFirstName=function(){ return firstName; };
		this.getLastName=function(){return lastName; };
		this.getEmail=function(){ return email; };
		this.getPhone=function(){ return phone; };
		this.getUser=function(){return user; };

		this.setFirstName=function(firstName){self.firstName=firstName; };
		this.setLastName=function(lastName){self.lastName=lastName; };
		this.setEmail=function(email){self.email=email; };
		this.setPhone=function(phone){self.phone=phone; };

		this.setUser=function(user){
			if(!(user instanceof User)){
				throw "user is not an instance of a User";
			}

			self.user=user; 
		};
	};
}]);