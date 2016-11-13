angular.module('portalApp')
.controller('atmCtrl', ['$scope', 'atmDataFactory', function ($scope, atmDataFactory) {
	
    $scope.loading = atmDataFactory.loading;
    $scope.atmData = atmDataFactory.atmData;
    atmDataFactory.init($scope);
    
	$scope.$watch('loading.value', function () {
        // if loading
        if ( ! $scope.loading.value) {
            console.log("daaa");
            $scope.portalHelpers.showView('atmMain.html', 1);
            // show loading animation in place of menu button
            $scope.portalHelpers.toggleLoading(false);
            
            // var locations = [];
			// locations.push({lat: item.latitude, lng: item.longitude, title: item.name});
        	for (var i in atmData.value) {
 			 console.log(i);
			}
        } else {
            $scope.portalHelpers.toggleLoading(true);
        }
    });
    
    

	
	// Show main view in the first column as soon as controller loads
	//$scope.portalHelpers.showView('atmMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	//$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		//$scope.detailsItem = item;		
		//$scope.portalHelpers.showView('atmDetails.html', 2);
	//}
}])


    .factory('atmDataFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
        var initialized = {
            value: false
        };

        // Your variable declarations
        var loading = {
            value: true
        };
        var atmData = {
            value: null
        };


        var init = function ($scope) {
            if (initialized.value)
                return;
			
            // OPEN DATA API EXAMPLE
            $scope.portalHelpers.invokeServerFunction('getATMs').then(function (result) {
                console.log('atm data: ', result.data);
                atmData.value = result.data;
                loading.value = false;
            });
            initialized.value = true;
        }

        return {
            init: init,
            loading: loading,
            atmData: atmData
        };

    }]);



