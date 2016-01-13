(function () {
    'use strict';
    angular
      .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http', '$q', '$timeout'];

    function AppData($http) {

        var baseUrl = 'http://localhost:54477/';

        var service = {

            geocodeAddress: geocodeAddress,
            getComps: getComps,
            getVintages: getVintages

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


        function getComps(address) {
            var request = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1dhn3t28ruz_8w9nb&address=' + address;
            return $http.get(request)
            .success(function (data) {
                console.log(data)
                return data;
            })
           .error(function (error) {
               return error;
           });

        }

       

        function getVintages() {

            var path = baseUrl + '/api/Property/GetVintages';
            //console.log(baseUrl)
                return $http.get(path)
                    .success(function (data) {
                        console.log(data);
                        return data;
                    })
                   .error(function (error) {
                       return error;
                   });

        }

    }

})();