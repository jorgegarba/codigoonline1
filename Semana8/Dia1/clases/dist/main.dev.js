"use strict";

var _Repartidor = require("./Repartidor.js");

var _Cliente = require("./Cliente.js");

var objRepartidor = new _Repartidor.Repartidor();
objRepartidor.nombre = "Jorge";
objRepartidor.apellido = "Garnica";
console.log(objRepartidor); // CLiente() => significa que están llamando al método construtor del objeto

var objCliente = new _Cliente.Cliente('Pancho', 'Hernandez', '34232312', 1, "123-123");
console.log(objCliente);