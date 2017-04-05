angular
.module('core.people')
.factory('Candidate',['User', 'Person','$resource','baseUrl',function(User,Person,$resource, baseUrl){
	return function Candidate(params){
		var self = this;
		var legalStatus = '';
		var user=null, person=null;
		var candidatesPath = baseUrl + '/candidates';

		this.getPerson=function(){return person; };
		this.getLegalStatus=function(){return legalStatus; };

		this.setPerson=function(personInput){
			if(!(personInput instanceof Person)){
				throw 'person is not an instance of Person: ' + personInput;
			}

			person = personInput;
		};

		this.setLegalStatus=function(legalStatus){self.legalStatus=legalStatus; };

		this.save=function(listeners){
			return $resource(candidatesPath)
			.save({},{
					username: person.getUser().getUsername(),
					accessToken: person.getUser().getAccessToken(),
					firstName: person.getFirstName(),
					lastName: person.getLastName(),
					email: person.getEmail()}, listeners.success, listeners.error);

			return self;
		};

		(function init(){
			if(!params){
				throw 'Params is required';
			}

			self.setPerson(params.person);
		})();
	};
}]);