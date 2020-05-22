let busqueda__input = document.getElementById("busqueda__input");
let busquedaForm = document.getElementById("busquedaForm");
let cargando = document.getElementById("cargando");
let clima = document.getElementById("clima");

let iconDOM = document.getElementById("icon");
let tempDOM = document.getElementById("temp");
let nameDOM = document.getElementById("name");
let countryDOM = document.getElementById("country");
let mainDOM = document.getElementById("main");
let fechaDOM = document.getElementById("fecha");

const dibujarClima = (data) => {
 let icon = data.weather[0].icon;
 let temp = data.main.temp.toFixed(0);
 let name = data.name;
 let country = data.sys.country;
 let fecha = (new Date()).getDate() + "/" + ((new Date()).getMonth() + 1);
 let main = data.weather[0].main;

 iconDOM.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`)
 tempDOM.innerHTML = `${temp}&#8451;`;
 nameDOM.innerText = name;
 countryDOM.innerText = country;
 mainDOM.innerText = main;
 fechaDOM.innerText = fecha;
 // mostrar el card informativo
 clima.removeAttribute("hidden");
 cargando.setAttribute("hidden", "hidden");

}


const buscarCiudad = (ciudad) => {
 cargando.removeAttribute("hidden");
 clima.setAttribute("hidden", "hidden");
 busqueda__input.value = "";
 busqueda__input.focus();

 let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f216cdc5ffb3839b7ebdb07394220bc1&units=metric`
 fetch(endpoint).then((response) => {
  response.json().then((data) => {
   if (data.cod === 200) {
    dibujarClima(data);
   } else {
    cargando.setAttribute("hidden", "hidden");
    // Disparar un sweetalert con un mensaje de error
    // que el sweetalert, se borre a los 2 segundos luego de aparecer
    // Sweetalert
   }
  })
 })
}


busquedaForm.onsubmit = (e) => {
 e.preventDefault();
 buscarCiudad(busqueda__input.value.trim());
}