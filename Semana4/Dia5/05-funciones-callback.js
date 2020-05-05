const areaCirculo = (radio) => {
 const PI = 3.1416;
 const cuadrado = (numero) => {
  return numero * numero;
 }
 let rpta = PI * cuadrado(radio);
 return rpta;
}

let area = areaCirculo(25);
console.log(area);



