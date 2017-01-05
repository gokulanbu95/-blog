(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:movie2Test
	 * @description
	 * # movie2Test
	 * Test of the app
	 */

	describe('movie2 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('blog-try-cinema');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Movie2Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
