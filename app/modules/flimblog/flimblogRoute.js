'use strict';

/**
 * @ngdoc function
 * @name app.route:flimblogRoute
 * @description
 * # flimblogRoute
 * Route of the app
 */

angular.module('flimblog')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.flimblog', {
				url:'/flimblog',
				templateUrl: 'app/modules/flimblog/flimblog.html',
				controller: 'FlimblogCtrl',
				controllerAs: 'vm'
			});

		
	}]);
