const dibujarPeliculas = ({ results }) => {
 results.forEach((peli) => {
  $("#contenedor-peliculas").append(`
       <div class="carousel-cell">
        <div class="card">
         <img src="http://placehold.it/150x150" alt="" class="card-img-top">
         <div class="card-body">
          <h4 class="card-title">${peli.original_title}</h4>
          <p class="card-text">
           ${peli.overview}
          </p>
         </div>
        </div>
       </div>`);
 });

 $('#contenedor-peliculas').flickity({
  // options
  cellAlign: 'left',
  contain: true
 });
}

const traerPeliculas = () => {
 let endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105eb79aa1e6df60a2b95878ad2289aa";
 fetch(endpoint, { method: 'GET', body: null })
  .then((response) => {
   response.json().then((data) => {
    dibujarPeliculas(data);
   })
  })
}

traerPeliculas();
console.log("Adios");
