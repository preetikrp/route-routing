"use strict";
app.controller("pchCtrl", function($scope, routeGuide){
	routeGuide.findRoutes()
	.then((response) =>{
		$scope.interstates = response;
	});

});