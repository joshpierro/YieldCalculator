(function () {
    'use strict';
    angular
        .module('angularApp')
            .controller('Settings', Settings);

    Settings.$inject = ['$scope','$location', '$state', '$stateParams', 'AppData', 'Utils'];

    function Settings($scope,$location, $state, $stateParams, AppData, Utils) {
        var vm = this;
        vm.settings = {};

        vm.assumptions = Utils.assumptions;


        vm.isDirty = function () {
            Utils.assumptions = vm.assumptions;
            Utils.assumptions.isDirty = true;
            Utils.recalculate(vm.assumptions);
        };

        //set tab (if not already set)
        $scope.$parent.vm.target = 2;
    }

})();