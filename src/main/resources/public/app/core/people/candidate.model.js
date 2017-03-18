angular
.module('core.people')
.factory('Candidate',['User', 'Person','$resource',function(User,Person,$resource){
	return function(user, person){
		var self = this;
		var legalStatus = '';

		if(!(user instanceof User)){
			throw "user is not an instance of User";
		}
		else if(!(person instanceof Person)){
			throw "person is not an instance of Person";
		}

		this.getUser=function(){return user; };
		this.getPerson=function(){return person; };
		this.getLegalStatus=function(){return legalStatus; };

		this.setUser=function(user){self.user=user; };
		this.setPerson=function(person){self.person=person; };
		this.setLegalStatus=function(legalStatus){self.legalStatus=legalStatus; };

		this.save=function(){
			throw 'Not implemented';
		};
	};
}]);