(function () {
    'use strict';
    angular
        .module('angularApp')
            .controller('Settings', Settings);

    Settings.$inject = ['$location', '$state', '$stateParams', 'AppData', 'Utils'];

    function Settings($location, $state, $stateParams, AppData,Utils) {
        var vm = this;
        vm.settings = {};

        vm.assumptions = Utils.assumptions;

        vm.isDirty = function() {
            Utils.assumptions.isDirty = true;
            Utils.calculate(vm.assumptions);
        }; 

    }

})();