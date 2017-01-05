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
