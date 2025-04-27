/* 7- Escriba un script que muestre la tabla de multiplicar de un número 
ingresado por pantalla, la creación de la tabla debe ser realizada con una 
función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const tabla = parseInt(prompt("¿Qué tabla de multiplicar deseas ver?"));

function tablaDelX(tabla) {
    document.writeln(`<h1>Tabla del ${tabla}</h1>`)
  for (let i = 0; i <= 10; i++) {
    document.writeln(`<p>${[tabla]} x ${[i]} = ${[i] * tabla}</p>`);
  }
}

tablaDelX(tabla);
