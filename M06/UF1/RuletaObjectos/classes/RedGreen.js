import Bet from "./Bet.js";
export default class RedGreen extends Bet {
  constructor(value, money) {
    super(value, money);
  }

  check(number) {
    let rojo = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ];
    let negro = [
      2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
    ];
    if (this.value == "Vermell") {
      if (rojo.includes(number)) {
        alert(`has ganado ${this.money * 35}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    } else if (this.value == "Negre") {
      if (negro.includes(number)) {
        alert(`has ganado ${this.money * 35}`);
      } else {
        alert(`has perdido ${this.money}`);
      }
    }
  }
}
