let Sencilla = document.getElementById("Sencilla");
let FaltaPassa = document.getElementById("FaltaPassa");
let ParellSenar = document.getElementById("ParellSenar");
let VermellNegre = document.getElementById("VermellNegre");
let Dotzena = document.getElementById("Dotzena");
let Columna = document.getElementById("Columna");
let Apuesta = document.querySelectorAll("button");
let random = Math.floor(Math.random() * 37);
let table = document.querySelector("table");
let rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let negro = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];
let contador = 0;
for (let i = 0; i < 37; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  Sencilla.appendChild(opt);
}
const CheckSencilla = () => {
  let number = Sencilla.value;
  let dinero = document.getElementById("dineroSencilla").value;
  if (number == random) {
    alert(`has ganado ${dinero} * 35`);
  } else {
    alert(`has perdido ${dinero}`);
  }
};

const CheckFaltaPassa = () => {
  let number = FaltaPassa.value;
  let dinero = document.getElementById("dineroFaltaPassa").value;
  if (number == "Falta") {
    if (random > 1 && random <= 18) {
      alert(`has ganado ${dinero * 35}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  } else if (number == "Passa") {
    if (random > 18 && random <= 36) {
      alert(`has ganado ${dinero * 35}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  }
};

const CheckParellSenar = () => {
  let number = ParellSenar.value;
  let dinero = document.getElementById("dineroColumna").value;

  if (number == "Parell") {
    if (random % 2 == 0) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  } else if (number == "Senar") {
    if (random % 2 != 0) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  }
};

const CheckVermellNegre = () => {
  let number = VermellNegre.value;
  let dinero = document.getElementById("dineroVermellNegre").value;

  if (number == "Vermell") {
    if (rojo.includes(random)) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  } else if (number == "Negre") {
    if (negro.includes(random)) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  }
};

const CheckDotzena = () => {
  let number = Dotzena.value;
  number = number.split("-");
  let dinero = document.getElementById("dineroDotzena").value;

  if (random >= number[1] && random <= number[2]) {
    alert(`has ganado ${dinero * 2}`);
  } else if (random == 0) {
    alert(`has perdido ${dinero / 2}`);
  } else {
    alert(`has perdido ${dinero}`);
  }
};

const CheckColumna = () => {
  let number = Columna.value;
  let dinero = document.getElementById("dineroColumna").value;
  if (number == "1-34") {
    if (random % 3 == 1) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  } else if (number == "2-35") {
    if (random % 3 == 2) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  } else if (number == "3-36") {
    if (random % 3 == 0) {
      alert(`has ganado ${dinero * 2}`);
    } else {
      alert(`has perdido ${dinero}`);
    }
  }
};
const InsertRow = () => {};
const ViewStadistics = (e) => {
  let lastElement = table.lastElementChild;
  let newRow = lastElement.insertRow();
  for (let index = 0; index < 6; index++) {
    let numBet = newRow.insertCell();
    let numBetTxt = document.createTextNode(e.target.value);
    numBet.appendChild(numBetTxt);
  }
};
Apuesta.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "Sencilla":
        CheckSencilla();
        break;
      case "FaltaPassa":
        CheckFaltaPassa();
        break;
      case "ParellSenar":
        CheckParellSenar();
        break;
      case "VermellNegre":
        CheckVermellNegre();
        break;
      case "Dotzena":
        CheckDotzena();
        break;
      case "Columna":
        CheckColumna();
        break;
      default:
        break;
    }
    ViewStadistics(e);
  });
});
