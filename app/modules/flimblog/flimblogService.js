(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:flimblogService
	 * @description
	 * # flimblogService
	 * Service of the app
	 */

  	angular
		.module('flimblog')
		.factory('FlimblogService', Flimblog);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Flimblog.$inject = ['$http'];

		function Flimblog ($http) {

		}

})();
