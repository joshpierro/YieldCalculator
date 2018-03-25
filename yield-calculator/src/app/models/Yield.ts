import {Expense} from "./Expense";
import {Income} from "./Income";

export class Yield {
  expense: Expense;
  grossYield:number;
  netYield:number;
  income: Income;


  constructor(income: Income, expense: Expense) {
    this.income = income;
    this.expense = expense;
  }
}
