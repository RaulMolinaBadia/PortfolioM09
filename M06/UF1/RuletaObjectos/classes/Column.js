import Bet from "./Bet.js";
export default class Column extends Bet {
  constructor(value, money) {
    super(value, money);
  }
  check(number) {
    if (this.value == "1-34") {
      if (number % 3 == 1) {
        alert(`has ganado ${this.money * 2}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    } else if (this.value == "2-35") {
      if (number % 3 == 2) {
        alert(`has ganado ${this.money * 2}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    } else if (this.value == "3-36") {
      if (number % 3 == 0) {
        alert(`has ganado ${this.money * 2}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    }
  }
}
