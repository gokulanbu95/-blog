(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:movie1Test
	 * @description
	 * # movie1Test
	 * Test of the app
	 */

	describe('movie1 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('blog-try-cinema');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Movie1Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
