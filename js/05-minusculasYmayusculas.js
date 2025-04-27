/* 5- Definir una función que muestre información sobre una cadena de 
texto que se le pasa como argumento. A partir de la cadena que se le 
pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas. */

const cadena = prompt("Ingrese una cadena de texto");
let minus = 0;
let mayus = 0;

function minusculasYmayusculas(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() === cadena[i]) {
      minus++;
    } else if (cadena[i].toUpperCase() === cadena[i]) {
      mayus++;
    }
  }
  if (minus > mayus && mayus === 0) {
    document.writeln("Lacada de texto ingresada solo contiene minusculas.");
  } else if (mayus > minus && minus === 0) {
    document.writeln("Lacada de texto ingresada solo contiene mayusculas.");
  } else {
    document.writeln("Lacada de texto ingresada contiene minusculas y mayusculas.");
  }
}

minusculasYmayusculas(cadena);