angular.
  module('core.settings').
  factory('baseUrl', ['scheme', 'domain','port','contextpath', function(scheme, domain, port, contextpath){
  	return scheme + '://' + domain + ':' + port + contextpath;
  }]);