export default class Roulette {
  constructor() {
    this.bets = [];
  }

  playRoulette(bet) {
    let random = Math.floor(Math.random() * 37);
    bet.check(random);
    this.bets.push(bet);
    console.log(this.bets);
  }
}
