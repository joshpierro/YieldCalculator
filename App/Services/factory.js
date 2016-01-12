(function () {
    'use strict';
    angular
      .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http', '$q', '$timeout'];

    function AppData($http) {

        var service = {

            geocodeAddress: geocodeAddress

        };

     //   https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAX_nuk5PpIdNQnqKsx-IeLkZjR7Chylbo

        return service;

        function geocodeAddress(address) {

            var request = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address;

            return $http.get(request)
                .success(function (data) {
                    return data;
                })
               .error(function (error) {
                   return error;
               });
        }; 

    }

})();