(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:movie2Service
	 * @description
	 * # movie2Service
	 * Service of the app
	 */

  	angular
		.module('movie2')
		.factory('Movie2Service', Movie2);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Movie2.$inject = ['$http'];

		function Movie2 ($http) {

		}

})();
