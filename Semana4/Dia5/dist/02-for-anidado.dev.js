"use strict";

var estadoCuenta = [["Enero", "pagado"], ["Febrero", "pagado"], ["Marzo", "pendiente"], ["Abril", "pendiente"], ["Mayo", "pendiente"], ["Junio", "pagado"], ["Julio", "pendiente"], ["Agosto", "pendiente"], ["Septiembre", "pagado"], ["Octubre", "pendiente"], ["Noviembre", "pagado"], ["Diciembre", "pendiente"]]; // let opcion = prompt("Ingresa 'pendiente' ó 'pagado' ");

var opcion = 'pagado';

for (var i = 0; i < estadoCuenta.length; i++) {
  if (estadoCuenta[i][1] === opcion) {
    continue;
  }

  console.log("".concat(estadoCuenta[i][0], " mes pagado"));
}

console.log("////////////////////////////////");
var notas = [20, 20, 19, 19, 18.5, 17, 16.14, 13, 11, 10, 9, 5, 3, 1, 1, 0]; //imprimir los aprobados ( >= 12 )

for (var j = 0; j < notas.length; j++) {
  if (notas[j] < 12) {
    break;
  }

  console.log(notas[j]);
}

console.log("//////////////////////");

for (var _i = 6; _i < 10; _i++) {
  console.log("---Tabla del ".concat(_i, "---"));

  for (var _j = 0; _j < 10; _j++) {
    console.log("".concat(_i, " X ").concat(_j, " = ").concat(_i * _j));
  }
}

console.log("//////////////////////////");
var matriz = [[13, 45, 53, 0], [55, 23, 11, -1], [90, 9, 33, 1]];

for (var _i2 = 0; _i2 < matriz.length; _i2++) {
  var fila = "";

  for (var _j2 = 0; _j2 < matriz[_i2].length; _j2++) {
    fila = fila + " " + matriz[_i2][_j2];
  }

  console.log(fila);
}

console.log("/////////////////");

for (var _i3 = 0; _i3 < 5; _i3++) {
  var _fila = "";

  for (var _j3 = 0; _j3 <= _i3; _j3++) {
    _fila = _fila + "*";
  }

  console.log(_fila);
}