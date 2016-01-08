(function () {
    'use strict';
    angular
     .module('angularApp')
      .service('Utils', Utils);

    var assumptions,validInputs,currentInputs;


    function getAssumptions(inputs) {
        
        var rent = inputs.rent
        var gross = (rent * 12);
        console.log(rent)
        var vacancyLoss = gross * .05;
        console.log(vacancyLoss)
        var creditLoss = gross * .02;
        console.log(creditLoss)
        var effectiveGrossIncome = gross - (vacancyLoss + creditLoss);
        console.log(effectiveGrossIncome)
        var sqFeet = inputs.sqFeet;
        var taxes = inputs.price * .03; 
        console.log(effectiveGrossIncome * .08)
        return  {
            //income
            gross: gross,
            vacancyLoss: vacancyLoss,
            creditLoss: creditLoss,
            effectiveGrossIncome: effectiveGrossIncome,
           //expenses
            management:effectiveGrossIncome * .08,
            leaseup:(rent * .83) / 2,
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

        this.validateModel = function (inputs) {
            var isValid = true;
            isValid = inputs.price ? false : true;
            isValid = inputs.sqFeet ? false : true;
            isValid = inputs.renovations ? false : true;
            isValid = inputs.vintage ? false : true;
            isValid = inputs.hoaFees ? false : true;
            isValid = inputs.rent ? false : true;
            return isValid;
        }

        this.calculate = function (inputs) {
            this.assumptions = getAssumptions(inputs);
            console.log(this.assumptions);
        }; 

    }

})();