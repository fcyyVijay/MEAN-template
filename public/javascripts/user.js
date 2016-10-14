angular.module('User',['restangular'])
.controller('userCtrl',['$scope','Restangular',userCtrl]);

function userCtrl($scope,Restangular){
	Restangular
	.one('user')
	.get()
	.then(function(username){
		$scope.user=username;
	});
}