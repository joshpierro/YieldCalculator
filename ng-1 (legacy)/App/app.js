(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('App', App);

    App.$inject = ['$location','$state', '$stateParams', 'AppData','Utils'];
    
    function App($location, $state, $stateParams, AppData,Utils) {
        var vm = this;
        //init
        vm.appState = 'calculator';
        vm.target = 0;
       
        //functions
        vm.setAppState = function (tab) {
            vm.appState = tab;
        }


    }

})();