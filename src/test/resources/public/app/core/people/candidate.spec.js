describe("Candidate", function() {
	var UserClass=null, PersonClass=null, CandidateClass=null;
    var baseUrlInjected='';
    var $httpBackend;

	beforeEach(module('core'));

	beforeEach(inject(function(Candidate, User, Person, baseUrl){
        UserClass = User;
        PersonClass = Person;
		CandidateClass = Candidate;
        baseUrlInjected = baseUrl;
	}));

    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
    }));


  	it("creates new candidates", function(done) {
        $httpBackend.whenPOST(baseUrlInjected + '/candidates')
                            .respond(200, angular.toJson({
                                username: 'yev', 
                                accessToken: 'token123',
                                firstName: 'Mike',
                                lastName: 'Conners',
                                email: 'tango@gmail.com'
                            }));

    	var user = new UserClass({
    		username: 'yev',
    		password: 'admin123'
    	});

        var person = new PersonClass({
            user: user,
            firstName: 'Mike',
            lastName: 'Conners',
            email: 'tango@gmail.com'
        });

        var candidate = new CandidateClass({
            person: person
        });

        var listeners = {};

        listeners.success=function(data){
            expect(data instanceof Object).toBe(true);
            expect(data.username).toEqual('yev');
            expect(data.accessToken).toEqual('token123');
            expect(data.firstName).toEqual('Mike');
            expect(data.lastName).toEqual('Conners');
            expect(data.email).toEqual('tango@gmail.com');
            done();
        };

        listeners.error=function(){
            fail('Unable to create new user');
            done();
        };

    	var promise = candidate.save(listeners);
       
        $httpBackend.flush();
  	});

   
});