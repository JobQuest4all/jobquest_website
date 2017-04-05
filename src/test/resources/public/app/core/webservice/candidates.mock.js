const bodyParser = require('body-parser');
const varstring = require('varstring');

module.exports=function Candidates(params){
	var candidates={};

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
		params.app.post('/candidates', function(req, res){
			console.log(varstring('[Candidates] Req body: {0}', JSON.stringify(req.body)));

			if(!req.body.username){
				throw 'Username required';
			}
			else if(!req.body.accessToken){
				throw 'accessToken required';
			}
			else if(!req.body.firstName){
				throw 'first name required';
			}
			else if(!req.body.lastName){
				throw 'last name required';
			}
			else if(!req.body.email){
				throw 'email required';
			}

			candidates[req.body.username]=req.body;
			console.log(varstring('[Candidates] Stored candidate{0}: {1}', req.body.username, JSON.stringify(req.body)));

			res.json({
	  			username: req.body.username,
	  			accessToken: 'token123',
	  			passworedExpired: false,
	  			accountExpired: false,
	  			accountLocked: false,
	  			firstName: params.firstName,
	  			lastName: params.lastName,
	  			email: params.email
	  		});
		});
	};
};