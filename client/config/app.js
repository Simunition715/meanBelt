var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard',{
		templateUrl:'partials/polls_index.html',
		controller:'UsersController as UC'
	})
	.when('/create',{
		templateUrl:'partials/create_poll.html',
		controller:'UsersController as UC'
	})
	.when('/poll',{
		templateUrl:'partials/poll.html',
		controller:'UsersController as UC'
	})
	.otherwise('/')
})