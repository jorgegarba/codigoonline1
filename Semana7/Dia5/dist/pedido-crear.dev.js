"use strict";

var URL_BACKEND = "https://5ec86440155c130016a909c5.mockapi.io";
var selectRepartidor = document.getElementById("selectRepartidor");
var selectCliente = document.getElementById("selectCliente");
var selectProducto = document.getElementById("selectProducto");
var formPedido = document.getElementById("formPedido");
var inputOrigen = document.getElementById("inputOrigen");
var inputDestino = document.getElementById("inputDestino"); // TRAER LOS REPARTIDORES

/**
 * Funcion que trae a los repartidores de la base de datos 
 * y los dibuja en el select
 */

var getRepartidores = function getRepartidores() {
  var dibujar = function dibujar(repartidores) {
    repartidores.forEach(function (repartidor) {
      var option = document.createElement("option");
      option.innerText = "".concat(repartidor.rep_nom, " ").concat(repartidor.rep_ape);
      option.value = repartidor.id; // option.setAttribute("value", repartidor.id)

      selectRepartidor.appendChild(option);
    });
  };

  var endpoint = "".concat(URL_BACKEND, "/repartidor");
  fetch(endpoint).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      dibujar(data);
    });
  });
}; // TRAER LOS CLIENTES

/**
 * Funcion que trae a los clientes de la base de datos 
 * y los dibuja en el select
 */


var getClientes = function getClientes() {
  var dibujar = function dibujar(clientes) {
    clientes.forEach(function (cliente) {
      var option = document.createElement("option");
      option.innerText = "".concat(cliente.cli_nom, " ").concat(cliente.cli_ape);
      option.value = cliente.id; // option.setAttribute("value", cliente.id)

      selectCliente.appendChild(option);
    });
  };

  var endpoint = "".concat(URL_BACKEND, "/cliente");
  fetch(endpoint).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      dibujar(data);
    });
  });
}; // TRAER LOS PRODUCTOS

/**
 * Funcion que trae a los productos de la base de datos 
 * y los dibuja en el select
 */


var getProductos = function getProductos() {
  var dibujar = function dibujar(productos) {
    productos.forEach(function (producto) {
      var option = document.createElement("option");
      option.innerText = "".concat(producto.pro_nom, " | S/ ").concat(producto.pro_prec);
      option.value = producto.id; // option.setAttribute("value", producto.id)

      selectProducto.appendChild(option);
    });
  };

  var endpoint = "".concat(URL_BACKEND, "/producto");
  fetch(endpoint).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      dibujar(data);
    });
  });
};

formPedido.onsubmit = function (e) {
  e.preventDefault();
  var fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
  var objPedido = {
    // En un select, la propiedad value, es el value del option seleccionado
    id_pro: selectProducto.value,
    id_rep: selectRepartidor.value,
    id_cli: selectCliente.value,
    ped_ini: inputOrigen.value,
    ped_fin: inputDestino.value,
    ped_est: 'solicitado',
    ped_fech: fecha
  };
  fetch("".concat(URL_BACKEND, "/pedido"), {
    method: 'POST',
    body: JSON.stringify(objPedido),
    headers: {
      "Content-type": "application/json"
    }
  }).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

getRepartidores();
getClientes();
getProductos();