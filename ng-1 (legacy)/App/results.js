(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Results', Results);

    Results.$inject = ['$scope','$location', '$stateParams', 'AppData','Utils'];

    function Results($scope,$location, $stateParams, AppData, Utils) {
        var vm = this;
        vm.zoom = 15;
        vm.center = {
            lat: 0,
            lng: 0
        }

        vm.results = Utils.output; 
       
        if (Utils.address) {
            vm.fullAddress = Utils.address.formattedAddress;

            vm.center = {
                lat: Utils.address.lat,
                lng: Utils.address.lng
            }

        }
 
        //todo add call for comps. server side 
       // var address = '2114+Bigelow+Ave&citystatezip=Seattle%2C+WA';
       // AppData.getComps(address); 

        //set tab (if not already set)
        $scope.$parent.vm.target = 1;
    }

})();