/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de 
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar 
se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

const ciudades = [];

do {
  ciudades.push(prompt("Ingrese una ciudad:"));
} while (confirm("¿Desea realizar otra operación?"));

document.writeln(`Tu array tiene ${ciudades.length} elementos`)

document.writeln(`<ul>`);
  document.writeln(`<li>Primer elemento: ${ciudades[0]}</li>`);
  document.writeln(`<li>Tercer elemento: ${ciudades[2]}</li>`);
  document.writeln(`<li>Ultimo elemento: ${ciudades[ciudades.length - 1]}</li>`);
document.writeln(`</ul>`);


document.writeln(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);