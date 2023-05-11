const AllAnswers = document.querySelectorAll(".respuesta");
const hola = document.querySelectorAll("#ViewAnswers");

let CorrectAnswers = ["Verde", "7", "1", "a","4", "AA", "Asar", "31", "a", "17", "Piedra",];
let UserAnswers = [null,null,null,null,null,null, null, null, null, null, null,];

const SaveAnswers = (event) => {
  let pregunta = window.location.href.split("#");
  if (pregunta[1] == "ver") {
    checkAnswers();
  } else {
    UserAnswers[pregunta[1] - 1] = event.target.innerHTML;
  }
  console.log(UserAnswers);
};

const checkAnswers = () => {
  let i = 0;
  CorrectAnswers.forEach((CheckAnswerCorrect) => {
    if (CheckAnswerCorrect == UserAnswers[i]) {
      document.getElementById("respuesta" + (i+1)).innerHTML =
        "La respuesta es correcta";
      i++;
    } else if (UserAnswers[i] == null) {
      document.getElementById("respuesta" + (i + 1)).innerHTML =
        "La respuesta no se a respondido";
      i++;
    }else{
        document.getElementById("respuesta" + (i + 1)).innerHTML =
          "La respuesta no es correcta";
        i++;
    }
  });
};

AllAnswers.forEach((item) => {
  item.addEventListener("click", SaveAnswers);
});

hola.forEach((j) => {
  j.addEventListener("click", checkAnswers);
});