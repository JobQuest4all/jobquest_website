angular
.module('core.people')
.factory('Candidate',['User', 'Person','$resource',function(User,Person,$resource){
	return function(params){
		var self = this;
		var legalStatus = '';
		var user=null, person=null;

		(function init(){
			if(!params){
				throw "User and person are required";
			}

			self.setUser(params.user);
			self.setPerson(params.person);
		})();

		this.getUser=function(){return user; };
		this.getPerson=function(){return person; };
		this.getLegalStatus=function(){return legalStatus; };

		this.setUser=function(user){
			if(!(user instanceof User)){
				throw "user is not an instance of User";
			}

			self.user=user; 
		};

		this.setPerson=function(person){
			if(!(person instanceof Person)){
				throw "person is not an instance of Person";
			}

			self.person=person; 
		};

		this.setLegalStatus=function(legalStatus){self.legalStatus=legalStatus; };

		this.save=function(){
			$resource('/people/candidates')
			.save({username: user.getUsername(), 
				accessToken: user.getAccessToken(),
				firstName: person.getFirstName(),
				lastName: person.getLastName(),
				email: person.getEmail(),
				phone: person.getPhone(),
				legalStatus: self.getLegalStatus()
			})
		};
	};
}]);