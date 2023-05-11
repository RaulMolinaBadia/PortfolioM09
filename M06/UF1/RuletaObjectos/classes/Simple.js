import Bet from "./Bet.js";
export default class Simple extends Bet {
  constructor(value, money) {
    super(value, money);
  }

  //TODO en vez de alert devolver el dinero
  check(number) {
    let result = super.check(number);

    if (number == this.value) {
      alert(`has ganado ${this.money * 35} `);
      // result.money = this.money * 35;
    } else {
      alert(`has perdido ${this.money}`);
      // result.money = this.money;
    }

    return result;
  }
}
