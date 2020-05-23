"use strict";

var busqueda__input = document.getElementById("busqueda__input");
var busquedaForm = document.getElementById("busquedaForm");
var cargando = document.getElementById("cargando");
var clima = document.getElementById("clima");
var iconDOM = document.getElementById("icon");
var tempDOM = document.getElementById("temp");
var nameDOM = document.getElementById("name");
var countryDOM = document.getElementById("country");
var mainDOM = document.getElementById("main");
var fechaDOM = document.getElementById("fecha");

var dibujarClima = function dibujarClima(data) {
  var icon = data.weather[0].icon;
  var temp = data.main.temp.toFixed(0);
  var name = data.name;
  var country = data.sys.country;
  var fecha = new Date().getDate() + "/" + (new Date().getMonth() + 1);
  var main = data.weather[0].main;
  iconDOM.setAttribute("src", "http://openweathermap.org/img/wn/".concat(icon, "@4x.png"));
  tempDOM.innerHTML = "".concat(temp, "&#8451;");
  nameDOM.innerText = name;
  countryDOM.innerText = country;
  mainDOM.innerText = main;
  fechaDOM.innerText = fecha; // mostrar el card informativo

  clima.removeAttribute("hidden");
  cargando.setAttribute("hidden", "hidden");
};

var buscarCiudad = function buscarCiudad(ciudad) {
  cargando.removeAttribute("hidden");
  clima.setAttribute("hidden", "hidden");
  busqueda__input.value = "";
  busqueda__input.focus();
  var endpoint = "https://api.openweathermap.org/data/2.5/weather?q=".concat(ciudad, "&appid=f216cdc5ffb3839b7ebdb07394220bc1&units=metric");
  fetch(endpoint).then(function (response) {
    response.json().then(function (data) {
      if (data.cod === 200) {
        dibujarClima(data);
      } else {
        cargando.setAttribute("hidden", "hidden"); // Disparar un sweetalert con un mensaje de error
        // que el sweetalert, se borre a los 2 segundos luego de aparecer
        // Sweetalert

        Swal.fire({
          icon: 'error',
          title: 'Ups!',
          text: 'La ciudad buscada no existe =(',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  });
};

busquedaForm.onsubmit = function (e) {
  e.preventDefault();
  buscarCiudad(busqueda__input.value.trim());
};