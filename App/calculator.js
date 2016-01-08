(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Calculator', Calculator);

    Calculator.$inject = ['$location', '$state','$stateParams', 'AppData','Utils'];

    function Calculator($location, $state, $stateParams, AppData, Utils) {
        var vm = this;
        vm.inputs = {};
        vm.validInputs = true;

        vm.validateModel = function () {
            vm.validInputs = Utils.validateModel(vm.inputs);
        }

        vm.calculate = function () {
            Utils.calculate(vm.inputs);
        }

        vm.getAddresses = function (address) {
            console.log(address)
            return [
                {
                    display: '180 mulberry New York, Ny 10012'

                },
                {
                    display: '3011 N 10 ave Phoenix, AZ 85013'
                }
            ];
        }


        vm.vintages = [
            {vintageId:0,vintage:'pre 1950'},
            {vintageId: 1, vintage: '2000-20010' }
        ];

    }

})();