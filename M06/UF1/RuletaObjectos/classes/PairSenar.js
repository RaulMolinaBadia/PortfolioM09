import Bet from "./Bet.js";
export default class PairSenar extends Bet {
  constructor(value, money) {
    super(value, money);
  }

  check(number) {
    if (this.value == "Parell") {
      if (number % 2 == 0) {
        alert(`has ganado ${this.money * 2}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    } else if (this.value == "Senar") {
      if (number % 2 != 0) {
        alert(`has ganado ${this.money * 2}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    }
  }
}
