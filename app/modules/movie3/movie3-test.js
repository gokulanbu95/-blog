(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:movie3Test
	 * @description
	 * # movie3Test
	 * Test of the app
	 */

	describe('movie3 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('blog-try-cinema');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Movie3Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
