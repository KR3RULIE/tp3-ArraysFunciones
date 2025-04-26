/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de 
la función Math.random para obtener números aleatorios entre 1 y 6 para cada 
uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones de dicha suma, repitiendo 50 
veces esta operación.*/

const contadora = new Array(13).fill(0);

for (let i = 0; i <= 50; i++) {
  let dado1 = Math.floor(Math.random() * 6 + 1);
  let dado2 = Math.floor(Math.random() * 6 + 1);
  let suma = dado1 + dado2;
  contadora[suma]++;
}

document.writeln(`<table>`);
document.writeln(
  "<thead><tr><th>Suma 🎲🎲</th><th>Apariciones</th></tr></thead>"
);
document.writeln(`<tbody>`);
for (let suma = 2; suma <= 12; suma++) {
  document.writeln(`<tr>`);
  document.writeln(`<td>${suma}</td>`);
  document.writeln(`<td>${contadora[suma]}</td>`);
  document.writeln(`</tr>`);
}
document.writeln(`</tbody>`);
document.writeln(`</table>`);
