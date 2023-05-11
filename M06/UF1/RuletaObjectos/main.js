import Roulette from "./classes/Roulette.js";
import Column from "./classes/Column.js";
import Dozen from "./classes/Dozen.js";
import MissingHappens from "./classes/MissingHappens.js";
import PairSenar from "./classes/PairSenar.js";
import Simple from "./classes/Simple.js";
import RedGreen from "./classes/RedGreen.js";

let Apuesta = document.querySelectorAll("button");
let roulette = new Roulette();

for (let i = 0; i < 37; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  Sencilla.appendChild(opt);
}
Apuesta.forEach((item) => {
  item.addEventListener("click", (e) => {
    let money;
    let bet;
    switch (e.target.value) {
      case "Sencilla":
        money = document.getElementById("dineroSencilla").value;
        bet = new Simple(Sencilla.value, money);
        roulette.playRoulette(bet);
        break;
      case "FaltaPassa":
        money = document.getElementById("dineroFaltaPassa").value;
        bet = new MissingHappens(FaltaPassa.value, money);
        roulette.playRoulette(bet);
        break;
      case "ParellSenar":
        money = document.getElementById("dineroParellSenar").value;
        bet = new PairSenar(ParellSenar.value, money);
        roulette.playRoulette(bet);
        break;
      case "VermellNegre":
        money = document.getElementById("dineroVermellNegre").value;
        bet = new RedGreen(VermellNegre.value, money);
        roulette.playRoulette(bet);
        break;
      case "Dotzena":
        money = document.getElementById("dineroDotzena").value;
        bet = new Dozen(Dotzena.value, money);
        roulette.playRoulette(bet);
        break;
      case "Columna":
        money = document.getElementById("dineroColumna").value;
        bet = new Column(Columna.value, money);
        roulette.playRoulette(bet);
        break;
      default:
        break;
    }
  });
});
