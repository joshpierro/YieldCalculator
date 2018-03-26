import { Injectable } from '@angular/core';
import {Yield} from "./models/Yield";
import {Income} from "./models/Income";
import {Expense} from "./models/Expense";

@Injectable()
export class CalculatorService {

  yield:Yield;
  readonly RENT = 1900;
  readonly PURCHASE_PRICE = 260000;
  readonly TAXES = 2750;
  readonly MAINTENENCE = 1200;
  readonly OTHER = 0;

  constructor() {
    this.setPresetConditions();
  }

  private setPresetConditions():void {
    this.yield = new Yield(new Income(this.RENT), new Expense(this.PURCHASE_PRICE, this.TAXES,this.MAINTENENCE,this.OTHER));
    this.calculateYield();
  }

  public calculateYield() {
    this.yield.grossYield =  ((this.yield.income.rent * 12) / this.yield.expense.purchasePrice) * 100;
    this.yield.netYield = (((this.yield.income.rent * 12) - (this.yield.expense.taxes + this.yield.expense.maintenance + this.yield.expense.other)) / this.yield.expense.purchasePrice) * 100;
  }

}
