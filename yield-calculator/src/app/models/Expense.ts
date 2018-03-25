export class Expense{
  insurance:number;
  maintenance:number;
  purchasePrice:number;
  taxes:number;
  turnover:number;
  other:number;

  constructor(purchasePrice: number) {
    this.purchasePrice = purchasePrice;
  }
}
