(function () {
    'use strict';
    angular
      .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http', '$q', '$timeout'];

    function AppData($http) {

        var service = {
         
        };

        return service;

    }

})();