/*
var app = angular.module('alexheritier', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('about',
			{
				controller: 'ViewChange',
				templateUrl: '../../about.html'
			})
		.when('projects',
			{
				controller: 'ViewChange',
				templateUrl: '../../projects.html'
			})
		.when('contact',
			{
				controller: 'ViewChange',
				templateUrl: '../../contact.html'
			})
		.otherwise({	redirectTo: 'about'	});
})

app.controller('ViewChange', function($scope) {
	$scope.contents = [
		{
			name: "About Me", filename: "about.html"
		},
		{
			name: "Projects", filename: "projects.html"
		},
		{
			name: "Contact Me", filename: "contact.html"
		}
	];
});
*/