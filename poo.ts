class Sale{
  amount: number;
  constructor(amount: number){
    this.amount = amount
  }
  getTotal(): number{
    return this.amount
  }
};

class saleTax extends Sale {
  private tax: number = 0;
  constructor(tax: number, amount: number){
    super(amount);
    this.tax = tax;
  }
  override getTotal(): number {
      return this.tax + this.amount
  }
}

let sale1 = new Sale(14);
let saletax = new saleTax(15, 198);
console.log(saletax.getTotal());


sale1.amount = 299;
console.log(sale1.getTotal());