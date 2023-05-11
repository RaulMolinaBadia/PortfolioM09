import Bet from "./Bet.js";
export default class Dozen extends Bet {
  constructor(value, money) {
    super(value, money);
  }
  check(number) {
    if (number >= this.value[1] && number <= this.value[2]) {
      alert(`has ganado ${this.money * 2}`);
    } else if (number == 0) {
      alert(`has perdido ${this.money / 2}`);
    } else {
      alert(`has perdido ${this.money}`);
    }
  }
}
