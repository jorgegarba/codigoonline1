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
    var cardText = $("<p class=\"card-text\"></p>");
    var spanTexto = $("<span>".concat(peli.overview.substr(0, 50), "</span>"));
    var leerMas = $("<span class=\"text-danger\">... Leer Mas</span>");
    cardText.append(spanTexto);
    cardText.append(leerMas);
    leerMas.click(function () {
      // capturamis nuevamente al slider de flickity
      var flick = $('#contenedor-peliculas').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });
      var leerMasTexto = leerMas.text();

      if (leerMasTexto.indexOf("Mas") > -1) {
        // texto estaba chiquito
        spanTexto.text(peli.overview);
        leerMas.text(" Leer Menos"); // recalculamos la altura de flickity

        flick.flickity('resize');
      } else {
        // texto estaba largo
        spanTexto.text(peli.overview.substr(0, 50));
        leerMas.text("... Leer Mas"); // recalculamos la altura de flickity

        flick.flickity('resize');
      }
    });
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    card.append(imagen);
    card.append(cardBody);
    carouselCell.append(card);
    $("#contenedor-peliculas").append(carouselCell);
  }); // Toma al slider de Flickity y y lo convierte en UN SLIDER como tal

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