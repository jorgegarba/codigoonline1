// switch case
// estructura que sirve para evaluar 
// varios posibles valores para una variable

let dia = 2;
let rpta = "";
// se coloca la variable a evaluar
switch (dia) {
 case 1:
  rpta = "Lunes";
  break;
 case 7:
  rpta = "Dormingo";
  break;
 case 2:
  rpta = "Martes";
  break;
 case 3:
  rpta = "Miercoles";
  break;
 case 4:
  rpta = "Jueves";
  break;
 case 5:
  rpta = "Viernes";
  break;
 case 6:
  rpta = "Sabado";
  break;
 default:
  rpta = "Errosh";
}
console.log(rpta);


// Ejercicio
// El usuario ingresa 5 posibles nombres de colores
// red, blue, white, black o green
// el sistema de imprimir el valor hexadecimal de dicho 
// color.
let color = prompt("ingrese color");
switch (color) {
 case "red":
  console.log("#FF0000");
  break;
 case "blue":
  console.log("#0000FF");
  break;
 case "white":
  console.log("#FFFFFF");
  break;
 case "black":
  console.log("#000000");
  break;
 case "green":
  console.log("#00FF00");
  break;
 default:
  console.log("error");
}