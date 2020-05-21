const dibujarPeliculas = ({ results }) => {
  results.forEach((peli) => {

    let carouselCell = $(`<div class="carousel-cell"></div>`);
    let card = $(`<div class="card"></div>`);
    let imagen = $(`<div class="card-img-top imagen-pelicula"></div>`);
    imagen.css("background-image", `url("https://image.tmdb.org/t/p/w500${peli.poster_path}")`);

    let cardBody = $(`<div class="card-body"></div>`);
    let cardTitle = $(`<h4 class="card-title">${peli.title}</h4>`);

    let cardText = $(`<p class="card-text">${peli.overview.substr(0, 50)}</p>`);
    let leerMas = $(`<span>... Leer Mas</span>`);
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
}

const traerPeliculas = () => {
  let endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es";
  fetch(endpoint, { method: 'GET', body: null })
    .then((response) => {
      response.json().then((data) => {
        dibujarPeliculas(data);
      })
    })
}

traerPeliculas();
console.log("Adios");
