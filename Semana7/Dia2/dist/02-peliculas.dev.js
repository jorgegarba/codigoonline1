"use strict";

var dibujarPeliculas = function dibujarPeliculas(_ref) {
  var results = _ref.results;
  results.forEach(function (peli) {
    $("#contenedor-peliculas").append("\n       <div class=\"carousel-cell\">\n        <div class=\"card\">\n         <img src=\"http://placehold.it/150x150\" alt=\"\" class=\"card-img-top\">\n         <div class=\"card-body\">\n          <h4 class=\"card-title\">".concat(peli.original_title, "</h4>\n          <p class=\"card-text\">\n           ").concat(peli.overview, "\n          </p>\n         </div>\n        </div>\n       </div>"));
  });
  $('#contenedor-peliculas').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
};

var traerPeliculas = function traerPeliculas() {
  var endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105eb79aa1e6df60a2b95878ad2289aa";
  fetch(endpoint, {
    method: 'GET',
    body: null
  }).then(function (response) {
    response.json().then(function (data) {
      dibujarPeliculas(data);
    });
  });
};

traerPeliculas();
console.log("Adios");