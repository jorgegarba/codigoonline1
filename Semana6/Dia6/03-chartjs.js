var ctx = document.getElementById('miGrafico').getContext('2d');


// logica para armar los arreglos del covid


let arregloMeses = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

var chart = new Chart(ctx, {
 // The type of chart we want to create
 type: 'bar',

 // The data for our dataset
 data: {
  labels: arregloMeses,
  datasets: [{
   label: 'Infectados',
   backgroundColor: 'rgb(255, 99, 132)',
   borderColor: 'rgb(255, 99, 132)',
   data: [100, 5000, 3000, 4300, 2000, 3000, 4500]
  },
  {
   label: 'Recuperados',
   backgroundColor: 'rgb(44, 171, 116)',
   borderColor: 'rgb(44, 171, 116)',
   data: [2, 400, 200, 256, 456, 321, 543]
  }]
 },

 // Configuration options go here
 options: {}
});