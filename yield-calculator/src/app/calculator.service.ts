import { Injectable } from '@angular/core';
import {Yield} from "./models/Yield";
import {Income} from "./models/Income";
import {Expense} from "./models/Expense";

@Injectable()
export class CalculatorService {

  yield:Yield;
  rent:number = 1900;
  purchasePrice:number = 260000;
  taxes:number = 2750;
  maintenance = 1200;
  other = 0;

  constructor() {
    this.setPresetConditions();
  }

  private setPresetConditions():void {
    this.yield = new Yield(new Income(this.rent), new Expense(this.purchasePrice, this.taxes,this.maintenance,this.other));
    this.calculateYield();
  }

  public calculateYield() {
    this.yield.grossYield =  ((this.yield.income.rent * 12) / this.yield.expense.purchasePrice) * 100;
    this.yield.netYield = (((this.yield.income.rent * 12) - (this.yield.expense.taxes + this.yield.expense.maintenance + this.yield.expense.other)) / this.yield.expense.purchasePrice) * 100;
  }

}
