(function () {
    'use strict';


    angular
        .module('angularApp')
            .controller('Calculator', Calculator);

    Calculator.$inject = ['$scope','$location', '$state','$stateParams', 'AppData','Utils'];

    function Calculator($scope,$location, $state, $stateParams, AppData, Utils) {
        var vm = this;
        vm.inputs = {};
        vm.validInputs = true;
  
        function getAddress() {
            vm.inputs.propertyAddress = Utils.formatAddress(autocomplete.getPlace());
            vm.inputs.address = vm.inputs.propertyAddress.formattedAddress;
        }


        var autocomplete = new google.maps.places.Autocomplete(
                        (document.getElementById('autocomplete')),
                        {
                            types: ['address'],
                            componentRestrictions: { country: 'us' }
                        });

        autocomplete.addListener('place_changed', getAddress);

       

        if (Utils.currentInputs) {
            vm.inputs = Utils.currentInputs
        }

        vm.validateModel = function () {
            vm.validInputs = Utils.validateModel(vm.inputs).isValid;
            vm.inputs = Utils.currentInputs;
            vm.address = Utils.address;
        }

        vm.calculate = function () {
            Utils.calculate(vm.inputs);
        }

      //set tab (if not already set)
       $scope.$parent.vm.target = 0;
     

       console.log(AppData.getVintages())
        //todo get these from an api 
        vm.vintages = [
            { vintageId: 0, vintage: '2010 or newer' },
            { vintageId: 1, vintage: '2000-2010' },
            { vintageId: 2, vintage: '1995-2000' },
            { vintageId: 3, vintage: '1985-1995' },
            { vintageId: 4, vintage: '1975-1985' },
            { vintageId: 5, vintage: '1975 and earlier' }
        ];

    }

})();



                    