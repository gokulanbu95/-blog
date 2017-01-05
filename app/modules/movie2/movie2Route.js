'use strict';

/**
 * @ngdoc function
 * @name app.route:movie2Route
 * @description
 * # movie2Route
 * Route of the app
 */

angular.module('movie2')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie2', {
				url:'/review/assassin creed',
				templateUrl: 'app/modules/movie2/movie2.html',
				controller: 'Movie2Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
