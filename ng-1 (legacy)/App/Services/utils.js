(function () {
    'use strict';
    angular
     .module('angularApp')
      .service('Utils', Utils);

    var assumptions,validInputs,currentInputs,output,target, address;

    function calculateYield(assumptions) {

     //   console.log(assumptions)
        //typescript would be handy here 
        var expensesObject = {
            management: assumptions.management,
            leaseUp: assumptions.leaseUp,
            maintenance:assumptions.maintenance,
            taxes: assumptions.taxes,
            insurance: assumptions.insurance,
            hoaFees:assumptions.hoaFees,
            specialAssessments:assumptions.specialAssessments,
            turnover:assumptions.turnover,
            landscaping: assumptions.landscaping,
            other: assumptions.other
        }

        var expensesArray = [];

        for(var property in expensesObject) {
            expensesArray.push(expensesObject[property]);
        }

        var expenses = expensesArray.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });

        var capex = 0;
        switch (assumptions.vintage) {
            case '0':
                capex = .02 * assumptions.effectiveGrossIncome;
                break;
            case '1':
                capex = .03 * assumptions.effectiveGrossIncome;
                break;
            case '2':
                capex = .04 * assumptions.effectiveGrossIncome;
                break;
            case '3':
                capex = .05 * assumptions.effectiveGrossIncome;
                break;
            case '4':
                capex = .05 * assumptions.effectiveGrossIncome;
                break;
            case '5':
                capex = .06 * assumptions.effectiveGrossIncome;
                break;
            default: .05 * assumptions.effectiveGrossIncome
        }


        var cost = parseInt(assumptions.price) + parseInt(assumptions.renovations);
        var preCap = assumptions.effectiveGrossIncome - expenses;
        var postCap = preCap - capex;
        var totalYield = (postCap / cost) * 100;

       
        return {
            egi: assumptions.effectiveGrossIncome,
            expenses: expenses,
            preCap: preCap,
            postCap: postCap,
            totalYield: totalYield
        }
    }


    function getAssumptions(inputs) {

        var rent = inputs.rent;
        var gross = (rent * 12);
        var vacancyLoss = gross * .05;
        var creditLoss = gross * .02;
        var effectiveGrossIncome = gross - (vacancyLoss + creditLoss);
        var sqFeet = inputs.sqFeet;
        var hoaFees = inputs.hoaFees;
        var price = inputs.price;
        var renovations = inputs.renovations; 
        var vintage = inputs.vintage;
        var taxes;
        var state = ''; 
       
        
        if (address && address.state) {
            state = this.address.state; 
        } else if(inputs.propertyAddress){
            state = inputs.propertyAddress.state;
        }

        switch (state) {
            case 'Arizona':
                taxes = .011;
                break;
            case 'California':
                taxes = .012;
                break;
            case 'Colorado':
                taxes = .012;
                break;
            case 'Florida':
                taxes = .012;
                break;
            case 'Georgia':
                taxes = .012;
                break;
            case 'Nevada':
                taxes = .012;
                break;
            case 'Texas':
                taxes = .027;
                break;
            default: .012
        }

        taxes = price * taxes;


        return {
            //income
            gross: gross,
            vacancyLoss: vacancyLoss,
            creditLoss: creditLoss,
            effectiveGrossIncome: effectiveGrossIncome,
            //expenses
            hoaFees:hoaFees,
            management:effectiveGrossIncome * .08,
            leaseUp:(rent * .83) / 2,
            maintenance : 60 * 12,
            turnover: rent * .5,
            landscaping : 20,
            insurance: 75 * sqFeet * .0032,
            taxes: taxes,
            specialAssessments: 0,
            other: 0,
            price: price,
            renovations: renovations,
            //other 
            vintage: vintage
        }

    }



    function Utils() {

        this.formatAddress = function (address) {

            //todo refactor this in a more functional style
           var state; 
           var components =  address.address_components.forEach(function (component) {
                component.types.forEach(function(type) {
                    if (type === 'administrative_area_level_1') {
                        state = component.long_name
                    };
              });

           });

           var addr =  {
                formattedAddress: address.formatted_address,
                state: state,
                lat: address.geometry.location.lat(),
                lng: address.geometry.location.lng()
           }
           this.address = addr;
           return addr; 
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
            this.currentInputs.isValid = isValid;

            //calculate assumptions if they haven't been tweaked 
            if (isValid === false && (!this.assumptions || this.assumptions.isDirty !== true)) {
                this.assumptions = getAssumptions(this.currentInputs);
            }

            //calculate yield
            if (isValid === false) {
                this.assumptions.price = inputs.price;
                this.assumptions.renovations = inputs.renovations;
                this.output = calculateYield(this.assumptions);
            }

            return this.currentInputs;
        }

        this.calculate = function (inputs) {
            this.assumptions = getAssumptions(inputs);
        }; 

        this.recalculate = function (assumptions) {
            this.output = calculateYield(assumptions);
        }
    }

})();