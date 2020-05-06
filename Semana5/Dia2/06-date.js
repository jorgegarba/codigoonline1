// Tipo de dato DATE
let hoy = new Date();

// getFullYear() Este método devuelve un número entero que representa el año(un valor
// de 4 dígitos).
// getMonth() Este método devuelve un número entero que representa el mes(un valor
// de 0 a 11).
// getDate() Este método devuelve un número entero que representa el día del mes(un
// valor de 1 a 31).
// getDay() Este método devuelve un número entero que representa el día de la semana
//     (un valor de 0 a 6).
// getHours() Este método devuelve un número que representa las horas(un valor de 0 a 23).
// getMinutes() Este método devuelve un número entero que representa los minutos(un
// valor de 0 a 59).

let anioActual = hoy.getFullYear();
console.log(`Anio => ${anioActual}`);

let mesActual = hoy.getMonth();
console.log(`Mes => ${mesActual}`);

let diaCalendario = hoy.getDate();
console.log(`Dia Calendario => ${diaCalendario}`);

let horas = hoy.getHours();
console.log(`horas => ${horas}`);

let minutos = hoy.getMinutes();
console.log(`minutos => ${minutos}`);

let segundos = hoy.getSeconds();
console.log(`segundos => ${segundos}`);

let milisegundos = hoy.getMilliseconds();
console.log(`milisegundos => ${milisegundos}`);

// ----- Crear una fecha con datos distintos a hoy
// Colocar los numeros en el siguiente orden
// let fecha = new Date(anio,mes[0-11],dia,hora,minutos,segundos);
// se puede obviar las horas, minutos y segundos

let navidad = new Date(2020, 11, 25);

// El resultado de restar dos fechas se obtiene en milisegundos
console.log(navidad - hoy);

// a partir de la respuesta, calulcar la cantidad de semanas, dias y horas 
// que quedan para navidad.