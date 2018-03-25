export class Expense {
  insurance: number;
  maintenance: number;
  purchasePrice: number;
  taxes: number;
  turnover: number;
  other: number;

  constructor(purchasePrice: number, taxes: number, maintenance: number, other: number) {
    this.purchasePrice = purchasePrice;
    this.taxes = taxes;
    this.maintenance = maintenance;
    this.other = other;
  }
}
