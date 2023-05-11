import Bet from "./Bet.js";
export default class MissingHappens extends Bet {
  constructor(value, money) {
    super(value, money);
  }
  check(number) {
    if (this.value == "Falta") {
      if (number > 1 && number <= 18) {
        alert(`has ganado ${this.money * 35}`);
      } else {
        alert(`has perdido ${(this.money)}`);
      }
    } else if (this.value == "Passa") {
      if (number > 18 && number <= 36) {
        alert(`has ganado ${(this.money * 35)}`);
      } else {
        alert(`has perdido ${(this.money)}`);
      }
    }
  }
}
