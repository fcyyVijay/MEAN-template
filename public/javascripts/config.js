angular.module('Config',['restangular'])
.config([
    'RestangularProvider',
    RestangularConfig
  ]);

function RestangularConfig(RestangularProvider){
	'use strict';
  RestangularProvider.setBaseUrl('/api');
}