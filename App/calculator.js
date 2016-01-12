(function () {
    'use strict';

  
    //var placeSearch, autocomplete;
    //var componentForm = {
    //    street_number: 'short_name',
    //    route: 'long_name',
    //    locality: 'long_name',
    //    administrative_area_level_1: 'short_name',
    //    country: 'long_name',
    //    postal_code: 'short_name'
    //};

    //function initAutocomplete() {

    //    autocomplete = new google.maps.places.Autocomplete(
    //        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
    //        { types: ['geocode'] });

    //    autocomplete.addListener('place_changed', fillInAddress);
    //}




    angular
        .module('angularApp')
            .controller('Calculator', Calculator);

    Calculator.$inject = ['$scope','$location', '$state','$stateParams', 'AppData','Utils'];

    function Calculator($scope,$location, $state, $stateParams, AppData, Utils) {
        var vm = this;

  
        function getAddress() {
            Utils.formatAddress(autocomplete.getPlace());
        }


        var autocomplete = new google.maps.places.Autocomplete(
                        (document.getElementById('autocomplete')),
                        {
                            types: ['address'],
                            componentRestrictions: { country: 'us' }
                        });

        autocomplete.addListener('place_changed', getAddress);

        vm.inputs = {};
        vm.validInputs = true;

        if (Utils.currentInputs) {
            vm.inputs = Utils.currentInputs
        }

        vm.validateModel = function () {
            vm.validInputs = Utils.validateModel(vm.inputs).isValid;
            vm.inputs = Utils.currentInputs;
        }

        vm.calculate = function () {
            Utils.calculate(vm.inputs);
        }


        vm.geocode = function () {
            
        }

        vm.vintages = [
            {vintageId:0,vintage:'pre 1950'},
            {vintageId: 1, vintage: '2000-20010' }
        ];

    }

})();