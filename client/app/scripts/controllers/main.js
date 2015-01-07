'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $http) {
    
  	console.log('in the main controller');

  	// to where should this http call be made to?
  	$http.get('/someUrl').
	  success(function(data, status, headers, config) {
	    console.log('data', data);
	  }).
	  error(function(data, status, headers, config) {
	    
	  });
  	
  });
