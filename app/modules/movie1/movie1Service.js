(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:movie1Service
	 * @description
	 * # movie1Service
	 * Service of the app
	 */

  	angular
		.module('movie1')
		.factory('Movie1Service', Movie1);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Movie1.$inject = ['$http'];

		function Movie1 ($http) {

		}

})();
