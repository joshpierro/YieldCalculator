(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Results', Results);

    Results.$inject = ['$location', '$stateParams', 'AppData','Utils'];

    function Results($location, $stateParams, AppData,Utils) {
        var vm = this;
        vm.zoom = 11;

       // console.log(Utils);
        vm.results = Utils.output; 

    }

})();