(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:flimblogTest
	 * @description
	 * # flimblogTest
	 * Test of the app
	 */

	describe('flimblog test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('blog-try-cinema');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('FlimblogCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
