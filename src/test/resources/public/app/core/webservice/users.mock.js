const bodyParser = require('body-parser');
const varstring = require('varstring');

module.exports=function Users(params){
	var users={};

	(function init(){
		if(!params){
			throw 'Params is required';
		}
		else if(!params.app){
			throw 'App param is required';
		}

		params.app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  		extended: false
		})); 
	})();

	this.route=function(){
		params.app.post('/users$', function (req, res) {
			console.log(varstring('[Users] Req body: {0}', JSON.stringify(req.body)));

			if(!req.body.username){
				throw varstring('Username required: {0}', req.body.username);
			}
			else if(!req.body.password){
				throw varstring('Password required: {0}', req.body.password);
			}

	  		users[req.body.username]=req.body;
	  		console.log(varstring('[Users] Stored user{0}: {1}', req.body.username, JSON.stringify(req.body)));

	  		res.json({
	  			username: req.body.username,
	  			accessToken: 'token123',
	  			passworedExpired: false,
	  			accountExpired: false,
	  			accountLocked: false
	  		});
		});

		params.app.post('/users/login', function(req, res){
			if(!req.body.username){
				throw 'Username required';
			}
			else if(!req.body.password){
				throw 'password required';
			}

			res.json({
	  			username: req.body.username,
	  			accessToken: 'token123',
	  			passworedExpired: false,
	  			accountExpired: false,
	  			accountLocked: false
	  		});
		});
	};
}