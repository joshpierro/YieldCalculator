(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Results', Results);

    Results.$inject = ['$location', '$stateParams', 'AppData'];

    function Results($location, $stateParams, AppData) {
        var vm = this;
        vm.zoom = 11;
    }

})();