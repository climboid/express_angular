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
    
  	/*
  		Gets all users
  	*/
  	(function getUsers () {
  		$http.get('/api/users').
		  success(function(data, status, headers, config) {
		    $scope.users = data;
		  }).
		  error(function(data, status, headers, config) {
		    
		  });	
  	})();


  	/*
  	  Adds a user 
  	 */
	  $scope.submitForm = function () {
	  	$http.post('/api/users', {name:$scope.name}).
		  success(function(data, status, headers, config) {
		    $scope.users.push(data[0]);
		    $scope.name = '';
		  }).
		  error(function(data, status, headers, config) {
		    
		  });
	  };


	  /*
	    Gets a single user
	   */
	  $scope.getUser = function () {
	  	var len = $scope.users.length;
	  	var usr = $scope.users[Math.floor((Math.random() * len-1) + 1)];

	  	$http.get('/api/users/'+usr._id).
		  success(function(data, status, headers, config) {
		  	$scope.foundUser = data.fullname;
		  }).
		  error(function(data, status, headers, config) {
		    
		  });
	  };


	  /*
	    Update a single user
	   */
	  $scope.updateUser = function () {
	  	var len = $scope.users.length;
	  	var newName = $scope.newName;
	  	var randomUser = $scope.users[Math.floor((Math.random() * len - 1) + 1)];

	  	$http.put('/api/users/'+randomUser._id, {newName:newName}).
	  	success(function(data, status, headers, config) {
	  		randomUser.fullname = $scope.newName;
	  	}).
	  	error(function(data, status, headers, config){

	  	});

	  };


	  /*
	    Delete a single user
	  */
	  $scope.deleteUser = function () {
	  	var len = $scope.users.length;
	  	var randomUserIndex = Math.floor((Math.random() * len -1) + 1);
	  	var randomUser = $scope.users[randomUserIndex];

	  	if (randomUser) {
	  		$http.delete('/api/users/'+randomUser._id).
		  	success(function(data, status, headers, config) {
		  		_.remove($scope.users, function(item) { 
		  			return item._id === randomUser._id;
		  		});
		  	}).
		  	error(function(data, status, headers, config){

		  	});
	  	}
	  };

  	
  });
