const URL_BACKEND = "https://5ec86440155c130016a909c5.mockapi.io";
let selectRepartidor = document.getElementById("selectRepartidor");
let selectCliente = document.getElementById("selectCliente");
let selectProducto = document.getElementById("selectProducto");
let formPedido = document.getElementById("formPedido");
let inputOrigen = document.getElementById("inputOrigen");
let inputDestino = document.getElementById("inputDestino");

// Creando variable del mapa
let mymap = L.map('mapa').setView([-16.4028734, -71.5137748], 13);
// Configurando la clave del mapa
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 id: 'mapbox/streets-v11',
 tileSize: 512,
 zoomOffset: -1,
 accessToken: 'pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw'
}).addTo(mymap);

// Creando los 2 marcadores (inicio y fin)
var iconoIni = L.icon({
 iconUrl: './img/marker-ini.png',
 iconSize: [32, 32], // size of the icon
 iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
});
let marcadorIni = L.marker([-16.402, -71.513], { icon: iconoIni, draggable: true }).addTo(mymap);
marcadorIni.on("dragend", (e) => {
 inputOrigen.value = JSON.stringify({ lat: e.target._latlng.lat, lng: e.target._latlng.lng })
})


var iconoFin = L.icon({
 iconUrl: './img/marker-fin.png',
 iconSize: [32, 32], // size of the icon
 iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
});
let marcadorFin = L.marker([-16.405, -71.514], { icon: iconoFin, draggable: true }).addTo(mymap);
marcadorFin.on("dragend", (e) => {
 inputDestino.value = JSON.stringify({ lat: e.target._latlng.lat, lng: e.target._latlng.lng })
})


// TRAER LOS REPARTIDORES
/**
 * Funcion que trae a los repartidores de la base de datos 
 * y los dibuja en el select
 */
const getRepartidores = () => {
 const dibujar = (repartidores) => {
  repartidores.forEach(repartidor => {
   let option = document.createElement("option");
   option.innerText = `${repartidor.rep_nom} ${repartidor.rep_ape}`;
   option.value = repartidor.id;
   // option.setAttribute("value", repartidor.id)
   selectRepartidor.appendChild(option);
  });
 }
 let endpoint = `${URL_BACKEND}/repartidor`;
 fetch(endpoint).then((response) => {
  response.json().then((data) => {
   console.log(data);
   dibujar(data);
  })
 })
}
// TRAER LOS CLIENTES
/**
 * Funcion que trae a los clientes de la base de datos 
 * y los dibuja en el select
 */
const getClientes = () => {
 const dibujar = (clientes) => {
  clientes.forEach(cliente => {
   let option = document.createElement("option");
   option.innerText = `${cliente.cli_nom} ${cliente.cli_ape}`;
   option.value = cliente.id;
   // option.setAttribute("value", cliente.id)
   selectCliente.appendChild(option);
  });
 }
 let endpoint = `${URL_BACKEND}/cliente`;
 fetch(endpoint).then((response) => {
  response.json().then((data) => {
   console.log(data);
   dibujar(data);
  })
 })
}
// TRAER LOS PRODUCTOS
/**
 * Funcion que trae a los productos de la base de datos 
 * y los dibuja en el select
 */
const getProductos = () => {
 const dibujar = (productos) => {
  productos.forEach(producto => {
   let option = document.createElement("option");
   option.innerText = `${producto.pro_nom} | S/ ${producto.pro_prec}`;
   option.value = producto.id;
   // option.setAttribute("value", producto.id)
   selectProducto.appendChild(option);
  });
 }
 let endpoint = `${URL_BACKEND}/producto`;
 fetch(endpoint).then((response) => {
  response.json().then((data) => {
   console.log(data);
   dibujar(data);
  })
 })
}


formPedido.onsubmit = (e) => {
 e.preventDefault();


 let fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

 let objPedido = {
  // En un select, la propiedad value, es el value del option seleccionado
  id_pro: selectProducto.value,
  id_rep: selectRepartidor.value,
  id_cli: selectCliente.value,
  ped_ini: inputOrigen.value,
  ped_fin: inputDestino.value,
  ped_est: 'solicitado',
  ped_fech: fecha
 }

 fetch(`${URL_BACKEND}/pedido`, {
  method: 'POST',
  body: JSON.stringify(objPedido),
  headers: {
   "Content-type": "application/json"
  }
 }).then((response) => {
  response.json().then((data) => {
   console.log(data);
  })
 })


}



getRepartidores();
getClientes();
getProductos();