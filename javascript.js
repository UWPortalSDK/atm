angular.module('portalApp')
.controller('atmCtrl', ['$scope', 'locDataFactory', function ($scope, locDataFactory) {
	
    $scope.loading = locDataFactory.loading;
    $scope.locData = locDataFactory.locData;
    locDataFactory.init($scope);
    
	$scope.$watch('loading.value', function () {
        // if loading
        if ( ! $scope.loading.value) {
            $scope.portalHelpers.showView('atmMain.html', 1);
            // show loading animation in place of menu button
            $scope.portalHelpers.toggleLoading(false);
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


    .factory('locDataFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
        var initialized = {
            value: false
        };

        // Your variable declarations
        var loading = {
            value: true
        };
        
        // var atmData = {
        //     value: null
        // };
        
      	var locData = {
            atmData: null,
            foodServiceData: null,
            FedData: null
        }

        
        var init = function ($scope) {
            if (initialized.value)
                return;
			
            // Either one load success should be a success?
            $scope.portalHelpers.invokeServerFunction('getATMs').then(function (result) {
                locData.atmData = result.data;
                loading.value = false;
            });
            
            $scope.portalHelpers.invokeServerFunction('getFoodServiceLoc').then(function (result) {
                locData.foodServiceData = result.data;
                loading.value = false;
            });

            $scope.portalHelpers.invokeServerFunction('getFedLoc').then(function (result) {
                FedData.FedData = result.data;
                loading.value = false;
            });
            
            initialized.value = true;
        }

        return {
            init: init,
            loading: loading,
            locData: locData
        };
        
    }]);



