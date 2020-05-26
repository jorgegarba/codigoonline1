// AQUI ESTARÁ EL CÓDIGO PRINCIPAL
// 1. importar el contenido de otros archivos
// el contenido pueden ser funciones, variables, etc, etc

import { API_KEY, sumar } from './funciones.js'
// Importando todas las funciones, variables, etc, 
// que han sido exportadas en rutas.js 
// y lo guardamos en un objeto => misRutas
import * as misRutas from './rutas.js';


let btn1 = document.getElementById("btn1");
btn1.onclick = misRutas.clickBoton;

misRutas.funcion2();
sumar(60, 9);