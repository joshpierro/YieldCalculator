(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('App', App);

    App.$inject = ['$location','$state', '$stateParams', 'AppData'];
    
    function App($location, $state, $stateParams, AppData) {
        var vm = this;

        //init
        vm.appState = 'calculator';
       
        //functions
        vm.setAppState = function (tab) {
            vm.appState = tab;
        }

    }

})();