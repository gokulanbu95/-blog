(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:movie3Service
	 * @description
	 * # movie3Service
	 * Service of the app
	 */

  	angular
		.module('movie3')
		.factory('Movie3Service', Movie3);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Movie3.$inject = ['$http'];

		function Movie3 ($http) {

		}

})();
