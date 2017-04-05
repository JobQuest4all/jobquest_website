describe("User", function() {
	var UserClass=null;
    var baseUrlInjected='';
    var $httpBackend;

	beforeEach(module('core'));

	beforeEach(inject(function(User, baseUrl){
		UserClass = User;
        baseUrlInjected = baseUrl;
	}));

    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
    }));


  	it("creates new users", function(done) {
        $httpBackend.whenPOST(baseUrlInjected + '/users')
                            .respond(200, angular.toJson({
                                username: 'yev', 
                                accessToken: 'token123',
                                passwordExpired: false,
                                accountExpired: false,
                                accountedLocked: false
                            }));

    	var user = new UserClass({
    		username: 'yev',
    		password: 'admin123'
    	});

        var listeners = {};

        listeners.success=function(data){
            expect(data instanceof Object).toBe(true);
            expect(data.username).toEqual('yev');
            expect(data.accessToken).toEqual('token123');
            expect(data.passwordExpired).toBe(false);
            expect(data.accountExpired).toBe(false);
            expect(data.passwordExpired).toBe(false);
            done();
        };

        listeners.error=function(){
            fail('Unable to create new user');
            done();
        };

    	var promise = user.save(listeners);
       
        $httpBackend.flush();
  	});

    it("login existing users", function(done) {
        $httpBackend.whenPOST(baseUrlInjected + '/users/login')
                            .respond(200, angular.toJson({
                                username: 'yev', 
                                accessToken: 'token123',
                                passwordExpired: false,
                                accountExpired: false,
                                accountedLocked: false
                            }));

        var user = new UserClass({
            username: 'yev',
            password: 'admin123'
        });

        var listeners = {};

        listeners.success=function(data){
            expect(data instanceof Object).toBe(true);
            expect(data.username).toEqual('yev');
            expect(data.accessToken).toEqual('token123');
            expect(data.passwordExpired).toBe(false);
            expect(data.accountExpired).toBe(false);
            expect(data.passwordExpired).toBe(false);
            done();
        };

        listeners.error=function(){
            fail('Unable to create new user');
            done();
        };

        var promise = user.login(listeners);

        $httpBackend.flush();
    });
});