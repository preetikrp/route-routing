"use strict";
app.controller("californiaCtrl", function($scope, routeGuide){
	routeGuide.findRoutes()
	.then((response) =>{
		$scope.interstates = response;
	});

});