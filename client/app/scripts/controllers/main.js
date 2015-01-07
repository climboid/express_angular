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
    
  	// to where should this http call be made to?
  	$http.get('/api/users').
	  success(function(data, status, headers, config) {
	    console.log('data', data);
	  }).
	  error(function(data, status, headers, config) {
	    
	  });
  	
  });
