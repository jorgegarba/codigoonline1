"use strict";

var dibujarPeliculas = function dibujarPeliculas(_ref) {
  var results = _ref.results;
  results.forEach(function (peli) {
    var carouselCell = $("<div class=\"carousel-cell\"></div>");
    var card = $("<div class=\"card\"></div>");
    var imagen = $("<div class=\"card-img-top imagen-pelicula\"></div>");
    imagen.css("background-image", "url(\"https://image.tmdb.org/t/p/w500".concat(peli.poster_path, "\")"));
    var cardBody = $("<div class=\"card-body\"></div>");
    var cardTitle = $("<h4 class=\"card-title\">".concat(peli.title, "</h4>"));
    var cardText = $("<p class=\"card-text\">".concat(peli.overview.substr(0, 50), "</p>"));
    var leerMas = $("<span>... Leer Mas</span>");
    cardText.append(leerMas);
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    card.append(imagen);
    card.append(cardBody);
    carouselCell.append(card);
    $("#contenedor-peliculas").append(carouselCell);
  });
  $('#contenedor-peliculas').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
};

var traerPeliculas = function traerPeliculas() {
  var endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es";
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