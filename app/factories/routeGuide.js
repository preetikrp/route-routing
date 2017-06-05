"use strict";
app.factory("routeGuide", function($q, $http) {
    var findRoutes = function() {
        return $q(function(resolve, reject) {
            $http.get("./data/routes.json")
                .then((response) => {

                    var routeCollection = response.data;
                    console.log("response", response);
                    console.log("routeCollection", routeCollection);
                    resolve(routeCollection.interstates);
                });

        });
    };


    return { findRoutes };
});
console.log("hi");
