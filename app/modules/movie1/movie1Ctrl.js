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
