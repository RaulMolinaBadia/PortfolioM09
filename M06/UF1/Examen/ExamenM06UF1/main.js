let array = [
    [1, 5, 8, 10, 2],
    [22, 12, 3, 9, 11],
    [78, 34, 4, 15, 20],
    [9, 0, 32, 18, 64],
    [6, 52, 14, 38, 77],
];
let colors = document.querySelectorAll("table.select tbody tr td");
let contador = 1;
let arrayColors = [];
let nivelPaswd = ["Dolenta", "Poc Segur", "Segura", "Molt Segura"];
let nivel = [];
// let nivel = ['Més de 7 caràcters','Contenir lletres en majúscules i minúscules','Contenir els següents caràcters especials , . - ! $ % & ( )','Contenir espais']
const cercarParella = (array) => {
    console.log(array[0]);
    let lastnum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == lastnum) {
                return `<span>${[lastnum, array[(i, j)]]}</span>`;
            } else {
                // console.log(array[i][j]);
            }
        }
    }
};
const cercarEx1 = () => {
    document.querySelector("#resultatEx1").innerHTML = cercarParella(array);
};

function jugarEx2(params) {
    let piedra = document.getElementById("pedra").checked;
    let papel = document.getElementById("paper").checked;
    let tijera = document.getElementById("tisores").checked;
    let option = ["piedra", "papel", "tijera"];
    let cpu = Math.floor(Math.random() * option.length);
    let user = "";

    if (piedra == true) {
        user = "piedra";
        document.getElementById("resultatUsuari").innerHTML = user;
        document.getElementById("resultatPc").innerHTML = option[cpu];
        if (option[cpu] == "tijera") {
            alert("ganana user");
        } else if (option[cpu] == "papel") {
            alert("gana cpu");
        } else if (option[cpu] == "piedra") {
            alert("empate");
        }
    } else if (papel == true) {
        user = "papel";
        document.getElementById("resultatUsuari").innerHTML = user;
        document.getElementById("resultatPc").innerHTML = option[cpu];
        if (option[cpu] == "piedra") {
            alert("ganana user");
        } else if (option[cpu] == "tijera") {
            alert("gana cpu");
        } else if (option[cpu] == "papel") {
            alert("empate");
        }
    } else if (tijera == true) {
        user = "tijeras";
        document.getElementById("resultatUsuari").innerHTML = user;
        document.getElementById("resultatPc").innerHTML = option[cpu];
        if (option[cpu] == "papel") {
            alert("ganana user");
        } else if (option[cpu] == "piedra") {
            alert("gana cpu");
        } else if (option[cpu] == "tijeras") {
            alert("empate");
        }
    }
}

function selecciona(color) {
    let bolita;

    if (contador < 7) {
        if (!arrayColors.includes(color)) {
            arrayColors.push(color);
            let bolita = document.querySelector(
                `table.select tbody tr .color:nth-child(${contador})`
            );
            bolita.classList.add(`${color}`);
            contador++;
            console.log(contador);
        }
    }
    // let colors = document.querySelectorAll("table.select tbody tr td");
}
function PilaColors() {
    arrayColors.pop();
    contador--;
    let bolita = document.querySelector(
        `table.select tbody tr .color:nth-child(${contador})`
    );
    bolita.className = "";
    bolita.classList.add("color");
}

function checkPassword() {
    let paswd = document.getElementById("passwordEx4").value;
    RecorrerPaswd(paswd);
    let div1 = document.querySelector(".resultatEx4:nth-child(1)");
    let div2 = document.querySelector(".resultatEx4:nth-child(2)");
    console.log(nivel);
    if (nivel.length == 0) {
        div1.classList.add("dolenta");
        div1.innerHTML = nivelPaswd[0];
        div2.innerHTML = RecorrerNivel(nivel);
    } else if (nivel.length == 1) {
        div1.classList.add("poc");
        div1.classList.remove("dolenta");
        div1.innerHTML = nivelPaswd[1];
        div2.innerHTML = RecorrerNivel(nivel);
    } else if (nivel.length == 2) {
        div1.classList.add("segura");
        div1.classList.remove("dolenta");
        div1.classList.remove("poc");
        div1.innerHTML = nivelPaswd[2];
        div2.innerHTML = RecorrerNivel(nivel);
    } else if (nivel.length == 3) {
        div1.classList.remove("dolenta");
        div1.classList.remove("poc");
        div1.classList.remove("segura");
        div1.classList.add("molt");
        div1.innerHTML = nivelPaswd[3];
        div2.innerHTML = RecorrerNivel(nivel);
    }
}

function RecorrerPaswd(array) {
    nivel = [];
    let mayus = false;
    let minus = false;
    if (String(array).length > 7) {
        nivel.push("Més de 7 caràcters");
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

        if (String(array[i]) == String(array[i]).toUpperCase) {
            mayus = true;
        }
        if (String(array[i]) == String(array[i]).toLowerCase) {
            minus = true;
        }
        if (String(array[i]) == " ") {
            nivel.push("Contenir espais");
        }
        if (
            String(array[i]) == "?" ||
            String(array[i]) == "," ||
            String(array[i]) == "." ||
            String(array[i]) == "-" ||
            String(array[i]) == "!" ||
            String(array[i]) == "$" ||
            String(array[i]) == "%" ||
            String(array[i]) == "&" ||
            String(array[i]) == String("/")
        ) {
            nivel.push(
                "Contenir els següents caràcters especials , . - ! $ % & ( )"
            );
        }
        if (minus == true && mayus == true) {
            nivel.push("Contenir lletres en majúscules i minúscules");
        }
    }
}
function RecorrerNivel(array) {
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text += array[i];
    }
    return text;
}
function Cercar() {
    let text = document.getElementById("textCerca").value;
    let startMark = document.getElementById("marcaIncial").value;
    let endMark = document.getElementById("marcaFinal").value;
    searchText(text, startMark, endMark);
}
function searchText(text, startMark, endMark) {
    let textSelect = "";
    for (let i = 0; i < text.length; i++) {
        if (i >= startMark && i <= endMark) {
            textSelect += text[i];
        }
    }
    alert(textSelect);
}

class Conductor {
    origen;
    desti;
    kms;
}
class Vehicle {
    constructor(conductor) {
        this.conductor = conductor;
    }
    avançar() {}
}
class Coche extends Vehicle {
}
class Moto extends Vehicle {}
class Camion extends Vehicle {}

function Iniciar(){
    let conductorCoche = new Conductor();
    let conductorMoto = new Conductor();
    let conductorCamion = new Conductor();
    
    let OrigenCoche = document.getElementById("origenCoche").value;
    conductorCoche.origen = OrigenCoche;
    let OrigenMoto = document.getElementById("origenMoto").value;
    conductorMoto.origen = OrigenMoto;
    let OrigenCamion = document.getElementById("origenCamio").value;
    conductorCamion.origen = OrigenCamion;
    
    let DestinoCoche = document.getElementById("DestiCoche").value;
    conductorCoche.desti = DestinoCoche;
    let DestinoMoto = document.getElementById("DestiMoto").value;
    conductorMoto.desti = DestinoMoto;
    let DestinoCamion = document.getElementById("DestiCamio").value;
    conductorCamion.desti = DestinoCamion;
    
    let KmCoche = document.getElementById("kmsCoche").value;
    conductorCoche.kms = KmCoche;
    let KmMoto = document.getElementById("kmsMoto").value;
    conductorMoto.kms = KmMoto;
    let KmCamion = document.getElementById("kmsCamio").value;
    conductorCamion.kms = KmCamion;
    let coche = new Coche(conductorCoche);
    let moto = new Moto(conductorMoto)
    let camion = new Camion(conductorCamion)
    console.log(coche);
    console.log(moto);
    console.log(camion);
}