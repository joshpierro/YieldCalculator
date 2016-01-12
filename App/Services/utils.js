(function () {
    'use strict';
    angular
     .module('angularApp')
      .service('Utils', Utils);

    var assumptions,validInputs,currentInputs;


    function getAssumptions(inputs) {
        
        var rent = inputs.rent
        var gross = (rent * 12);
        var vacancyLoss = gross * .05;
        var creditLoss = gross * .02;
        var effectiveGrossIncome = gross - (vacancyLoss + creditLoss);
        var sqFeet = inputs.sqFeet;
        var taxes = inputs.price * .03; 

        return {
            //income
            gross: gross,
            vacancyLoss: vacancyLoss,
            creditLoss: creditLoss,
            effectiveGrossIncome: effectiveGrossIncome,
           //expenses
            management:effectiveGrossIncome * .08,
            leaseUp:(rent * .83) / 2,
            maintenance : 60 * 12,
            turnover: rent * .5,
            landscaping : 20,
            insurance: 75 * sqFeet * .0032,
            taxes: taxes,
            specialAssessments: 0,
            other:0
        }

    }



    function Utils() {

        this.formatAddress = function (address) {
            console.log(address.address_components)


            address.address_components.forEach(function (component) {
                component.types.filter(function (type) {
                    return type === 'administrative_area_level_1'
                });
            });

            var propertyAddress = {
                formattedAddress: address.formatted_address,
                state:''
            }

        };

        this.validateModel = function (inputs) {

            //save inputs to bind to UI
            this.currentInputs = inputs;

            //make sure all fields are filled out
            var isValid = true;
            isValid = inputs.price ? false : true;
            isValid = inputs.sqFeet ? false : true;
            isValid = inputs.renovations ? false : true;
            isValid = inputs.vintage ? false : true;
            isValid = inputs.hoaFees ? false : true;
            isValid = inputs.rent ? false : true;
            this.currentInputs.isValid = isValid

            if (isValid == false) {
                this.assumptions = getAssumptions(this.currentInputs);
            }

            return this.currentInputs;
        }

        this.calculate = function (inputs) {
            this.assumptions = getAssumptions(inputs);
        }; 

    }

})();