import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import {Income} from "./models/Income";
import {Expense} from "./models/Expense";
import {Yield} from "./models/Yield";

describe('CalculatorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  //ng test --sourcemaps=false

  it('should correctly calculate a yield', inject([CalculatorService], (service: CalculatorService) => {

    //arrange
    service.yield = new Yield(new Income(500), new Expense(100000, 1500,600,0));
    service.calculateYield();

    //assert
    expect(service.yield.grossYield).toBeCloseTo(6);

  }));

});
