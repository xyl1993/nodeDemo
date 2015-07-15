var mainModule = angular.module('main', ['ui.router',
				'ngResource', 'ngSanitize','w5c.validator']);
mainModule.run(function($rootScope, $state, $http, $stateParams, $location,$timeout,$window) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

mainModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('found',{
		url : '/found',               //发现
		templateUrl : '../found'
	}).state('guanzhu',{
		url : '/guanzhu',               //发现
		templateUrl : '../guangzhu'
	})
}])