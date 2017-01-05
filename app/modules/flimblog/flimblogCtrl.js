(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:flimblogCtrl
	* @description
	* # flimblogCtrl
	* Controller of the app
	*/

  	angular
		.module('flimblog')
		.controller('FlimblogCtrl', Flimblog);

		Flimblog.$inject = ['$scope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Flimblog($scope) {
			/*jshint validthis: true */
			var vm = this;
			$scope.add = function ()
			{
				console.log("hello");
			};
			 $scope.search = "";
		$scope.$watch("search", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting = "Greetings " + newValue;
    }
  });

		}

})();
