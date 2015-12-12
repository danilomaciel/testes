var app = angular.module('aplicacao',['ngRoute']);
 
//creating route


	app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/principal.html'
			})
			
			.otherwise({
				redirectTo: '/'
			});
	}])