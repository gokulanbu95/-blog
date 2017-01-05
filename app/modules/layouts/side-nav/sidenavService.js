(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('blog-try-cinema')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
			    
					/*{
						link: 'flimblog',
							name: 'Flimblog'
					},*/
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
