let mymap = L.map('mapid').setView([-16.4028734, -71.5137748], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 id: 'mapbox/streets-v11',
 tileSize: 512,
 zoomOffset: -1,
 accessToken: 'pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw'
}).addTo(mymap);

var marker = L.marker([-16.40289, -71.52]).addTo(mymap);

var circle = L.circle([-16.44, -71.6], {
 color: 'red',
 fillColor: '#f03',
 fillOpacity: 0.5,
 radius: 500
}).addTo(mymap);

var polygon = L.polygon([
 [-16.40289, -71.6],
 [-16.44, -71.62],
 [-16.46, -71.68]
]).addTo(mymap);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

const colocarMarcador = ({ latlng: { lat, lng } }) => {
 // el siguiente codigo crea las variables lat y lng
 // sin destructuracion
 // let lat = e.latlng.lat;
 // let lng = e.latlng.lng;
 var icono = L.icon({
  iconUrl: './img/marker.png',
  iconSize: [32, 32], // size of the icon
  iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 let marcador = L.marker([lat, lng], { icon: icono }).addTo(mymap);

}

mymap.on("click", (e) => {
 console.log(e);
 console.log("Latitud: " + e.latlng.lat);
 console.log("Longitud: " + e.latlng.lng);
 colocarMarcador(e)
});