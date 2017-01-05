'use strict';

/**
 * @ngdoc function
 * @name app.route:movie3Route
 * @description
 * # movie3Route
 * Route of the app
 */

angular.module('movie3')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie3', {
				url:'/review/dangal',
				templateUrl: 'app/modules/movie3/movie3.html',
				controller: 'Movie3Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
