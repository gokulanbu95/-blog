'use strict';

/**
 * @ngdoc function
 * @name app.route:movie1Route
 * @description
 * # movie1Route
 * Route of the app
 */

angular.module('movie1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie1', {
				url:'/review/captain america',
				templateUrl: 'app/modules/movie1/movie1.html',
				controller: 'Movie1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
