/*!
* blog-try-cinema - v0.0.1 - MIT LICENSE 2017-01-06. 
* @author Gokul
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('blog-try-cinema', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'flimblog',
		'movie1',
		'movie2',
		'movie3',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('blog-try-cinema')
		.config(configure)
		.run(runBlock)
    .config(['$qProvider',  function ($qProvider) {
    }])
    .config(function($mdThemingProvider) {

      $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ccc',
        '200': 'ef9a9a',
        '300': '5e6779',
        '400': 'ef5350',
        '500': '333B4C',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
          '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
      });

      $mdThemingProvider.theme('default')
        .primaryPalette('amazingPaletteName')

    });


	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/flimblog');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:flimblogModule
	 * @description
	 * # flimblogModule
	 * Module of the app
	 */

  	angular.module('flimblog', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:movie1Module
	 * @description
	 * # movie1Module
	 * Module of the app
	 */

  	angular.module('movie1', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:movie2Module
	 * @description
	 * # movie2Module
	 * Module of the app
	 */

  	angular.module('movie2', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:movie3Module
	 * @description
	 * # movie3Module
	 * Module of the app
	 */

  	angular.module('movie3', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:flimblogRoute
 * @description
 * # flimblogRoute
 * Route of the app
 */

angular.module('flimblog')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.flimblog', {
				url:'/flimblog',
				templateUrl: 'app/modules/flimblog/flimblog.html',
				controller: 'FlimblogCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('blog-try-cinema')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:movie1Route
 * @description
 * # movie1Route
 * Route of the app
 */

angular.module('movie1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie1', {
				url:'/review/captain america',
				templateUrl: 'app/modules/movie1/movie1.html',
				controller: 'Movie1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:movie2Route
 * @description
 * # movie2Route
 * Route of the app
 */

angular.module('movie2')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie2', {
				url:'/review/assassin creed',
				templateUrl: 'app/modules/movie2/movie2.html',
				controller: 'Movie2Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:movie3Route
 * @description
 * # movie3Route
 * Route of the app
 */

angular.module('movie3')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.movie3', {
				url:'/review/dangal',
				templateUrl: 'app/modules/movie3/movie3.html',
				controller: 'Movie3Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:homeCtrl
	* @description
	* # homeCtrl
	* Controller of the app
	*/

  	angular
		.module('home')
		.controller('HomeCtrl', Home);

		Home.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Home() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('blog-try-cinema')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('blog-try-cinema')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:movie1Ctrl
	* @description
	* # movie1Ctrl
	* Controller of the app
	*/

  	angular
		.module('movie1')
		.controller('Movie1Ctrl', Movie1);

		Movie1.$inject = ['$scope', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Movie1($scope, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			jQuery(function($) {
    			$('.textEditor').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor').html();
        			$('.textEditor').html(text.replace(highlight, span));
  					  });
    			$('.textEditor1').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor1').html();
        			$('.textEditor1').html(text.replace(highlight, span));
  					  });
    			$('.textEditor2').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor2').html();
        			$('.textEditor2').html(text.replace(highlight, span));
  					  });
    			$('.textEditor3').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor3').html();
        			$('.textEditor3').html(text.replace(highlight, span));
  					  });
    			$('.textEditor4').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor4').html();
        			$('.textEditor4').html(text.replace(highlight, span));
  					  });
    			$('.textEditor5').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor5').html();
        			$('.textEditor5').html(text.replace(highlight, span));
  					  });
    			$('.textEditor6').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor6').html();
        			$('.textEditor6').html(text.replace(highlight, span));
  					  });
    			$('.textEditor7').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor7').html();
        			$('.textEditor7').html(text.replace(highlight, span));
  					  });
    			$('.textEditor8').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor8').html();
        			$('.textEditor8').html(text.replace(highlight, span));
  					  });
    			$('.textEditor9').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor9').html();
        			$('.textEditor9').html(text.replace(highlight, span));
  					  });
    			$('.textEditor10').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor10').html();
        			$('.textEditor10').html(text.replace(highlight, span));
  					  });
    			$('.textEditor11').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor11').html();
        			$('.textEditor11').html(text.replace(highlight, span));
  					  });
    			$('.textEditor12').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor12').html();
        			$('.textEditor12').html(text.replace(highlight, span));
  					  });
    			$('.textEditor13').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor13').html();
        			$('.textEditor13').html(text.replace(highlight, span));
  					  });
    			$('.textEditor14').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor14').html();
        			$('.textEditor14').html(text.replace(highlight, span));
  					  });
    			$('.textEditor15').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor15').html();
        			$('.textEditor15').html(text.replace(highlight, span));
  					  });
    			$('.textEditor16').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor16').html();
        			$('.textEditor16').html(text.replace(highlight, span));
  					  });
    			$('.textEditor17').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor17').html();
        			$('.textEditor17').html(text.replace(highlight, span));
  					  });
    			$('.textEditor18').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor18').html();
        			$('.textEditor18').html(text.replace(highlight, span));
  					  });

				});


			$scope.thumbnail = {
    			dataUrl: ''
			};
			$scope.fileReaderSupported = window.FileReader != null;
			$scope.photoChanged = function(files){
   			   if (files != null) {
        			var file = files[0];
   				    if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
        				$timeout(function() {
           					var fileReader = new FileReader();
            				fileReader.readAsDataURL(file);
            				fileReader.onload = function(e) {
                				$timeout(function(){
									$scope.thumbnail.dataUrl = e.target.result;
               					});
           					}
       					});
    				}
				}
				};
			$scope.name="";
			vm.showInput = function() {	
        		document.getElementById('display').innerHTML = document.getElementById("user_input").value;
 		    }

		}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:movie2Ctrl
	* @description
	* # movie2Ctrl
	* Controller of the app
	*/

  	angular
		.module('movie2')
		.controller('Movie2Ctrl', Movie2);

		Movie2.$inject = ['$scope', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Movie2($scope, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			jQuery(function($) {
    			$('.textEditor').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor').html();
        			$('.textEditor').html(text.replace(highlight, span));
  					  });
    			$('.textEditor1').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor1').html();
        			$('.textEditor1').html(text.replace(highlight, span));
  					  });
    			$('.textEditor2').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor2').html();
        			$('.textEditor2').html(text.replace(highlight, span));
  					  });
    			$('.textEditor3').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor3').html();
        			$('.textEditor3').html(text.replace(highlight, span));
  					  });
    			$('.textEditor4').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor4').html();
        			$('.textEditor4').html(text.replace(highlight, span));
  					  });
    			$('.textEditor5').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor5').html();
        			$('.textEditor5').html(text.replace(highlight, span));
  					  });
    			$('.textEditor6').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor6').html();
        			$('.textEditor6').html(text.replace(highlight, span));
  					  });

				});


			$scope.thumbnail = {
    			dataUrl: ''
			};
			$scope.fileReaderSupported = window.FileReader != null;
			$scope.photoChanged = function(files){
   			   if (files != null) {
        			var file = files[0];
   				    if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
        				$timeout(function() {
           					var fileReader = new FileReader();
            				fileReader.readAsDataURL(file);
            				fileReader.onload = function(e) {
                				$timeout(function(){
									$scope.thumbnail.dataUrl = e.target.result;
               					});
           					}
       					});
    				}
				}
				};
			$scope.name="";
			vm.showInput = function() {	
        		document.getElementById('display').innerHTML = document.getElementById("user_input").value;
 		    }


		}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:movie3Ctrl
	* @description
	* # movie3Ctrl
	* Controller of the app
	*/

  	angular
		.module('movie3')
		.controller('Movie3Ctrl', Movie3);

		Movie3.$inject = ['$scope', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Movie3($scope, $timeout) {
			/*jshint validthis: true */var vm = this;

			jQuery(function($) {
    			$('.textEditor').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor').html();
        			$('.textEditor').html(text.replace(highlight, span));
  					  });
    			$('.textEditor1').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor1').html();
        			$('.textEditor1').html(text.replace(highlight, span));
  					  });
    			$('.textEditor2').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor2').html();
        			$('.textEditor2').html(text.replace(highlight, span));
  					  });
    			$('.textEditor3').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor3').html();
        			$('.textEditor3').html(text.replace(highlight, span));
  					  });
    			$('.textEditor4').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor4').html();
        			$('.textEditor4').html(text.replace(highlight, span));
  					  });
    			$('.textEditor5').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor5').html();
        			$('.textEditor5').html(text.replace(highlight, span));
  					  });
    			$('.textEditor6').hover(function(){
        			var highlight = window.getSelection();  
        			var span = '<b><u>' + highlight + '</u></b>';
        			var text = $('.textEditor6').html();
        			$('.textEditor6').html(text.replace(highlight, span));
  					  });

			});


			$scope.thumbnail = {
    			dataUrl: ''
			};
			$scope.fileReaderSupported = window.FileReader != null;
			$scope.photoChanged = function(files){
   			   if (files != null) {
        			var file = files[0];
   				    if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
        				$timeout(function() {
           					var fileReader = new FileReader();
            				fileReader.readAsDataURL(file);
            				fileReader.onload = function(e) {
                				$timeout(function(){
									$scope.thumbnail.dataUrl = e.target.result;
               					});
           					}
       					});
    				}
				}
				};
			$scope.name="";
			vm.showInput = function() {	
        		document.getElementById('display').innerHTML = document.getElementById("user_input").value;
 		    }
		}
})();

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

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('blog-try-cinema')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

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
			    
					{
						link: 'flimblog',
							name: 'Flimblog'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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
