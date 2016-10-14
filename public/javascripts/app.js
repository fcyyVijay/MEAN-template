angular.module('myApp',[
	'Router',
	'User',
	'Config',
	'restangular'
	])
.controller('headerCtrl',['$scope','Restangular',headerCtrl]);


function headerCtrl ($scope,Restangular) {
	// body...
}