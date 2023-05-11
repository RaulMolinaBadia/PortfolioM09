// // Js te mostrara una alerta en forma de pop up con el texto que tiene dentro
// alert("Hola Mundo!");
// let mensaje = "Soy el primer script";
// alert(mensaje);
// let meses = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre",
// ];
// alert(meses);

// let valores = [true, 5, false, "hola", "adios", 2];

// // ex1
// alert(valores[3] > valores[4] ? valores[3] : valores[4]);
// window.onload = function () {
//   operacionesEx3();
//   ex2();
// };
// function ex2() {
//   if (valores[0] || valores[2]) {
//     console.log(true);
//   } else if (valores[0] & valores[2]) {
//     console.log(object);
//   }
// }

// // ex3
// function operacionesEx3() {
//   let suma = valores[1] + valores[5];
//   alert(suma);
//   let resta = valores[1] - valores[5];
//   alert(resta);
//   let multi = valores[1] * valores[5];
//   alert(multi);
//   let devision = valores[1] / valores[5];
//   alert(devision);
//   let modulo = valores[1] % valores[5];
//   alert(modulo);
// }
// var numero1 = 5;
// var numero2 = 8;
// if (numero1 < numero2) {
//   alert("numero1 no es mayor que numero2");
// }
// if (numero2 > 0) {
//   alert("numero2 es positivo");
// }
// if (numero1 != 0 || numero1 < 0) {
//   alert("numero1 es negativo o distinto de cero");
// }
// if (numero1 + 1 >= numero2) {
//   alert(
//     "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
//   );
// }

// let letras = [
//   "T",
//   "R",
//   "W",
//   "A",
//   "G",
//   "M",
//   "Y",
//   "F",
//   "P",
//   "D",
//   "X",
//   "B",
//   "N",
//   "J",
//   "Z",
//   "S",
//   "Q",
//   "V",
//   "H",
//   "L",
//   "C",
//   "K",
//   "E",
//   "T",
// ];

// let numDni = prompt("numero DNI");
// let letraDni = prompt("letra DNI");

// if (numDni < 0 || numDni > 99999999) {
//   alert("El numero indicado no es valido");
// } else {
//   let letra = CalcularLetraDni();
//   if (letra != letraDni) {
//     alert("la letra que ha indicado no es correcta");
//   } else {
//     alert("el número y la letra de DNI son correctos.");
//   }
// }

// function CalcularLetraDni() {
//   let letra = numDni % 23;
//   return letra;
// }

// let numero = prompt("numero");
// alert(CalcularFactorial(numero));

// function CalcularFactorial(numero) {
//   for (let index = numero - 1; index > 0; index--) {
//     numero *= index;
//   }
//   return numero;
// }

let numero = prompt("numero");

if (numero % 2 == 0) {
  alert("par");
} else {
  alert("inpar");
}
