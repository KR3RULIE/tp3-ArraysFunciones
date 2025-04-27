/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un 
rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b) */

const ladoA = parseInt(prompt("Ingrese el lado A del rectángulo:"));
const ladoB = parseInt(prompt("Ingrese el lado B del rectángulo:"));

function perimetro(ladoA, ladoB) {
  return document.writeln(
    `El perimetro del rectángulo es: ${2 * (ladoA + ladoB)}`
  );
}

perimetro(ladoA, ladoB);
