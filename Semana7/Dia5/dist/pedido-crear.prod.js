"use strict";var URL_BACKEND="https://5ec86440155c130016a909c5.mockapi.io",selectRepartidor=document.getElementById("selectRepartidor"),selectCliente=document.getElementById("selectCliente"),selectProducto=document.getElementById("selectProducto"),formPedido=document.getElementById("formPedido"),inputOrigen=document.getElementById("inputOrigen"),inputDestino=document.getElementById("inputDestino"),getRepartidores=function(){var e="".concat(URL_BACKEND,"/repartidor");fetch(e).then(function(e){e.json().then(function(e){console.log(e),function(e){e.forEach(function(e){var t=document.createElement("option");t.innerText="".concat(e.rep_nom," ").concat(e.rep_ape),t.value=e.id,selectRepartidor.appendChild(t)})}(e)})})},getClientes=function(){var e="".concat(URL_BACKEND,"/cliente");fetch(e).then(function(e){e.json().then(function(e){console.log(e),function(e){e.forEach(function(e){var t=document.createElement("option");t.innerText="".concat(e.cli_nom," ").concat(e.cli_ape),t.value=e.id,selectCliente.appendChild(t)})}(e)})})},getProductos=function(){var e="".concat(URL_BACKEND,"/producto");fetch(e).then(function(e){e.json().then(function(e){console.log(e),function(e){e.forEach(function(e){var t=document.createElement("option");t.innerText="".concat(e.pro_nom," | S/ ").concat(e.pro_prec),t.value=e.id,selectProducto.appendChild(t)})}(e)})})};formPedido.onsubmit=function(e){e.preventDefault();var t=(new Date).getDate()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getFullYear(),n={id_pro:selectProducto.value,id_rep:selectRepartidor.value,id_cli:selectCliente.value,ped_ini:inputOrigen.value,ped_fin:inputDestino.value,ped_est:"solicitado",ped_fech:t};fetch("".concat(URL_BACKEND,"/pedido"),{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then(function(e){e.json().then(function(e){console.log(e)})})},getRepartidores(),getClientes(),getProductos();