let dni = document.querySelector("#dni");
let letterDniInput = document.querySelector("#numDni");
let nameInput = document.querySelector("#nombre");
let subNameInput = document.querySelector("#apellidos");
let emailInput = document.querySelector("#email");
let streetInput = document.querySelector("#calle");
let populationInput = document.querySelector("#poblacion");
let provinceInput = document.querySelector("#provincia");
let compressetCheckBox = document.querySelector("#comprimido");
let encriptedCheckBox = document.querySelector("#encriptado");
let descriptionFileText = document.querySelector("#descripcion");
let submit = document.querySelector("#submit");

const checkDniValid = (e) => {
    let letter = letterDniInput.value.toUpperCase();
    let num = dni.value % 23;
    let letterDni = "TRWAGMYFPDXBNJZSQVHLCKET";
    let letterCorrect = letterDni.substring(num, num + 1);
    if (letterCorrect != letter || isNaN(dni.value)) {
        dni.setCustomValidity("El DNI es invalido");
        dni.reportValidity();
        dni.classList.remove("success");
        letterDniInput.classList.remove("success");
        dni.classList.add("error");
        letterDniInput.classList.add("error");
        submit.disabled = true;
    } else {
        dni.setCustomValidity("");
        dni.reportValidity();
        dni.classList.remove("error");
        letterDniInput.classList.remove("error");
        dni.classList.add("success");
        letterDniInput.classList.add("success");
        submit.disabled = false;
    }
    checkEmptyInput(e);
};

const checkEmptyInput = (e) => {
    return e.value === ""
        ? e.classList.add("error")
        : e.classList.remove("error");
};

dni.addEventListener(('input', 'blur'), (e) => checkDniValid(e.target));
letterDniInput.addEventListener("input", (e) => checkDniValid(e.target));
nameInput.addEventListener(("input", "blur"), (e) => checkEmptyInput(e.target));
subNameInput.addEventListener(("input", "blur"), (e) =>
    checkEmptyInput(e.target)
);
